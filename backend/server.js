const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const songRoutes = require("./routes/songRoutes");

const app = express();

// =====Middleware
app.use(cors());
app.use(express.json());

// =====Routes
app.use("/api/songs", songRoutes);

// =======MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/astra", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ============Server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
