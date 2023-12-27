// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const BlogRoutes = require('./router/BlogRoutes');
const authRoutes = require("./router/Auth");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://pallavibobde1:PnxgzwmLpiUmTOvy@cluster0.2imbxbb.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/blog", BlogRoutes);

app.use("/api/auth", authRoutes);

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
