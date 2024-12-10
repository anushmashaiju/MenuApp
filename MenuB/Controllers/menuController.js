const Menu = require("../Models/Menu");

// Create a new menu
exports.createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = new Menu({ name, description });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
