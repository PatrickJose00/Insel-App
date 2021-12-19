import { Op } from "sequelize/dist";
import { Modality } from "../../../db/models/modality";
import { Series } from "../../../db/models/series";


const resolvers = {
  findSeriesByModalityNameAndDate: (modality: Modality, startedDate: string, endDate: string) => {
    return Series.findAll({
      include: [
        {
          model: Modality,
          where: { name: modality.name },
        },
      ],
      where: {
        created_date: {
          [Op.between]: [new Date(startedDate), new Date(endDate)],
        },
      },
      order: [["series_name", "ASC"]],
    });
  },
};

export default resolvers;
