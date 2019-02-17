/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const profile = require('./routes/profile.route');
app.use('/profiles', profile);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://launchpartner:launch@launchpartnerprofiles-mhpw4.mongodb.net/test?retryWrites=trues";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("launch_test").collection("profiles");
//  // perform actions on the collection object
//  console.log(err)
//  console.log(collection)
//
//   client.close();
// });

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb+srv://launchpartner:launch@launchpartnerprofiles-mhpw4.mongodb.net/admin';
let dev_db_url = 'mongodb+srv://launchpartner:launch@launchpartnerprofiles-mhpw4.mongodb.net/test?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});

// username: launchpartner password: launch
// login: chrisjackshay@gmail.com password: c10171991!
