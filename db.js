const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/budgy');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Budgy DB connected'));
