import express from 'express';
import { helloWorld } from './routes';

var app = express();

app.get('/', helloWorld);

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});