
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
`;

export default studiesType;
