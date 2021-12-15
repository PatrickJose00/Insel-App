import { Patient } from "../../../db/models/patient";
import { Studies } from "../../../db/models/studies";



const resolvers = {
    patients: (study: Studies) => {
      return Patient.findAll({
        include: [
          {
            model: Studies,
            where: { id: study.id }
          }
        ],
        order: [["name", "ASC"]]
      });
    }
  };

  export default resolvers;