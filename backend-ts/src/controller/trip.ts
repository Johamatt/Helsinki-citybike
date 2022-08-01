import { RequestHandler } from "express";
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import moment from "moment";
import { validTripCsvRow } from "../utils/validation/validateCsvRow";
import { validGetPagination } from "../utils/validation/queryparams/validGetPagination";

import Trip from "../models/trip";
import { validGetPaginatedFilterTrip } from "../utils/validation/queryparams/validGetPaginatedFilterTrip";
import { validGetId } from "../utils/validation/queryparams/validGetById";

export const getTripsPaginationFilter: RequestHandler = async (req, res) => {
  if (!validGetPaginatedFilterTrip(req.query)) {
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

export const getTripsPagination: RequestHandler = async (req, res) => {
  if (!validGetPagination(req.query)) {
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

export const getTripById: RequestHandler = async (req, res) => {
  if (!validGetId(req.params)) {
    return res.status(200).json({ error: "invalid parameter value" });
  }
  const { id } = req.params;
  const trip: Trip | null = await Trip.findByPk(id);
  return res.status(200).json({ data: trip });
};

export const uploadTripCSV: RequestHandler = (req: any, res) => {
  const parser = parse({
    skip_records_with_error: true,
    delimiter: ",",
    cast_date: true,
    cast: true,
    encoding: "utf8",
    from_line: 2,
    columns: Object.keys(Trip.getAttributes()).slice(1),
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
