
const { gql } = require("apollo-server-express")

const studiesType = gql`
  type Studies {
  id: ID!
  study_name: String!
  created_date: String!
  patients: [Patient!]!
  }
  type Query {
    studies: [Studies!]!
  }
  type Mutation {
    createStudy(study_name: String!, created_date: String!) : Studies!
    deleteStudy(id: Int!) : Int!
  }
`;

export default studiesType;
