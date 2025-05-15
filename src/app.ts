import express, { Express } from "express";
import routes from "./routes";
import { loggerMiddleware } from "./middleware/logger.middleware";
import { errorHandler } from "./middleware/error.middleware";

const app: Express = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

//routes
app.use("/api", routes);

//error hendler
app.use(errorHandler);

//handle unmatched routes
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route ${req.originalUrl} not found`,
  });
});

export default app;
