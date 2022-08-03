import express, { urlencoded, json } from "express";
import tripRoutes from "./routes/trips";
import stationRoutes from "./routes/stations";
import { db } from "./db/db";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/trips", tripRoutes);
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

(async () => {
  await db.sequelize.sync().then(() => {
    try {
      db.sequelize.authenticate();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });
})();
app.listen(PORT);

module.exports = app;
export default app;
