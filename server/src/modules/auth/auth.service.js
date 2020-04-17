const { UserModel } = require('../../models');

const authService = {
  async signIn(email, password) {
    const user = await UserModel.findByEmail(email);

    ensureUserExists(user);
    ensurePasswordCorrect(password, user);

    const token = createToken(email);

    return [removePasswordFromUser(user), token];
  },
};

module.exports = {
  authService,
};
