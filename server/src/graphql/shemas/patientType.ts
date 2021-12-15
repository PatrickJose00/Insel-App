const { gql } = require("apollo-server-express")

const patientType = gql`
  type Patient {
  id: ID!
  name: String!
  created_date: String!
  studies: [Studies!]!
  }
  type Query {
    patients: [Patient!]!
  }
`;

export default patientType;
