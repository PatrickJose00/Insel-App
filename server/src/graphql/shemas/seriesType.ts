
const { gql } = require("apollo-server-express")

const seriesType = gql`
  type Series {
  id: ID!
  series_name: String!
  created_date: String!
  patient: [Patient!]!
  studies: [Studies!]!
  }
  type Query {
    series: [Series!]!
  }
`;

export default seriesType;
