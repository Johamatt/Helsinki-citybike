// import  Trips  from "../../../models/trip";
// import  Station  from "../../../models/stations";

// import { Sequelize } from "sequelize-typescript";
// import { trips } from "./dbData";

// const models: any = Trips, Station ;

// export const generateTrips = async () => {
//   return await Trips.bulkCreate(trips);
// };

// export const getOneRandomTrip = async () => {
//   await generateTrips();
//   return Trips.findOne({ order: [Sequelize.fn("RAND")] });
// };

// export const cleanDatabase = async () => {
//   Promise.all(
//     Object.keys(models).map((key) => {
//       if (["sequelize", "Sequelize"].includes(key)) return null;
//       return models[key].destroy({ where: {}, force: true });
//     })
//   );
// };
