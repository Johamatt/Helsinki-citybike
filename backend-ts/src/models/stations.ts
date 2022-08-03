import {
  Association,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from "sequelize";
import Trip from "./trip";

export default class Station extends Model<
  InferAttributes<Station, { omit: "trips" }>,
  InferCreationAttributes<Station, { omit: "trips" }>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare FID: CreationOptional<number>;

  declare id: CreationOptional<number>;

  declare nimi: string;
  declare namn: string | null; // for nullable fields
  declare name: string | null;

  declare osoite: string;
  declare adress: string | null; // for nullable fields
  declare kaupunki: string | null;

  declare stad: string;
  declare operaattor: string | null; // for nullable fields
  declare kapasiteet: string | null;

  declare x: number;
  declare y: number;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  declare getTrips: HasManyGetAssociationsMixin<Trip>; // Note the null assertions!
  declare addTrip: HasManyAddAssociationMixin<Trip, number>;
  declare addTrips: HasManyAddAssociationsMixin<Trip, number>;
  declare setTrips: HasManySetAssociationsMixin<Trip, number>;
  declare removeTrip: HasManyRemoveAssociationMixin<Trip, number>;
  declare removeTrips: HasManyRemoveAssociationsMixin<Trip, number>;
  declare hasTrip: HasManyHasAssociationMixin<Trip, number>;
  declare hasTrips: HasManyHasAssociationsMixin<Trip, number>;
  declare countTrips: HasManyCountAssociationsMixin;
  declare createTrip: HasManyCreateAssociationMixin<Trip, "id">;

  declare trips?: NonAttribute<Trip[]>; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    trips: Association<Station, Trip>;
  };

  

  static initModel(sequelize: Sequelize): void {
    Station.init(
      {
        FID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        nimi: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        namn: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        osoite: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        adress: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        kaupunki: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stad: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        operaattor: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        kapasiteet: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        x: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },

        y: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        createdAt: false,
        updatedAt: false,
        tableName: "stations",
        sequelize, // passing the `sequelize` instance is required
      }
    );
  }
}
