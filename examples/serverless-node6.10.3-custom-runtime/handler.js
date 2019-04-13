'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully using a custom runtime!',
      version: process.version,
      _HANDLER: process.env._HANDLER,
      AWS_REGION: process.env.AWS_REGION,
      AWS_EXECUTION_ENV: process.env.AWS_EXECUTION_ENV,
      AWS_LAMBDA_FUNCTION_NAME: process.env.AWS_LAMBDA_FUNCTION_NAME,
      AWS_LAMBDA_FUNCTION_MEMORY_SIZE: process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE,
      AWS_LAMBDA_FUNCTION_VERSION: process.env.AWS_LAMBDA_FUNCTION_VERSION,
      TZ: process.env.TZ,
      LAMBDA_TASK_ROOT: process.env.LAMBDA_TASK_ROOT,
      LAMBDA_RUNTIME_DIR: process.env.LAMBDA_RUNTIME_DIR,
      PATH: process.env.PATH,
      LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH,
      AWS_LAMBDA_RUNTIME_API: process.env.AWS_LAMBDA_RUNTIME_API,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
