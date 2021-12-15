const { gql } = require("apollo-server-express")

const modalityType = gql`
  type Modality {
  id: ID!
  name: String!
  }
  type Query {
    modalities: [Modality!]!
  }
`;

export default modalityType;
