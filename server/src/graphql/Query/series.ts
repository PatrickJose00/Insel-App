import { Series } from "../../../db/models/series";

const seriesQuery = () => {
    return Series.findAll()
};
  
export default seriesQuery;
