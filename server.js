'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.get('/todo/:id', (req, res, next) => {
  if (req.params.id === 0) {
    next('route');
  } else {
    next();
  }
}, (req, res, next) => {
  res.json({
    todoId: 1, title: 'First Todo', description: 'BlaBlaBla',
  });
});

app.get('/comments', (req, res) => {
  res.json(['gergregr', 'wefwee', 'wefwegeag', 'wefewfewggrhth']);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
