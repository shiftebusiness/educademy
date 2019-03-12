import express from 'express';
import webpack from 'webpack';
const asyncHandler  = require('express-async-handler');
const bodyParser = require('body-parser');
import axios from 'axios';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const compiler = webpack(config);

async function postAPI(req, res, next) {
    const route = req.originalUrl;
    // console.log('ROUTE:: ', route);
    // console.log('BODY:: ', req.body);
    const result = await axios.post('http://shiftdev.net/workspace/plan3/' + route, req.body);
    console.log('RESULT ', result.data);
    res.send(result.data) ;
}

async function getAPI(req, res, next) {
    const route = req.originalUrl;
    // console.log('ROUTE:: ', route);
    // console.log('QUERY PARAMS:: ', req.query);
    const result = await axios.get('http://shiftdev.net/workspace/plan3/' + route, {params: req.query});
    console.log('RESULT ', result.data);
    res.send(result.data) ;
}

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/appapi/*', asyncHandler(getAPI));
app.post('/appapi/*', asyncHandler(postAPI));

app.get('/*', function(req, res) {
  console.log('I WILL DO SOME CHANGES TO SERVER .........');
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});