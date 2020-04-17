const { Router } = require('express');
const { authController } = require('./auth.controller');

const authRoutes = () => {
  const router = Router();

  router.post('/sign-in', authController.signIn);
  // router.post('/sign-up');

  return router;
};

module.exports = {
  authRoutes,
};
