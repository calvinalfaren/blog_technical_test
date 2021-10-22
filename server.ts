// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import {enableProdMode} from '@angular/core';

import * as express from 'express';
import * as compression from "compression";
import {join, dirname } from 'path';
import * as nunjucks from 'nunjucks';

var request = require('request');
const {URL} = require('url');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join('dist', 'browser', 'index.html')).toString();
const win = domino.createWindow(template);

global['window'] = win;
global['document'] = win.document;
global['DOMTokenList'] = win.DOMTokenList;
global['Node'] = win.Node;
global['Text'] = win.Text;
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;
global['MutationObserver'] = getMockMutationObserver();

function getMockMutationObserver() {
  return class {
    observe(node, options) {
    }

    disconnect() {
    }

    takeRecords() {
      return [];
    }
  };
}

const options = {
  root: process.cwd()
};

// Express server
const app = express();
app.use(compression())

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
// import {API_URL, API_FILE_URL, BACKEND_URL} from './src/app/app.local';

const defaultMeta = {
  'og:type': 'website',
  'og:title': 'Technical Test Centrinova',
  'og:description': 'Technical Test Centrinova',
  'og:image': ''
};

const aboutMeta = {
  'og:type': 'website',
  'og:title': 'Technical Test Centrinova',
  'og:description': 'Technical Test Centrinova',
  'og:image': ''
};




nunjucks.configure(join(DIST_FOLDER, 'browser'), {
  express: app,
  autoescape: true
});

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));


// TODO: implement data requests securely
// app.get('/api/*', (req, res) => {
//   res.status(404).send('data requests are not supported');
// });
// var proxy = require('express-http-proxy');
// app.use('/api', proxy(API_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(API_URL + req.url);
//   }
// }));

// app.use('/swagger-ui.html', proxy(API_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(BACKEND_URL + "/swagger-ui.html");
//   } 
// }));

// app.use('/webjars', proxy(API_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(BACKEND_URL + "/webjars" + req.url);
//   }
// }));

// app.use('/swagger-resources', proxy(API_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(BACKEND_URL + "/swagger-resources"  + req.url);
//   }
// }));

// app.use('/v2', proxy(API_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(BACKEND_URL + "/v2" + req.url);
//   }
// }));

app.use("/robots.txt", (req, res) => {
  return res.status(200).sendFile("robots.txt", options);
});

app.use('/google5257894874e1bf8f.html', (req, res) => {
  return res.send('google-site-verification: google5257894874e1bf8f.html');
});

// app.use('/apifile', proxy(API_FILE_URL, {
//   proxyReqPathResolver: function (req) {
//     return new URL(API_FILE_URL + req.url);
//   }
// }));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  console.log(defaultMeta);
  res.render('index', {req, meta: defaultMeta});
});

// Start up the Node server
var server = app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
server.timeout = 15000;