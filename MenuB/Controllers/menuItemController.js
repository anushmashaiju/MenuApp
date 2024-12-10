const MenuItem = require("../Models/MenuItem");

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { menuId, name, description, price } = req.body;
    const menuItem = new MenuItem({ menuId, name, description, price });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get menu items by menuId
exports.getMenuItemsByMenu = async (req, res) => {
  try {
    const { menuId } = req.params;
    const menuItems = await MenuItem.find({ menuId });
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
