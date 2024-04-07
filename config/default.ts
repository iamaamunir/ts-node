import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/",
};

export default CONFIG;
