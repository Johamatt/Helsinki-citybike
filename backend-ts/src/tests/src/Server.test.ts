const request = require("supertest");
const app = require("../../app");

describe("Travels API", () => {
  it("should return one", async () => {
    const res = await request(app).get("/travels/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  }),
    it("should return 10", async () => {
      const res = await request(app).get("/travels/?page=1&size=10");
      expect(res.statusCode).toEqual(200);
      expect(res.body.data.rows).toHaveLength(10);
      expect(res.body).toHaveProperty("data");
    }),
    it("should return invalid parameter error", async () => {
      const res = await request(app).get("/travels/?page=a&size=b");

      expect(res.statusCode).toEqual(444);
      expect(res.body).toHaveProperty("error");
    });
});
