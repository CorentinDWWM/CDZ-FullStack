require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users");
const produitRoutes = require("./routes/produits");
const videoRoutes = require("./routes/videos");
const achatRoutes = require("./routes/achats");
const userAchatRoutes = require("./routes/userAchats");
const cors = require("cors");
// const allowedOrigin = "*";
const allowedOrigin = "https://cdz-fullstack.onrender.com";
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
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/users", userRoutes);
app.use("/api/produits", produitRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/achats", achatRoutes);
app.use("/api/userAchats", userAchatRoutes);

app.use(express.static(path.join(__DIRNAME, "frontend/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__DIRNAME, "frontend", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Connected to db & listening on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));
