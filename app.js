const express = require("express");
const app = express();
const morgan = require('morgan')
const postBank = require('./postBank')

const board = require('./postboard')
const specific = require('./postdetails')

app.use(express.static('public'))
app.use(morgan('dev'));

app.get("/", (req, res) => {
      res.send(board.site)
});

app.get('/posts/:id', (req, res) => {
  const post = postBank.find(req.params.id)
  res.send(specific.details(post))
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

