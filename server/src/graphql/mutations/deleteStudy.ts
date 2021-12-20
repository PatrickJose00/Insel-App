import {Studies} from "../../../db/models/studies"

const deletetudyResolver = (context: any, args: any) => {
  return Studies.destroy({where: {id: args.id}});
};

export default deletetudyResolver;
