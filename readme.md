# ts-httpexceptions 

[![Build Status](https://travis-ci.org/Romakita/ts-httpexceptions.svg?branch=master)](https://travis-ci.org/Romakita/ts-httpexceptions)
[![Coverage Status](https://coveralls.io/repos/github/Romakita/ts-httpexceptions/badge.svg?branch=master)](https://coveralls.io/github/Romakita/ts-httpexceptions?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=100)](https://github.com/ellerbrock/typescript-badges/) 
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-v18.svg?v=100)](https://github.com/ellerbrock/typescript-badges/)

> Provide Exceptions for REST API based on Express.js. Written in Typescript !

This module lets you to throw an HTTP Exception quickly. 

## Features

Some HTTP Exception are already implemented : 
 * BadRequest
 * Unauthorized
 * PaymentRequired 
 * Forbidden
 * NotFound
 * MethodNotAllowed
 * NotAcceptable
 * InternalServerError
 * NotImplemented
 * BadGateway
 * ProxyError
 * ServiceUnvailable
 * GatewayTimeout
 
You can use HTTPExceptions method to throw a custom Exception (see example).


## Installation

```bash
$ npm install -g typescript typings 
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