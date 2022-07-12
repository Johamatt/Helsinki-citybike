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
  Departure_time!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  Return_time!: Date;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  Departure_station_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Departure_station_name!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  Return_station_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Return_station_name!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  Distance_meters!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  duration_seconds!: number;
}
