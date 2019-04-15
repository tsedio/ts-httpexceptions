# ts-httpexceptions 

[![Build Status](https://travis-ci.org/TypedProject/ts-httpexceptions.svg?branch=master)](https://travis-ci.org/TypedProject/ts-httpexceptions)
[![Coverage Status](https://coveralls.io/repos/github/TypedProject/ts-httpexceptions/badge.svg?branch=master)](https://coveralls.io/github/TypedProject/ts-httpexceptions?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=100)](https://github.com/ellerbrock/typescript-badges/) 
[![Package Quality](http://npm.packagequality.com/shield/ts-express-decorators.png)](http://packagequality.com/#?package=ts-express-decorators)
[![npm version](https://badge.fury.io/js/ts-express-decorators.svg)](https://badge.fury.io/js/ts-express-decorators)
[![Dependencies](https://david-dm.org/TypedProject/ts-httpexceptions.svg)](https://david-dm.org/TypedProject/ts-httpexceptions#info=dependencies)
[![img](https://david-dm.org/TypedProject/ts-httpexceptions/dev-status.svg)](https://david-dm.org/TypedProject/ts-httpexceptions/#info=devDependencies)
[![img](https://david-dm.org/TypedProject/ts-httpexceptions/peer-status.svg)](https://david-dm.org/TypedProject/ts-httpexceptions/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/TypedProject/ts-httpexceptions/badge.svg)](https://snyk.io/test/github/TypedProject/ts-httpexceptions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Provide Exceptions for REST API based on Express.js. Written in Typescript !

See [guide installation](https://TypedProject.github.io/ts-httpexceptions/#/getting-started) and our [API](https://TypedProject.github.io/ts-httpexceptions/#/api/index).
## Features

Some HTTP Exceptions are already implemented : 

Redirections (3xx):

 * MovedPermanently,
 * MovedTemporarily,
 * MultipleChoices,
 * NotModified,
 * PermanentRedirect,
 * SeeOther,
 * TemporaryRedirect,
 * TooManyRedirects,
 * UseProxy.

Client errors (4xx) :

 * BadMapping,
 * BadRequest,
 * Conflict,
 * ExpectationFailed,
 * Forbidden,
 * Gone,
 * ImATeapot,
 * LengthRequired,
 * MethodNotAllowed,
 * MisdirectedRequest,
 * NotAcceptable,
 * NotFound,
 * PaymentRequired,
 * PreconditionFailed,
 * PreconditionRequired,
 * ProxyAuthentificationRequired,
 * RequestedRandeUnsatifiable,
 * RequestTimeout,
 * RequestURITooLong,
 * TooManyRequests,
 * Unauthorized,
 * UnavailabledForLegalReasons,
 * UnsupportedMediaType,
 * UpgradeRequired.
 
Server errors (5xx) :
 
 * BadGateway,
 * BandwidthLimitExceeded,
 * GatewayTimeout,
 * InternalServerError,
 * NetworkAuthenticationRequired,
 * NotExtended,
 * NotImplemented,
 * ProxyError,
 * ServiceUnvailable,
 * VariantAlsoNegotiates.
 
You can use HTTPExceptions method to throw a custom Exception.


## Installation

```bash
$ npm install -g typescript@2.0.2
$ npm install ts-httpexceptions
```

## API

```typescript
import {BadRequest, Exception, NotFound} from 'ts-httpexceptions';
const express = require('express');
const app = express();

app.get('/my/route/:id', async (req, res, next) => {
 if (req.params.id === undefined) {
   const error = new BadRequest("ID is required")
   
   // Additionally
   error.headers = {
     'x-header': 'value'
   }
   error.errors = [{'message': "ID is required"}]
   error.body = [{'message': "ID is required"}]
   
   next(error);
 }
 
 try {
   const user = await getUser(res.params.id)
   res.json(user);
 } catch(origin) {
   next(new NotFound('User not found',  origin))
 }
});


//GlobalHandler middleware catch exception and send response to the client
app.use((err, request, response, next) => {
 if(err instanceof Exception) {
   if (err.errors) { // If errors is provided
     response.set({'x-errors': JSON.stringify(err.errors)})
   }
   
   if (err.headers) {
     response.set(err.headers)
   }
   
   if (err.body) { // If a body is provided
     return response.status(err.status).json(err.body)
   }
   
   return response.status(err.status).send(err.message);
 }
 
 next()
});
```


## Test

```bash 
$ npm install -g mocha
$ npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/
