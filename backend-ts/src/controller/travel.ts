import { RequestHandler } from "express";
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import { Travels } from "../models/travel";
import moment from "moment";
import { validTravelCsvRow } from "../utils/validation/validateCsvRow";
import { importReport } from "../utils/report/importReport";

export const getAllTravels: RequestHandler = async (req, res, next) => {
  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);

  const allTravels: any = await Travels.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
  });

  return res.status(200).json({ data: allTravels });
};

export const getTravelById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const travel: Travels | null = await Travels.findByPk(id);
  return res.status(200).json({ data: travel });
};

export const uploadTravelCSV: RequestHandler = (req: any, res, next) => {
  const parser = parse({
    skip_records_with_error: true,
    delimiter: ",",
    cast_date: true,
    cast: true,
    encoding: "utf8",
    from_line: 2,
    columns: [
      "departureTime",
      "returnTime",
      "departureStationId",
      "departureStationName",
      "returnStationId",
      "returnStationName",
      "distanceInMeters",
      "durationInSeconds",
    ],
  });

  let travels: any = [];
  let failedImports: any = [];
  let rownumber = 1;

  const read = fs
    .createReadStream(
      path.join(__dirname, "../utils/uploads", req.file.filename)
    )
    .pipe(parser)
    .on("error", (error) => {
      console.error(error);
      throw error.message;
    })
    .on("skip", async (row) => {
      console.log(row.lines);
      failedImports.push({ row: row.record, atRowNumber: row.lines });
    })
    .on("data", async (row) => {
      rownumber++;
      console.log(row);
      if (validTravelCsvRow(row)) {
        travels.push(row);
      } else {
        failedImports.push({ row: row, atRowNumber: rownumber });
      }

      if (travels.length >= 50000) {
        try {
          read.pause();
          await Travels.bulkCreate(travels);
          travels = [];
          read.resume();
        } catch (err) {
          console.log(err);
        }
      }
    })

    .on("end", async () => {
      try {
        await Travels.bulkCreate(travels);
      } catch (err) {
        console.log(err);
      }

      importReport({
        dataModel: "travel",
        failedImports: failedImports,
        totalNumberOfRows: rownumber,
      });

      console.log(failedImports);
      fs.close;
      return res.json(res.statusCode);
    });
};
