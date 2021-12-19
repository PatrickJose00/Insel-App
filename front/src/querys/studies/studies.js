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

export const createStudyMutation = gql`
    mutation ($studyName: String!, $createdDate: String!) {
      createStudy( study_name: $studyName, created_date: $createdDate) {
        study_name
        created_date
      }
    }
  `;