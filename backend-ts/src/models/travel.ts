import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "travels",
})
export class Travels extends Model {
  // @Column({
  //   type: DataType.NUMBER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // })
  // ID!: number;

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
    type: DataType.NUMBER,
    allowNull: false,
  })
  departureStationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  departureStationName!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  returnStationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  returnStationName!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  distanceInMeters!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  durationInSeconds!: number;
}
