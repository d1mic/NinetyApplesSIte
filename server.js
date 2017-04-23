const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();


app.use(compress({
  filter: function (req, res) {
    return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
  },
  level: 3,
  threshold: 512
}));


var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms', { stream: logger.stream }));

// Setting up static folder
app.use(express.static('./dist'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride());
app.use(helmet());


// Application routes
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

module.exports = app;

if (!module.parent) {
  app.set('port', (process.env.PORT || 3000));
  app.set('trust proxy', 1); // trust first proxy

  app.listen(app.get('port'), () => {
    winston.info('Server has started on port %d', app.get('port'));
  });
}