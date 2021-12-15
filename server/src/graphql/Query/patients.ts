import { Patient } from "../../../db/models/patient";

const patientQuery = () => {
    return Patient.findAll()
};
  
export default patientQuery;
