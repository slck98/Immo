const express = require('express');
const afbeeldingenController = require('../controllers/afbeeldingen_controller');
const { body } = require('express-validator');
const { afbeeldingen } = require('../db/prisma');
const router = express.Router();

router.post("/add",
  [
    body("url").exists(),
    body("updatedAt").exists(),
    body("pandenId").exists()],afbeeldingenController.add);
module.exports = router;