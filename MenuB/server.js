require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");


const menuRoutes = require("./Routes/menuRoutes");
const menuItemRoutes = require("./Routes/menuItemRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/menus", menuRoutes); 
app.use("/api/menu-items", menuItemRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
