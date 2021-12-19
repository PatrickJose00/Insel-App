import { Series } from "../../../db/models/series";
import { Modality } from "../../../db/models/modality";

const resolvers = {
  modality: (series: Series) => {
    return Modality.findByPk(series.modality_id)
  }
}


export default resolvers;
