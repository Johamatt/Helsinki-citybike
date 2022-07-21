import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "travels",
})
export class Travels extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  departureTime!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  returnTime!: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  departureStationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  departureStationName!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  returnStationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  returnStationName!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  distanceInMeters!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  durationInSeconds!: number;
}
