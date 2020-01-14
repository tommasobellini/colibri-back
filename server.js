import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
var bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/data');

// Initialize http server
const app = express();
app.use(bodyParser.json());
// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});