const express = require("express");
const {
  createMenuItem,
  getMenuItemsByMenu,
} = require("../Controllers/menuItemController");
const router = express.Router();

router.post("/", createMenuItem); // Create a new menu item
router.get("/:menuId", getMenuItemsByMenu); // Get menu items by menu ID

module.exports = router;
