export interface ResponseData<T> {
  rows: T[];
  count: number;
}

export interface Station {
  data: any;
  rows: Station[];
  FID: number;
  id: number;
  osoite: string;
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
  totalTripsStarted?: Array<{ count: number }>;
  totalTripsEnded?: Array<{ count: number }>;
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
}

export interface Report {
  dataModel: string;
  failedImports: Array<any>;
  filename: string;
  totalNumberOfRows: number;
}
