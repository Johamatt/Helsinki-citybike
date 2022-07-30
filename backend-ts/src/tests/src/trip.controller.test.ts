// import request from "supertest";
// import app from "../../app";
// import {
//   cleanDatabase,
//   generateTrips,
//   getOneRandomTrip,
// } from "./util/testDBsetter";

// beforeEach(async () => {
//   await cleanDatabase();
// });

// describe("Trips API", () => {
//   it("should return one", async () => {
//     await generateTrips();
//     const trip = await getOneRandomTrip();
//     console.log(trip);

//     const res = await request(app).get("/trips/1");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("data");
//   }),
//     it("should return 10", async () => {
//       const res = await request(app).get("/trips/?page=0&size=10");
//       expect(res.statusCode).toEqual(200);
//       expect(res.body.data.rows).toHaveLength(10);
//       expect(res.body).toHaveProperty("data");
//     }),
//     it("should return invalid parameter error", async () => {
//       const res = await request(app).get("/trips/?page=a&size=b");

//       expect(res.statusCode).toEqual(400);
//       expect(res.body).toHaveProperty("error");
//     });
// });
