import { RequestHandler } from "express";
import { Stations } from "../models/stations";
import { parse } from "csv-parse";
import * as fs from "fs";
import * as path from "path";

export const getAllStations: RequestHandler = async (req, res, next) => {
  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);

  const allStations: any = await Stations.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
  });
  return res.status(200).json({ data: allStations });
};

export const getStationById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const station: Stations | null = await Stations.findByPk(id);
  return res.status(200).json({ data: station });
};

export const uploadStationCSV: RequestHandler = async (req: any, res, next) => {
  const parser = parse({
    delimiter: ",",
    encoding: "utf8",
    from_line: 2,
    columns: [
      "FID",
      "ID",
      "Nimi",
      "Namn",
      "Name",
      "Osoite",
      "Adress",
      "Kaupunki",
      "Stad",
      "Operaattor",
      "Kapasiteet",
      "x",
      "y",
    ],
  });

  const stations: any = [];
  fs.createReadStream(
    path.join(__dirname, "../utils/uploads", req.file.filename)
  )
    .pipe(parser)
    .on("error", (error) => {
      console.error(error);
      throw error.message;
    })
    .on("data", (row) => {
      delete row.FID;
      console.log(row);
      stations.push(row);
    })
    .on("end", async () => {
      try {
        await Stations.bulkCreate(stations);
      } catch (err) {
        console.log(err);
      }
      fs.close;
      return res.json(res.status);
    });
};
