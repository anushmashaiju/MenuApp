import  { useState, useEffect } from "react";
import axios from "axios";
import "./MenuSection.css";

function MenuSection() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // Fetch menus from the backend
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menus");
        setMenus(response.data); // Set menus in state
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <section className="menu-section">
      <div className="menu-overlay">
        <h1 className="menu-title">MENU</h1>
        <p className="menu-description">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
          place an order, use the "Order Online" button located below the menu.
        </p>

        <div className="menu-list">
          {menus.map((menu) => (
            <div key={menu._id} className="menu">
              <h2>{menu.name}</h2>
              <p>{menu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
