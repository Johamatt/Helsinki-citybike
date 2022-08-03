import connection from "./connection";
import Station from "../models/stations";
import Trip from "../models/trip";

const sequelize = connection;
Station.initModel(sequelize);
Trip.initModel(sequelize);

// Station.hasMany(Trip, {
//   sourceKey: "id",
//   foreignKey: "departureStationId",
//   as: "tripsDepartureStationId",
// });
// Station.hasMany(Trip, {
//   sourceKey: "id",
//   foreignKey: "returnStationId",
//   as: "tripsReturnStationId",
// });



export const db = {
  sequelize,
  Trip,
  Station,
};
