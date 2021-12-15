import {
    Column,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import { Patient } from "./patient";
import { Series } from "./series";
import { SeriesStudies } from "./SeriesStudies";
  

@Table({
    paranoid: true,
    timestamps: false,
    tableName: "SeriesPatient",
  })
  export class SeriesPatient extends Model<SeriesPatient> {
    @ForeignKey(() => Series)
    @Column
    series_id!: string;
  
    @ForeignKey(() => Patient)
    @Column
    patient_id!: string;
  }

  export default SeriesPatient