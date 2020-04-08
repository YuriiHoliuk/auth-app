'use strict';

const express = require('express');

const port = 3000;

const app = express();
const users = [
  {
    id: 1, name: 'Dima', age: 31,
  },
  {
    id: 2, name: 'Dave', age: 31,
  },
];

app.use(express.json());

app.post('/sign-up', (req, res) => {
  res.json(users);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
