const jwt = require('jwt');

const privateKey = privateKey.env.PRIVATE_KEY;

const ensurePasswordCorrect = (password, user) => {
  if (String(password) !== String(user.password)) {
    const error = new Error(`Invalid password`);

    error.code = 401;

    throw error;
  }
};

const createToken = (email) => {
  return jwt.sign({ email }, privateKey);
};

module.exports = {
  ensurePasswordCorrect,
  createToken,
};
