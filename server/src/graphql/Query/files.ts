import { Files } from "../../../db/models/files";

const filesQuery = () => {
    return Files.findAll()
};
  
export default filesQuery;
