import  { useState, useEffect } from "react";
import axios from "axios";
import "./MenuSection.css";

function MenuTabs() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  useEffect(() => {
    // Fetch menu items for the selected menu
    if (selectedMenuId) {
      const fetchMenuItems = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/menu-items/${selectedMenuId}`
          );
          setMenuItems(response.data); 
        } catch (error) {
          console.error("Error fetching menu items:", error);
        }
      };

      fetchMenuItems();
    }
  }, [selectedMenuId]);

  const handleMenuSelect = (menuId) => {
    setSelectedMenuId(menuId);
  };

  return (
    <div className="menu-tabs">
      <button className="menu-tab" onClick={() => handleMenuSelect("foodMenuId")}>
        Food
      </button>
      <button className="menu-tab" onClick={() => handleMenuSelect("drinksMenuId")}>
        Drinks
      </button>
      <button className="menu-tab" onClick={() => handleMenuSelect("brunchMenuId")}>
        Brunch
      </button>

      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item._id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuTabs;
