const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_ENDPOINT || 'mongodb://localhost:27017/budgy',
  { useNewUrlParser: true, useCreateIndex: true },
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Budgy DB connected'));
