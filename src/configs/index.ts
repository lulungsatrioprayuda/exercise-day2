import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  //  databaseUrl:
  //    process.env.DATABASE_URL || "mongodb://localhost:27017/express-typescript",
  jwtSecret: process.env.JWT_SECRET || "secret",
};

export default config;
