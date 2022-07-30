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
  ModelDefined,
  Optional,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  ForeignKey,
} from "sequelize";
import Travel from "./travel";

export default class Station extends Model<
  InferAttributes<Station, { omit: "travels" }>,
  InferCreationAttributes<Station, { omit: "travels" }>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare FID: CreationOptional<number>;

  declare id: number;

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
  declare getTravels: HasManyGetAssociationsMixin<Travel>; // Note the null assertions!
  declare addTravel: HasManyAddAssociationMixin<Travel, number>;
  declare addTravels: HasManyAddAssociationsMixin<Travel, number>;
  declare setTravels: HasManySetAssociationsMixin<Travel, number>;
  declare removeTravel: HasManyRemoveAssociationMixin<Travel, number>;
  declare removeTravels: HasManyRemoveAssociationsMixin<Travel, number>;
  declare hasTravel: HasManyHasAssociationMixin<Travel, number>;
  declare hasTravels: HasManyHasAssociationsMixin<Travel, number>;
  declare countTravels: HasManyCountAssociationsMixin;
  declare createTravel: HasManyCreateAssociationMixin<
    Travel,
    "departureStationId",
    "returnStationId"
  >;

  declare travels?: NonAttribute<Travel[]>; // Note this is optional since it's only populated when explicitly requested in code

  declare static associations: {
    travels: Association<Station, Travel>;
  };

  static initModel(sequelize: Sequelize): void {
    Station.init(
      {
        FID: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
          type: DataTypes.FLOAT(12, 6),
          allowNull: false,
        },

        y: {
          type: DataTypes.FLOAT(12, 6),
          allowNull: false,
        },
      },
      {
        tableName: "stations",
        sequelize, // passing the `sequelize` instance is required
      }
    );
  }
}
