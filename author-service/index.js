const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/authordb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/authors', (req, res) => {
  // logic to get authors
  res.send('List of authors');
});

app.listen(PORT, () => {
  console.log(`Author service running on port ${PORT}`);
});