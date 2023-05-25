const express = require("express");
const router = express.Router();
const controllerDomaine = require("../Controllers/getDomaine");
const controllerFormation = require("../Controllers/getFormation");
const controllerSession = require("../Controllers/getSession");

router.get("/getDomaine", controllerDomaine.recupDomaine);
router.get("/getFormation/:domaineId", controllerFormation.recupFormation)
router.get("/getSession/:formationId", controllerSession.recupSession)

module.exports = router;