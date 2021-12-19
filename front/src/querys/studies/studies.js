import { gql } from "@apollo/client";

export const getStudies = gql`
 {
  studies {
    id
    study_name
    created_date
  }
 }
`;
