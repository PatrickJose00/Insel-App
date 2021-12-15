import {
    Column,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import { Series } from "./series";
import { Studies } from "./studies";
  

@Table({
    paranoid: true,
    timestamps: false,
    tableName: "SeriesStudies",
  })
  export class SeriesStudies extends Model<SeriesStudies> {
    @ForeignKey(() => Series)
    @Column
    series_id!: string;
  
    @ForeignKey(() => Studies)
    @Column
    study_id!: string;
  }

  export default SeriesStudies