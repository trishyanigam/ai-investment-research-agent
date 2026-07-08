const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Root Endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "AI Investment Research Agent Backend Running"
  });
});

// API Routes
app.use("/api", routes);

// Wildcard 404 Endpoint Handler
app.use(notFound);

// Global Central Error Handler Middleware
app.use(errorHandler);

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});