import {
    Column,
    DataType,
    Model,
    Table,
  } from "sequelize-typescript";

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
  }

  export default Modality