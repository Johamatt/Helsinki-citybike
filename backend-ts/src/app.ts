import express, { urlencoded, json } from "express";
import connection from "./db/config";
import travelRoutes from "./routes/travels";

import stationRoutes from "./routes/stations";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/travels", travelRoutes);
app.use("/stations", stationRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection.sync().then(() => {
  try {
    connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

app.listen(3000);
