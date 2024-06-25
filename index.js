require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { PORT, MONGODB_URI } = process.env;

// middleware
app.use(express.json());

// connecting to mongodb and starting the server
mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to mongodb successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

// defining the routes
const authRoutes = require("./routes/auth.routes");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
