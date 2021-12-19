import { gql } from "@apollo/client";

export const getSeries = gql`
  {
    seriesQuery {
      id
      series_name
      created_date
      modality {
        name
      }
    }
  }
`;

export const filterSeries = gql`
  query Query($name: String, $startedDate: String, $endDate: String){
    findSeriesByModalityNameAndDate(
      name: $name
      startedDate: $startedDate
      endDate: $endDate
    ) {
      id
      series_name
      created_date
      modality {
        name
      }
    }
  }
`;
