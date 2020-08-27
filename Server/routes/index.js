const express = require('express');

const router = express.Router();

router.use('/analytics', require('./analytics'));
router.use('/ssp1', require('./ssp1'));
router.use('/ssp2', require('./ssp2'));

module.exports = router;
