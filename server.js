'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.get('/comments/:id', (req, res) => {
  res.send(`Return all comments with id: ${req.params.id} `);
});

app.get('/comments', (req, res) => {
  res.json(['gergregr', 'wefwee', 'wefwegeag', 'wefewfewggrhth']);
});

app.patch('/posts/:id', (req, res) => {
  res.send(`Post with id:${req.params.id} is updated`);
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
