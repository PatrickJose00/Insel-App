import {
    BelongsToMany,
    Column,
    DataType,
    HasMany,
    Model,
    Table,
  } from "sequelize-typescript";
import { Files } from "./files";
import { Series } from "./series";
import { SeriesPatient } from "./SeriesPatient";
import { Studies } from "./studies";
import { StudiesPatient } from "./StudiesPatient";
  
  @Table({
    paranoid: true,
    tableName: "patient",
    timestamps: false
  })
  export class Patient extends Model<Patient> {
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
  
    @Column({
      allowNull: false,
      type: DataType.DATE,
    })
    created_date!: Date;
    
    @BelongsToMany(() => Studies, () => StudiesPatient)
    studies!: Studies[];
  
    @BelongsToMany(() => Series, () => SeriesPatient)
    series!: Series[];
  
    @HasMany(() => Files)
    files!: Files[];
  
  }

  export default Patient