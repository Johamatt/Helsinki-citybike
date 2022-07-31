import { RequestHandler } from "express";
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import moment from "moment";
import { validTripCsvRow } from "../utils/validation/validateCsvRow";
import { validGetPagination } from "../utils/validation/queryparams/validGetPagination";

import Trip from "../models/trip";
import { validGetPaginatedFilterTrip } from "../utils/validation/queryparams/validGetPaginatedFilterTrip";

export const getPaginationFilter: RequestHandler = async (req, res, next) => {
  if (
    !validGetPaginatedFilterTrip(
      req.query.page,
      req.query.size,
      req.query.column,
      req.query.order
    )
  ) {
    return res.status(400).json({ error: "invalid parameter value(s)" });
  }

  const order: any = req.query.order;
  const col: any = req.query.column;
  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);

  const filterPaginatedTrips: any = await Trip.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
    order: [[col, order]],
  });

  return res.status(200).json({ data: filterPaginatedTrips });
};

export const getTripsPagination: RequestHandler = async (req, res, next) => {
  if (!validGetPagination(req.query.page, req.query.size)) {
    return res.status(400).json({ error: "invalid parameter value(s)" });
  }

  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);

  const paginatedTrips: any = await Trip.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
  });

  return res.status(200).json({ data: paginatedTrips });
};

export const getTripById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const trip: Trip | null = await Trip.findByPk(id);
  return res.status(200).json({ data: trip });
};

export const uploadTripCSV: RequestHandler = (req: any, res, next) => {
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

  let trips: any = [];
  let failedImports: any = [];
  let rownumber = 0;

  const read = fs
    .createReadStream(
      path.join(__dirname, "../utils/uploads", req.file.filename)
    )
    .pipe(parser)
    .on("error", (error) => {
      throw error.message;
    })
    .on("skip", async (row) => {
      console.log(row);
      failedImports.push({ row: row.record, atRowNumber: row.lines });
    })
    .on("data", async (row) => {
      rownumber++;

      if (validTripCsvRow(row)) {
        trips.push(row);
      } else {
        failedImports.push({ row: Object.values(row), atRowNumber: rownumber });
      }

      //limit bulkCreate to 50000, crash on bigger inserts.
      if (trips.length >= 50000) {
        try {
          read.pause();
          await Trip.bulkCreate(trips);
          trips = [];
          read.resume();
        } catch (err) {
          console.log(err);
        }
      }
    })

    .on("end", async () => {
      try {
        await Trip.bulkCreate(trips);
      } catch (err) {
        console.log(err);
      }

      fs.close;

      return res.json({
        dataModel: "trip",
        failedImports: failedImports,
        totalNumberOfRows: rownumber,
        filename: req.file.filename,
      });
    });
};
