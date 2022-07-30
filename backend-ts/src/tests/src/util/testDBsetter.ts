// import  Travels  from "../../../models/travel";
// import  Station  from "../../../models/stations";

// import { Sequelize } from "sequelize-typescript";
// import { travels } from "./dbData";

// const models: any = Travels, Station ;

// export const generateTravels = async () => {
//   return await Travels.bulkCreate(travels);
// };

// export const getOneRandomTravel = async () => {
//   await generateTravels();
//   return Travels.findOne({ order: [Sequelize.fn("RAND")] });
// };

// export const cleanDatabase = async () => {
//   Promise.all(
//     Object.keys(models).map((key) => {
//       if (["sequelize", "Sequelize"].includes(key)) return null;
//       return models[key].destroy({ where: {}, force: true });
//     })
//   );
// };
