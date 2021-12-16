import {Patient} from "../../../db/models/patient"

const createPatientResolver = (context: any, args: any) => {
  return Patient.create(args);
};

export default createPatientResolver;
