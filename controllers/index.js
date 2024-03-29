// Import routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Set up middleware
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// Export the router
module.exports = router;