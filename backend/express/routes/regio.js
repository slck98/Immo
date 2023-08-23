const express = require('express');
const regioController = require('../controllers/regio_controller');
const { body } = require('express-validator');
const { regio } = require('../db/prisma');
const router = express.Router();

router.get("/",regioController.findAll);
module.exports = router;