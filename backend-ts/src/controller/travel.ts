import { RequestHandler } from "express";

import { Travels } from "../models/travel";

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
