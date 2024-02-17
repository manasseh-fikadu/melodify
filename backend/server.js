const express = require("express");
const mongoose = require("mongoose");
const songRoutes = require("./routes/songs");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/songs", songRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
