const { gql } = require("apollo-server-express")

const filesType = gql`
  type Files {
  id: ID!
  file_path: String!
  created_date: String!
  }
  type Query {
    files: [Files!]!
  }
`;

export default filesType;
