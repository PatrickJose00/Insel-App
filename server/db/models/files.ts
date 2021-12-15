import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import { Patient } from "./patient";
import { Series } from "./series";
import { Studies } from "./studies";

@Table({
    paranoid: true,
    timestamps: false,
    tableName: "files",
  })
  export class Files extends Model<Files> {
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
    filePath!: string;
  
    @ForeignKey(() => Patient)
    patientId!: string;
  
    @ForeignKey(() => Studies)
    studyId!: string;
  
    @ForeignKey(() => Series)
    serieID!: string;
  
    @BelongsTo(() => Patient)
    patient!: Patient;
  
    @BelongsTo(() => Studies)
    studies!: Studies;
  
    @BelongsTo(() => Series)
    series!: Series;
  }

  export default Files