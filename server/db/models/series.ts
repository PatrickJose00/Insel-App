import {
  BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
  } from "sequelize-typescript";
import { Files } from "./files";
import Modality from "./modality";
import { Patient } from "./patient";
import SeriesPatient from "./SeriesPatient";
import SeriesStudies from "./SeriesStudies";
import { Studies } from "./studies";

@Table({
    paranoid: true,
    tableName: "series",
    timestamps: false
  })
  export class Series extends Model<Series> {
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
    series_name!: string;
  
    @Column({
      allowNull: false,
      type: DataType.STRING,
    })
    created_date!: string;

    @ForeignKey(() => Modality)
    modality_id!: string;

    @BelongsTo(() => Modality)
    modality!: Modality;
  
    @BelongsToMany(() => Patient, () => SeriesPatient)
    patient!: Patient[];
  
    @BelongsToMany(() => Studies, () => SeriesStudies)
    studies!: Studies[];
  
    @HasMany(() => Files)
    files!: Files[];
  }

  export default Series