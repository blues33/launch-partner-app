const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/profile.controller');

router.get('/test', profile_controller.test);
router.post('/create', profile_controller.profile_create);

module.exports = router;