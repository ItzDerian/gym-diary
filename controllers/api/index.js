const router = require('express').Router();
const userRoutes = require('./userRoutes');
const logRoutes = require('./logRoutes');
const test = require('./testRoutes');

// require Auth
router.use('/users', userRoutes);
router.use('/logs', logRoutes);

// test routes - don't require Auth
router.use('/test', test);

module.exports = router;