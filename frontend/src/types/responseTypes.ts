export interface ResponseData {
  rows: Station[] | Trip[];
  count: number;
}

export interface Station {
  FID: number;
  id: number;
  nimi: string;
  namn: string;
  name: string;
  adress: string;
  kaupunki: string;
  stad: string;
  operaattor: string;
  kapasiteet: number;
  x: number;
  y: number;
}

export interface Trip {
  id: number;
  departureTime: Date;
  returnTime: Date;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  distanceInMeters: number;
  durationInSeconds: number;

  //...
}
