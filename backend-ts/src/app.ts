import express, { urlencoded, json } from "express";
import travelRoutes from "./routes/travels";
import stationRoutes from "./routes/stations";
import { db } from "./models";

const app = express();
const PORT = process.env.PORT || 4000;

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

db.sequelize.sync().then(() => {
  try {
    db.sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

app.listen(PORT);

module.exports = app;
export default app;
