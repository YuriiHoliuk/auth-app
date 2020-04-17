const { Router } = require('express');
const { authRoutes } = require('./auth');

const routes = () => {
  const router = Router();

  router.use('/auth', authRoutes());

  return router;
};

module.exports = {
  routes,
};
