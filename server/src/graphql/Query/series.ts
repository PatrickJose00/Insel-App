import { Series } from "../../../db/models/series";
import { Modality } from "../../../db/models/modality";
import { Op } from "sequelize";
import moment = require("moment");

export const seriesQuery = () => {
    return Series.findAll()
};

export const findSeriesByModalityNameAndDate = (context: any, args: any) => {
  if (args === undefined) {
    return []
  }
    return Series.findAll({
      include: [
        {
          model: Modality,
          where: { name: args.name},
        },
      ],
      where: {
        created_date: {
            [Op.between]: [new Date(args.startedDate), moment(args.endDate).utc(true).add(1, "days").toDate()]
        }
      },
      order: [["series_name", "ASC"]],
    });
  }


