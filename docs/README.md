# Ts.HttpExceptions

> HTTP Exceptions for REST API based on Express.js

See [guide installation](getting-started.md) and our [API](api/index.md)

## Example

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
