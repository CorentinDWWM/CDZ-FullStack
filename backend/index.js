require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users");
const roleRoutes = require("./routes/roles");
const produitRoutes = require("./routes/produits");
const videoRoutes = require("./routes/videos");
const achatRoutes = require("./routes/achats");
// const cors = require("cors");
const allowedOrigin = "*";
// const allowedOrigin = "https://cdz-fullstack.onrender.com";
const path = require("path");
const __DIRNAME = path.resolve();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
// app.use(
//   cors({
//     origin: "*",
//   })
// );
app.use("/api/users", userRoutes);
app.use("api/roles", roleRoutes);
app.use("/api/produits", produitRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/achats", achatRoutes);

app.use(express.static(path.join(__DIRNAME, "frontend/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__DIRNAME, "frontend", "dist", "index.html"));
});

mongoose
  .connect(
    "mongodb+srv://newsonic62:ouais@firsttest.2ozolmj.mongodb.net/CDZ?retryWrites=true&w=majority&appName=FirstTest"
  )
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Connected to db & listening on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));
