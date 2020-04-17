const { authService } = require('./auth.service');

const authController = {
  async signIn(req, res) {
    const { email, password } = req.body;

    try {
      const [user, token] = await authService.signIn(email, password);

      res.setHeader('access-control-expose-headers', 'x-token');
      res.setHeader('x-token', token);

      res.json(user);
    } catch (error) {
      res.status(error.code).send(error.message);
    }
  },
};

module.exports = {
  authController,
};
