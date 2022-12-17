const express = require('express');
const router = express.Router();

const {createTasks} = require('../controllers/contact');

router.route('/').post(createTasks);
module.exports= router;