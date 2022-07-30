import connection from "../db/config";
import Station from "./stations";
import Travel from "./travel";

const sequelize = connection;

Travel.initModel(sequelize);
Station.initModel(sequelize);

export const db = {
  sequelize,
  Travel,
  Station,
};
