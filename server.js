'use strict';

const express = require('express');

const port = 3000;

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      id: 2,
      firstName: 'Brad',
      lastName: 'Traversy'
    },
  ];

  res.json(users);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));

