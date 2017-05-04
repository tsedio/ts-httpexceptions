# ts-httpexceptions 

[![Build Status](https://travis-ci.org/Romakita/ts-httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/ts-httpexceptions)
[![Coverage Status](https://coveralls.io/repos/github/Romakita/ts-httpexceptions/badge.svg?branch=master)](https://coveralls.io/github/Romakita/ts-httpexceptions?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=100)](https://github.com/ellerbrock/typescript-badges/) 
[![Package Quality](http://npm.packagequality.com/shield/ts-express-decorators.png)](http://packagequality.com/#?package=ts-express-decorators)
[![npm version](https://badge.fury.io/js/ts-express-decorators.svg)](https://badge.fury.io/js/ts-express-decorators)
[![Dependencies](https://david-dm.org/Romakita/ts-httpexceptions.svg)](https://david-dm.org/Romakita/ts-httpexceptions#info=dependencies)
[![img](https://david-dm.org/Romakita/ts-httpexceptions/dev-status.svg)](https://david-dm.org/Romakita/ts-httpexceptions/#info=devDependencies)
[![img](https://david-dm.org/Romakita/ts-httpexceptions/peer-status.svg)](https://david-dm.org/Romakita/ts-httpexceptions/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/Romakita/ts-httpexceptions/badge.svg)](https://snyk.io/test/github/Romakita/ts-httpexceptions)

> Provide Exceptions for REST API based on Express.js. Written in Typescript !

This module lets you to throw an HTTP Exception quickly. 

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
   import {BadRequest, Exception} from 'ts-httpexceptions';
   let express = require('express');
   let app = express();
   
   app.get('/my/route', (req, res) => {
   
        throw new BadRequest('Custom Message'); //Emit
        // OR
        // throw new Exception(510, 'Custom Message');
   
   });
   
   app.get('/my/route/params', (req, res) => {
      
      if (req.params.id === undefined){
        throw new BadRequest();
      }
      
   });
   
   
   //GlobalHandler middleware catch exception and send response to the client
   app.use((err, request, response) => {

        if(err instanceof Exception){
            response.status(err.status).send(err.message);
        }

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