const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

//this is for sycnhronous errors
// if we put an sycnhronous error on middleware then express will send the error to global error handler on request
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

/* 
// configuration for local connection
const DB = process.env.DATABASE_LOCAL;
*/

mongoose.connect(DB).then(() => {
  console.log('DB connection succesfull');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// this event is for asynchronous errors
// Example : catching the database error on connection. (maybe incorrect password)
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1); // 0 for success and 1 stands for uncaught exception
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated!');
  });
});
