const { Server } = require("socket.io");
const Message = require("../models/messageModel");
require("dotenv").config();

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CHAT_ORIGIN || "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 User Connected:", socket.id);

    // Handle message event
    socket.on("sendMessage", async (data) => {
      const newMessage = new Message({
        sender: data.sender,
        message: data.message,
      });

      await newMessage.save();
      io.emit("receiveMessage", newMessage); // Broadcast to all users
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("🔴 User Disconnected:", socket.id);
    });
  });

  return io;
};

module.exports = setupSocket;
