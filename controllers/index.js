const router = require('express').Router();

const empRoutes = require('./empRoutes');
const apiRoutes = require('./apiRoutes');

router.use(empRoutes);
router.use("/api", apiRoutes);

module.exports = router;
