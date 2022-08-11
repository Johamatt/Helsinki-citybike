export interface ResponseData {
  rows: Station[] | Trip[];
  count: number;
}

export interface Station {
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: number;
  x: number;
  y: number;
}

export interface Trip {
  id: number;
  //...
}
