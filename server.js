'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.post('/sign-up', (req, res) => {
  res.send('Got a POST request');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
