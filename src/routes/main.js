const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController')
const isAdmin = require('../../middlewares/isAdmin')

router.get("/", mainController.index);

router.get('/admin', isAdmin, mainController.admin);

module.exports = router;