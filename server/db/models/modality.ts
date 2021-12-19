import {
    Column,
    DataType,
    HasMany,
    Model,
    Table,
  } from "sequelize-typescript";
import Series from "./series"

@Table({
    paranoid: true,
    tableName: "modality",
    timestamps: false
  })
  export class Modality extends Model<Modality> {
    @Column({
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER.UNSIGNED,
    })
    id!: string;
  
    @Column({
      allowNull: false,
      type: DataType.STRING,
    })
    name!: string;

    @HasMany(() => Series)
    series!: Series[];
  }

  export default Modality