# Getting started

## Installation

You can get the latest release using npm:

```batch
$ npm install --save ts-httpexceptions
```

> **Important!** Ts.ED requires Node >= 6, Express >= 4 and TypeScript >= 2.0. 


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
