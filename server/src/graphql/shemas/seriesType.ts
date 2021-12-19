const { gql } = require("apollo-server-express")

const seriesType = gql`
  type Series {
  id: ID!
  series_name: String!
  created_date: String!
  modality: Modality!
  }
  type Query {
    seriesQuery: [Series!]!
    findSeriesByModalityNameAndDate(name: String, startedDate:String, endDate:String): [Series!]!
  }
`;

export default seriesType;
