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
  type Mutation {
    createPatient( name: String!, created_date: String!) : Patient!
    updatePatient( id: String!, name: String!, created_date: String!) : Int!
  }
`;

export default patientType;
