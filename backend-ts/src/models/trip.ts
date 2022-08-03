import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
  NonAttribute,
} from "sequelize";
import Station from "./stations";

export default class Trip extends Model<
  InferAttributes<Trip>,
  InferCreationAttributes<Trip>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<number>;

  declare departureTime: Date;
  declare returnTime: Date;

  // foreign keys are automatically added by associations methods (like Trip.belongsTo)
  // by branding them using the `ForeignKey` type, `Trip.init` will know it does not need to
  // display an error if departureStationId + returnStationId is missing.
  declare departureStationId: ForeignKey<Station["id"]>;
  declare returnStationId: ForeignKey<Station["id"]>;

  declare departureStationName: string;
  declare returnStationName: string;
  declare distanceInMeters: number;
  declare durationInSeconds: number;

  declare owner?: NonAttribute<Trip>;

  static initModel(sequelize: Sequelize): void {
    Trip.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        departureTime: {
          type: new DataTypes.DATE(),
          allowNull: false,
        },
        returnTime: {
          type: new DataTypes.DATE(),
          allowNull: false,
        },
        departureStationId: {
          type: DataTypes.INTEGER,
        },
        departureStationName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        returnStationId: {
          type: DataTypes.INTEGER,
        },
        returnStationName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        distanceInMeters: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        durationInSeconds: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        createdAt: false,
        updatedAt: false,
        sequelize,
        tableName: "trips",
      }
    );
  }
}
