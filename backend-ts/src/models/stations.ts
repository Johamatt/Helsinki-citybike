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
  ID!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Nimi!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Namn!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Osoite!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Adress!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Kaupunki!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Stad!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Operaattor!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  Kapasiteet!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  x!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  y!: number;
}
