const ensureUserExists = (user) => {
  if (!user) {
    const error = new Error(`User with email ${email} not found`);

    error.code = 404;

    throw error;
  }
};

const removePasswordFromUser = (user) => {
  const {
    password,
    ...userWithoutPassword
  } = user;

  return userWithoutPassword;
};

module.exports = {
  ensureUserExists,
  removePasswordFromUser,
};
