
import {
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    Table,
  } from "sequelize-typescript";
import Files from "./files";
import { Patient } from "./patient";
import Series from "./series";
import SeriesStudies from "./SeriesStudies";
import { StudiesPatient } from "./StudiesPatient";
  

@Table({
    paranoid: true,
    tableName: "studies",
    timestamps: false
  })
  export class Studies extends Model<Studies> {
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
    study_name!: string;
  
    @Column({
      allowNull: false,
      type: DataType.STRING,
    })
    created_date!: string;
  
    @BelongsToMany(() => Patient, () => StudiesPatient)
    patients!: Patient[];
  
    @BelongsToMany(() => Series, () => SeriesStudies)
    series!: Series[];
  
    @HasMany(() => Files)
    files!: Files[];
  }

export default Studies