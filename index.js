const express = require("express");
require("dotenv").config();
const http = require("http");
const corsConfiguration = require("./config/cors");
const connectDb = require("./config/dbConnection");
const messageRoutes = require("./routes/messageRoutes");
const setupSocket = require("./socket/socket");
const updateRoutes = require("./routes/updateRoutes");
const visitorRoutes = require("./routes/visitorRoute");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(corsConfiguration);
// app.use(cors("*"));
app.use(express.json());

// Routes
app.use("/api/messages", messageRoutes);
app.use("/updates", updateRoutes);
app.use("/api", visitorRoutes);

// Setup WebSocket
setupSocket(server);

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  try {
    // Connect to MongoDB
    await connectDb();
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
