import express from "express";
import config from "config";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.post("/api/data", (req, res) => {
  console.log(req.body);

  return res.sendStatus(200);
});
