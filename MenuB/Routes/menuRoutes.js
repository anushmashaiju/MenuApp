const express = require("express");
const { createMenu, getAllMenus } = require("../Controllers/menuController");
const router = express.Router();

router.post("/", createMenu); // Create a new menu
router.get("/", getAllMenus); // Get all menus

module.exports = router;
