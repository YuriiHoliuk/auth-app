'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/posts', (request, response) => {
  response.jsonp('posts: ', ['dfv', 'ergeg']);
});

app.get('/comments', (req, res) => {
  res.json(['gergregr', 'wefwee', 'wefwegeag', 'wefewfewggrhth']);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
