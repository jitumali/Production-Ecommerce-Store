const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const CategoryRoute = require("./routes/categoryRoute");
const productRoutes = require('./routes/productRoutes')
const cors = require("cors");
const path = require('path');

// configure env
dotenv.config();

//Database config
connectDB();

// rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./client/build')));

// //routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product",productRoutes)

// rest api
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
// port
const PORT = process.env.PORT || 4000;

//run listen
app.listen(process.env.PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} on http://127.0.0.1:${process.env.PORT}`
  );
});
