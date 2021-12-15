import {
    Column,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import { Patient } from "./patient";
import { Studies } from "./studies";
  

@Table({
  paranoid: true,
  timestamps: false,
  tableName: "StudiesPatient",
})
export class StudiesPatient extends Model<StudiesPatient> {
  @ForeignKey(() => Studies)
  @Column
  study_id!: string;

  @ForeignKey(() => Patient)
  @Column
  patient_id!: string;
}

export default StudiesPatient