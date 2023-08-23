const express = require('express');
const pandenController = require('../controllers/panden_controller');
const { body } = require('express-validator');
const { panden } = require('../db/prisma');
const router = express.Router();


router.get("/",pandenController.findAll);
router.get("/:id([0-9]+)",pandenController.findById);
router.post("/add",
  [
    body("prijs").exists(),
    body("straat").exists(),
    body("huisnummer").exists(),
    body("bus"),
    body("postcode").exists().isInt({ min: 1000 }),
    body("gemeente").exists(),
    body("aantalKamers").exists().isInt({ min: 1 }),
    body("oppervlakte").exists().isInt({ min: 1 }),
    body("beschrijving").exists(),
    body("updatedAt").exists(),
    body("type").exists(),
    body("typePandId").exists(),
    body("isVerkochtVerhuurd").exists()],pandenController.add);
router.put("/:id([0-9]+)/update", pandenController.update);
router.put("/:id([0-9]+)/delete", pandenController.delete);
module.exports = router;