'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.patch('/posts/:id', (req, res) => {
  res.send(`Post with id:${req.params.id} is updated`);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
