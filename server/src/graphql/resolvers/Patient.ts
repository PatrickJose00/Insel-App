import { Patient } from "../../../db/models/patient";
import { Studies } from "../../../db/models/studies";



const resolvers = {
    studies: (patient: Patient) => {
      return Studies.findAll({
        include: [
          {
            model: Patient,
            where: { id: patient.id }
          }
        ],
        order: [["study_name", "ASC"]]
      });
    }
  };

  export default resolvers;