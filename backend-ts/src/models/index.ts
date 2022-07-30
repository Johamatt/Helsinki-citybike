import connection from "../db/config";
import Station from "./stations";
import Trip from "./trip";

const sequelize = connection;

Trip.initModel(sequelize);
Station.initModel(sequelize);

export const db = {
  sequelize,
  Trip,
  Station,
};
