import { RequestHandler } from "express";
import { parse } from "csv-parse";
import * as fs from "fs";
import * as path from "path";
import { validStationCsvRow } from "../utils/validation/validateCsvRow";
import { validGetPagination } from "../utils/validation/queryparams/validGetPagination";
import { validGetId } from "../utils/validation/queryparams/validGetById";
import Station from "../models/stations";
import { validGetPaginatedFilterStation } from "../utils/validation/queryparams/validGetPaginatedFilterStation";

export const getStationsPaginationFilter: RequestHandler = async (req, res) => {
  if (!validGetPaginatedFilterStation(req.query)) {
    return res.status(400).json({ error: "invalid parameter value(s)" });
  }
  const order: any = req.query.order;
  const col: any = req.query.column;
  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);
  const filterPaginatedTrips: any = await Station.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
    order: [[col, order]],
  });
  return res.status(200).json({ data: filterPaginatedTrips });
};

export const getStationsPagination: RequestHandler = async (req, res) => {
  if (!validGetPagination(req.query)) {
    return res.status(200).json({ error: "invalid parameter value(s)" });
  }
  const page: number = parseInt(req.query.page as string);
  const size: number = parseInt(req.query.size as string);
  const allStations: any = await Station.findAndCountAll({
    limit: size as number,
    offset: (page * size) as number,
  });
  return res.status(200).json({ data: allStations });
};

export const getStationById: RequestHandler = async (req, res) => {
  if (!validGetId(req.params)) {
    return res.status(200).json({ error: "invalid parameter value" });
  }
  const { id } = req.params;
  const station: Station | null = await Station.findByPk(id);

  return res.status(200).json({ data: station });
};

export const uploadStationCSV: RequestHandler = async (req: any, res) => {
  const parser = parse({
    skip_records_with_error: true,
    delimiter: ",",
    encoding: "utf8",
    from_line: 2,
    columns: Object.keys(Station.getAttributes()),
  });

  const stations: any = [];
  let failedImports: any = [];
  let rownumber = 0;

  fs.createReadStream(
    path.join(__dirname, "../utils/uploads", req.file.filename)
  )
    .pipe(parser)
    .on("error", (error) => {
      throw error.message;
    })

    .on("skip", async (row) => {
      failedImports.push({
        row: row.record.toString(),
        atRowNumber: row.lines,
      });
    })

    .on("data", (row) => {
      rownumber++;
      delete row.FID;
      if (validStationCsvRow(row)) {
        stations.push(row);
      } else {
        failedImports.push({
          row: Object.values(row).toString(),
          atRowNumber: rownumber,
        });
      }
    })

    .on("end", async () => {
      try {
        await Station.bulkCreate(stations);
      } catch (error) {
        console.log(error);
      }
      fs.close;

      return res.json({
        dataModel: "station",
        failedImports: failedImports,
        totalNumberOfRows: rownumber,
        filename: req.file.filename,
      });
    });
};
