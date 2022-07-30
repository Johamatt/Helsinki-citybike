import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";
import Station from "./stations";

export default class Travel extends Model<
  InferAttributes<Travel>,
  InferCreationAttributes<Travel>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<number>;

  declare departureTime: Date;
  declare returnTime: Date;

  // foreign keys are automatically added by associations methods (like Travel.belongsTo)
  // by branding them using the `ForeignKey` type, `Travel.init` will know it does not need to
  // display an error if ownerId is missing.
  declare departureStationId: ForeignKey<Station["id"]>;
  declare returnStationId: ForeignKey<Station["id"]>;

  declare departureStationName: string;
  declare returnStationName: string;
  declare distanceInMeters: number;
  declare durationInSeconds: number;

  static initModel(sequelize: Sequelize): void {
    Travel.init(
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
          allowNull: false,
        },
        departureStationName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        returnStationId: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
        sequelize,
        tableName: "travels",
      }
    );
  }
}
