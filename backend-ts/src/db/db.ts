import connection from "./connection";
import Station from "../models/stations";
import Trip from "../models/trip";

const sequelize = connection;

Trip.initModel(sequelize);
Station.initModel(sequelize);

export const db = {
  sequelize,
  Trip,
  Station,
};
