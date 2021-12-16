import * as Query from "../Query";
import * as Mutation from "../mutations";
import Patient from "./Patient"
import Studies from "./Studies"
import Series from "./Series"

const resolvers = {
  Patient,
  Studies,
  Series,
  Query,
  Mutation
}


export default resolvers;