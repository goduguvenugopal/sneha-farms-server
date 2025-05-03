const express = require("express");
require("dotenv").config();
const http = require("http");
const corsConfiguration = require("./config/cors");
const connectDb = require("./config/dbConnection");
const messageRoutes = require("./routes/messageRoutes");
const setupSocket = require("./socket/socket");
const updateRoutes = require("./routes/updateRoutes")

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDb();

// Middlewares
app.use(corsConfiguration);
app.use(express.json());

// Routes
app.use("/api/messages", messageRoutes);
app.use("/updates", updateRoutes)

// Setup WebSocket
setupSocket(server);

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
