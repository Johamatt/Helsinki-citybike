import { RequestHandler } from "express";
import { Stations } from "../models/stations";

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
