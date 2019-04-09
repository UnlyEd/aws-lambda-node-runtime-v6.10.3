# AWS Lambda NodeJS-10 LTS Runtime

AWS Lambda runtime API implemented in Node.js. The supported version is usually the latest LTS.

It's easy to use this project and build Node.js runtime that will target any version - just replace the version number in `auto/package` with your preferred one.

## Current versions

* Node.js - **6.10.3**
* aws-sdk - **2.422.0**

## Goals

* Provide always up-to-date Node.js execution environment.
* Include the most recent `aws-cli` library.
* MAke the runtime environment compatible with the default node6.10 and node8.10 environments

## How to install?

Prebuilt packages are available for use by any account in all AWS regions. Check the [releases page](https://github.com/janaz/aws-lambda-node-runtime/releases) for more information.

The following steps require `docker` and `docker-compose` to be installed on the system.

The minimum `awscli` version is 1.16.67.

### 1. Build

Run:

```bash
./auto/package
```

The script will build the Lambda layer in `stage/layer.zip` file.

### 2. Deploy

Deploy the runtime layer using the following command:

```bash
aws lambda publish-layer-version \
  --layer-name node-6-10-3-runtime \
  --description "nodejs-6.10.3 aws-cli-2.422.0" \
  --compatible-runtimes provided \
  --license-info Apache-2.0 \
  --zip-file fileb://stage/layer.zip
```

The output will look like this:
```json
{
    "Content": {
        "Location": "https://awslambda-eu-west-1-layers.s3.eu-west-1.amazonaws.com/snapshots/035907498810/node-6-10-3-runtime-10db7cbc-a9fd-4483-a39c-e257c0e3ab8c?versionId=yzP94rYEwEuFxVKEVay35hq6ZEijvkyn&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIGotH%2F9WChJtLSUhGI4whXBkHZfaIadlr6nHT2s4P2bQAiEA3SxE3L6hh689HnYc3tZxiiMcb4E2IcSjIKK4hCSjwV8q2gMIWRABGgw5NTQzNjkwODI1MTEiDIEXKGR6Nvc4Esh2Zyq3Ayaofx%2BBRbsjzmQN%2FjdwjP%2Bq3lfuFZYv2xrboiLLg0Pg6KZCSGBnHkolJh9n8suEIxGMgbujSCJC8RaTrPsz%2F55k9L9yWxuU1UJ%2BzUm6Xhh1RC%2Fu0D4OCocrI0tssubKEUdCTJtTMgJ5dhProRQ8ZWRy7%2FsP574n3qoiD1h5BwZIh%2FQibETeJKWyCRMvkw%2FyqLVIykh2gqvNBzgZRZfUko%2BWivmCKbJb4eNuDZTxtR5ZhHuLEMrR7dhhAA4CyHJwnN%2F3ifBVTIWtDXTsKPQha8iG5H3YZgfxYMhg8rArq3qs6ordD0dDq9g2UoJ8dEGzKf3t0vUKEzuOjMyDaSt7Kd4tFuOeWQCMXcdD8txIj3ONuCG7iDkpOA7RbPke%2BusZj0R8aNYa6vzpctwGNRLjJJNZldlWvPGI5JyERO17VXzJ7kVto5TTEki028HlYLyPWxulKkr7VCp73uqDLIlM1qfcbstr7%2BWqp21gPC%2BW17KP7HsO6c3bdljD2ES86EfBmdRNM0NTgWwV7wrrPZT2PfXbXltqVZL%2BTaRXV8tqotDEoLmePlHO1REraczGqEr0USSn%2FivlVacwupex5QU6tAHyDwX9Mb%2FTr6SwPLjUK%2Be0lSmMqdnY9yXrsaz2Gcu%2FaJDxvq2VD%2BpJgXC8fhgXw%2FBhC%2BSp4x4Elu%2BvnVBT0n24XbHWM0ksixC3g70WaOl%2BX6SHH%2F3VVw8VQd30ad5YB7tHTTP%2BHYyS1aeDVe1p7Wc5NTOgz%2F8zYSwDYWK0%2FWOB1htjZ50IYuwx%2ByJmZ6nfkkMB2jQ%2Fc2fK9M3u30fsJ3JI229V73m6I0llpEJAQxGBiTgGwwE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190409T083848Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=ASIA54NGUQSHZLCX7QEL%2F20190409%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6af501fb9ecb624a49d87571ca992e3765f2b601fda8ffed1c95107867cdf617",
        "CodeSha256": "ZdPhRnSjPGoD8fOSgbe9807tA5G5EZJWm7vTUFmsqLw=",
        "CodeSize": 15448997
    },
    "LayerArn": "arn:aws:lambda:eu-west-1:035907498810:layer:node-6-10-3-runtime",
    "LayerVersionArn": "arn:aws:lambda:eu-west-1:035907498810:layer:node-6-10-3-runtime:1",
    "Description": "nodejs-6.10.3 aws-cli-2.422.0",
    "CreatedDate": "2019-04-09T08:38:59.912+0000",
    "Version": 1,
    "CompatibleRuntimes": [
        "provided"
    ],
    "LicenseInfo": "Apache-2.0"
}
```

### 3. Share

You can share the layer with other AWS accounts by executing the following command:

```bash
aws lambda add-layer-version-permission \
  --layer-name node-10-runtime \
  --version-number 1 \
  --principal "*" \
  --statement-id publish \
  --action lambda:GetLayerVersion
```

Response:

```json
{
    "RevisionId": "8b5b2e27-5013-4983-ac1a-9008dff90bac",
    "Statement": "{\"Sid\":\"publish\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"lambda:GetLayerVersion\",\"Resource\":\"arn:aws:lambda:us-east-2:356111732087:layer:node-10-runtime:1\"}"
}
```

### 4. Deploy lambda function using this runtime

Let's assume that your lambda function is packaged as `lambda.zip` file and the handler is called `hello.handler`. The following command will deploy this function with the runtime layer that has just been deployed.

1. Create the lambda zip file

    ```bash
    zip lambda.zip hello.js
    ```

2. Create the function

    ```bash
    aws lambda create-function \
      --region us-east-2 \
      --function-name node-10-runtime-example \
      --zip-file fileb://lambda.zip \
      --handler hello.handler \
      --runtime provided \
      --layers "arn:aws:lambda:us-east-2:356111732087:layer:node-10-runtime:2" \
      --role arn:aws:iam::356111732087:role/lambda-role
      out.txt
    ```

    Response:

    ```json
    {
        "Layers": [
            {
                "CodeSize": 18104889,
                "Arn": "arn:aws:lambda:us-east-2:356111732087:layer:node-10-runtime:1"
            }
        ],
        "FunctionName": "node-10-runtime-example",
        "LastModified": "2018-12-02T22:59:10.408+0000",
        "RevisionId": "32e7e8a1-b5ba-4388-b6be-596278e36126",
        "MemorySize": 128,
        "Version": "$LATEST",
        "Role": "arn:aws:iam::356111732087:role/service-role/lambda-role",
        "Timeout": 3,
        "Runtime": "provided",
        "TracingConfig": {
            "Mode": "PassThrough"
        },
        "CodeSha256": "shSeSmJZHv8Z0WmOAcFcHeSUGbRYRR1cFdbEudkSJHo=",
        "Description": "",
        "CodeSize": 340,
        "FunctionArn": "arn:aws:lambda:us-east-2:356111732087:function:node-10-runtime-example",
        "Handler": "hello.handler"
    }
    ```

3. Invoke the function

    ```bash
    aws lambda invoke \
      --region us-east-2 \
      --function-name node-10-runtime-example \
      --payload '{"hello":"world"}' \
      output.txt

    cat output.txt
    ```

## Context object

The context object is compatible with [the default node environments](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html).

### Context Methods

* `getRemainingTimeInMillis()` – Returns the number of milliseconds left before the execution times out.

### Context Properties

* `functionName` – The name of the Lambda function.
* `functionVersion` – The version of the function.
* `invokedFunctionArn` – The Amazon Resource Name (ARN) used to invoke the function. Indicates if the invoker specified a version number or alias.
* `memoryLimitInMB` – The amount of memory configured on the function.
* `awsRequestId` – The identifier of the invocation request.
* `logGroupName` – The log group for the function.
* `logStreamName` – The log stream for the function instance.
* `callbackWaitsForEmptyEventLoop` – Set to false to send the response right away when the callback executes, instead of waiting for the Node.js event loop to be empty. If false, any outstanding events will continue to run during the next invocation.

### Not yet supported properties

* `identity` - Information about the Amazon Cognito identity that authorized the request.
* `clientContext` - Client context provided to the Lambda invoker by the client application.

    _The [Runtime API](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-api.html) exposes the above properties in the response headers from the `/runtime/invocation/next` endpoint, but the documentation doesn't exactly specify the format of the header value._

## Environment variables

Based on https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html

| Key | Reserved | Value |
|--|--|--|
|_HANDLER|Yes|The handler location configured on the function.|
|AWS_REGION|Yes|The AWS region where the Lambda function is executed.|
|AWS_EXECUTION_ENV|Yes|The [runtime identifier](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html), prefixed by AWS_Lambda_. For example, AWS_Lambda_java8.|
|AWS_LAMBDA_FUNCTION_NAME|Yes|The name of the function.|
|AWS_LAMBDA_FUNCTION_MEMORY_SIZE|Yes|The amount of memory available to the function in MB.|
|AWS_LAMBDA_FUNCTION_VERSION|Yes|The version of the function being executed.|
AWS_LAMBDA_LOG_GROUP_NAME AWS_LAMBDA_LOG_STREAM_NAME|Yes|The name of the Amazon CloudWatch Logs group and stream for the function.|
|AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN|Yes|Access keys obtained from the function's execution role.|
|LANG|No|en_US.UTF-8. This is the locale of the runtime.|
|TZ|Yes|The environment's timezone (UTC). The execution environment uses NTP to synchronize the system clock.|
|LAMBDA_TASK_ROOT|Yes|The path to your Lambda function code.|
|LAMBDA_RUNTIME_DIR|Yes|The path to runtime libraries.|
|PATH|No|/usr/local/bin:/usr/bin/:/bin:/opt/bin|
|LD_LIBRARY_PATH|No|/lib64:/usr/lib64:$LAMBDA_RUNTIME_DIR:$LAMBDA_RUNTIME_DIR/lib:$LAMBDA_TASK_ROOT:$LAMBDA_TASK_ROOT/lib:/opt/lib|
|NODE_PATH|No|/opt/node_modules|
|AWS_LAMBDA_RUNTIME_API|Yes|(custom runtime) The host and port of the [runtime API](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-api.html).|
