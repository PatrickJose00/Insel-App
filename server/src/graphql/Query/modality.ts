import { Modality } from "../../../db/models/modality";

const modalityQuery = () => {
    return Modality.findAll()
};
  
export default modalityQuery;
