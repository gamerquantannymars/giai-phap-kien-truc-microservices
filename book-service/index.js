const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/bookdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/books', (req, res) => {
  // logic to get books
  res.send('List of books');
});

app.listen(PORT, () => {
  console.log(`Book service running on port ${PORT}`);
});