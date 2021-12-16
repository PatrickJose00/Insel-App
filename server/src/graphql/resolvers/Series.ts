import { Patient } from "../../../db/models/patient";
import { Studies } from "../../../db/models/studies";
import { Series } from "../../../db/models/series";

const resolvers = {
    patient: (series: Series) => {
      return Patient.findAll({
        include: [
          {
            model: Series,
            where: { id: series.id }
          }
        ],
        order: [["name", "ASC"]]
      });
    },
    studies: (series: Series) => {
        return Studies.findAll({
          include: [
            {
              model: Series,
              where: { id: series.id }
            }
          ],
          order: [["study_name", "ASC"]]
        });
      }
  };

  export default resolvers;