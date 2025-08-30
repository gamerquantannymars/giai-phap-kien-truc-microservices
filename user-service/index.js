const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/users', (req, res) => {
  // logic to get users
  res.send('List of users');
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});