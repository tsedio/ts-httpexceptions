# Getting started

## Installation

You can get the latest release using npm:

```batch
$ npm install --save ts-httpexceptions
```

> **Important!** Ts.ED requires Node >= 8 and TypeScript >= 2.0. 


## Example

```typescript
import {BadRequest, Exception, NotFound} from 'ts-httpexceptions';
const express = require('express'); // Koa works also
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
