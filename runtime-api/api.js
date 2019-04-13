const express = require('express');
const bodyParser = require('body-parser');
const stringify = require('json-stringify-safe');

const api = express();

api.use(bodyParser.json());

api.get('/2018-06-01/runtime/invocation/next', (_, res) => {
  console.log("invocation next");
  res.set({
    'lambda-runtime-aws-request-id': `aws-req-id-${Math.random()}`,
    'lambda-runtime-deadline-ms': (new Date()).getTime() + 100,
    'lambda-runtime-trace-id': `xray-trace-id-${Math.random()}`,
    'lambda-runtime-invoked-function-arn': 'test-function-arn',
  });
  res.json({x: 42, y: 24});
});

api.post('/2018-06-01/runtime/invocation/:id/error', (req, res) => {
  console.log("invocation error", stringify(req.body));
  res.json({});
});

api.post('/2018-06-01/runtime/invocation/:id/response', (req, res) => {
  console.log("invocation response", stringify(req.body));
  res.json({});
});

api.post('/2018-06-01/runtime/init/error', (req, res) => {
  console.log("init error", stringify(req.body));
  res.json({});
});

module.exports = api;
