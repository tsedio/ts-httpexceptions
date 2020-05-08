# ts-httpexceptions 

This repository is archived. The source code is now available on https://github.com/TypedProject/tsed/tree/production/packages/exceptions repository

See documentation on [https://tsed.io](https://tsed.io/docs/exceptions.html).

## Installation

```
npm install @tsed/exceptions
```

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

## Contributors
Please read [contributing guidelines here](./CONTRIBUTING.md).

<a href="https://github.com/TypedProject/tsed/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2020 Ts.ED

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/
