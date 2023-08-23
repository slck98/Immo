const express = require('express');
const typePandController = require('../controllers/typePand_controller');
const { body } = require('express-validator');
const { typePand } = require('../db/prisma');
const router = express.Router();

router.get("/",typePandController.findAll);
module.exports = router;