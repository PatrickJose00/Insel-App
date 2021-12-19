import {Studies} from "../../../db/models/studies"

const createStudyResolver = (context: any, args: any) => {
  return Studies.create(args);
};

export default createStudyResolver;
