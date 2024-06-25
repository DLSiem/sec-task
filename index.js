require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const { PORT, MONGODB_URI } = process.env;

// middleware
app.use(express.json());
app.use(bodyParser.json());

// connecting to mongodb and starting the server
mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to mongodb successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

// defining the routes
const authRoutes = require("./routes/auth.routes");
const homeRoutes = require("./routes/home.routes");
const privateTaskRoutes = require("./routes/privateTask.routes");

app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/privatetask", privateTaskRoutes);
