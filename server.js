'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const path = require('path');
const port = 3000;

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.patch('/comments/:commentId', bodyParser.json(), (req, res) => {
  res.send('patch:comments/:commentId');

  const filePath = path.join(__dirname, `../data/${req.params.commentId}.json`);
  let data;

  try {
    data = JSON.parse(fs.readFileSync(filePath));
  } catch (e) {
    res.status(404)
      .send('Not found');
  }

  const newData = {
    ...data, ...req.body,
  };

  fs.writeFileSync(filePath, JSON.stringify(newData));
  res.json(newData);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
