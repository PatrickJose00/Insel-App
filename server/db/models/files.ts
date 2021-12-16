import {
  AllowNull,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import { STRING } from "sequelize/types";
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
    file_path!: string;

    @Column({
      allowNull: false,
      type: DataType.DATE,
    })
    created_date!: Date;
  
    @ForeignKey(() => Patient)
    @AllowNull
    @Column
    patient_id!: string;

    @ForeignKey(() => Studies)
    @AllowNull
    @Column
    study_id!: string;
    
    @ForeignKey(() => Series)
    @AllowNull
    @Column
    series_id!: string;
  
    @BelongsTo(() => Patient)
    patient!: Patient;
  
    @BelongsTo(() => Studies)
    studies!: Studies;
  
    @BelongsTo(() => Series)
    series!: Series;
  }

  export default Files