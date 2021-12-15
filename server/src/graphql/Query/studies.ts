import { Studies } from "../../../db/models/studies";

const studiesQuery = () => {
    return Studies.findAll()
};
  
export default studiesQuery
