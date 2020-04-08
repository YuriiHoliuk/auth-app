'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.patch('/comments/id', (req, res) => {
  res.send('patch:comments/id')
})


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
