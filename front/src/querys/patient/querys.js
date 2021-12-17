import { gql } from "@apollo/client";

export const getPatients = gql`
  {
    patients {
      id
      name
      created_date
    }
  }
`;

export const updatePatientMutation = gql`
    mutation (
      $updatePatientId: Int!
      $name: String!
      $createdDate: String!
    ) {
      updatePatient(
        id: $updatePatientId
        name: $name
        created_date: $createdDate
      )
    }
  `;
