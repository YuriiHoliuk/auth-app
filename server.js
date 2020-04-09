'use strict';

require('dotenv').config();

const fs = require('fs').promises;
const path = require('path');
const express = require('express');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');

const port = process.env.PORT;
const privateKey = process.env.PRIVATE_KEY;

const app = express();

app.use(express.json());

app.post('/sign-in', async(req, res) => {
  const { email, password } = req.body;

  const usersFilePath = path.join(__dirname, 'data', 'users.json');
  const usersFileContent = await fs.readFile(usersFilePath);
  const users = JSON.parse(usersFileContent);

  const user = users.find(existingUser => existingUser.email === email);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  const { password: userPassword, ...userWithoutPassword } = user;

  if (password !== userPassword) {
    res.sendStatus(401);

    return;
  }

  const token = jwt.sign({ email: user.email }, privateKey);

  res.setHeader('x-token', token);

  res.json(userWithoutPassword);
});

app.post('/sign-up', async(req, res) => {
  const { repeatPassword, ...user } = req.body;

  if (!user.email || !user.password || repeatPassword !== user.password) {
    res.sendStatus(400);

    return;
  }

  const usersFilePath = path.join(__dirname, 'data', 'users.json');
  const usersFileContent = await fs.readFile(usersFilePath);
  const users = JSON.parse(usersFileContent);

  const userWithSameEmail = users
    .find(existingUser => existingUser.email === user.email);

  if (userWithSameEmail) {
    res.sendStatus(400);

    return;
  }

  user.id = uuid();

  users.push(user);

  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

  const token = jwt.sign({ email: user.email }, privateKey);

  res.setHeader('x-token', token);

  const { password: userPassword, ...userWithoutPassword } = user;

  res.json(userWithoutPassword);
});

app.get('/comments', async(req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    res.sendStatus(401);

    return;
  }

  let userDataFromToken;

  try {
    userDataFromToken = jwt.verify(token, privateKey);
  } catch (error) {
    res.sendStatus(401);

    return;
  }

  const { email } = userDataFromToken;

  const usersFilePath = path.join(__dirname, 'data', 'users.json');
  const usersFileContent = await fs.readFile(usersFilePath);
  const users = JSON.parse(usersFileContent);

  const user = users.find(existingUser => existingUser.email === email);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  const commentsFilePath = path.join(__dirname, 'data', 'comments.json');
  const commentsFileContent = await fs.readFile(commentsFilePath);
  const comments = JSON.parse(commentsFileContent);

  const userComments = comments.filter(({ userId }) => user.id === userId);

  res.json(userComments);
});

app.patch('/posts/:id', (req, res) => {
  res.send(`Post with id:${req.params.id} is updated`);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}`));
