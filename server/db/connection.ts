import { Sequelize } from "sequelize-typescript";

import accessEnv from "../helpers/accessEnv";
import Files from "./models/files";
import Modality from "./models/modality";
import Patient from "./models/patient";
import Series from "./models/series";
import SeriesPatient from "./models/SeriesPatient";
import SeriesStudies from "./models/SeriesStudies";
import Studies from "./models/studies";
import StudiesPatient from "./models/StudiesPatient";



const DB_URL = accessEnv("DB_URL");

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true
  },
  logging: false,
  models: [Patient, Studies, Modality, StudiesPatient, Series, SeriesPatient, SeriesStudies, Files]
});

export default sequelize;