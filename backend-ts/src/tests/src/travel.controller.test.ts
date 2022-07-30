// import request from "supertest";
// import app from "../../app";
// import {
//   cleanDatabase,
//   generateTravels,
//   getOneRandomTravel,
// } from "./util/testDBsetter";

// beforeEach(async () => {
//   await cleanDatabase();
// });

// describe("Travels API", () => {
//   it("should return one", async () => {
//     await generateTravels();
//     const travel = await getOneRandomTravel();
//     console.log(travel);

//     const res = await request(app).get("/travels/1");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   }),
//     it("should return 10", async () => {
//       const res = await request(app).get("/travels/?page=0&size=10");
//       expect(res.statusCode).toEqual(200);
//       expect(res.body.data.rows).toHaveLength(10);
//       expect(res.body).toHaveProperty("data");
//     }),
//     it("should return invalid parameter error", async () => {
//       const res = await request(app).get("/travels/?page=a&size=b");

//       expect(res.statusCode).toEqual(400);
//       expect(res.body).toHaveProperty("error");
//     });
// });
