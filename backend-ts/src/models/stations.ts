import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "stations",
})
export class Stations extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  FID!: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nimi!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  namn!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  osoite!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  adress!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  kaupunki!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  stad!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  operaattor!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  kapasiteet!: number;

  @Column({
    type: DataType.FLOAT(12, 6),
    allowNull: false,
  })
  x!: number;

  @Column({
    type: DataType.FLOAT(12, 6),
    allowNull: false,
  })
  y!: number;
}
