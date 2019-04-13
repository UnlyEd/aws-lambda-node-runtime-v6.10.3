const aws = require('aws-sdk');
const stringify = require('json-stringify-safe');

const handler = (event, ctx) =>
  Promise.resolve({
    event,
    ctx,
    node_version: process.version,
    remaining_time: ctx.getRemainingTimeInMillis(),
    aws: stringify(aws),
  })

module.exports = { handler };

