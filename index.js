const express = require('express');
const handler = require('./handler');
const app = express();
app.get('/hello', handler.helloWorld);
app.listen(3001, () => console.log('Listening on port 3001'));
