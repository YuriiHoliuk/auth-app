'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/post', (req, res) => {
  res.send('POST request to the homepage');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
