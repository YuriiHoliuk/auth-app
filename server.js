'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.post('/sign-in', (req, res) => {
  res.send('you are signed in');
});

app.get('/comments', (req, res) => {
  res.json(['gergregr', 'wefwee', 'wefwegeag', 'wefewfewggrhth']);
});

app.patch('/posts/:id', (req, res) => {
  res.send(`Post with id:${req.params.id} is updated`);
});
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
