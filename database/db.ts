import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("existing database connection");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log("Using old database connection");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConnection.isConnected = 1;
  console.log("Connected to MongoDB:", process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "production") return;

  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("disconnect from MongoDB");
};
