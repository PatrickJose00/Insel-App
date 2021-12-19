import { gql } from "@apollo/client";

export const getModalities = gql`
  {
    modalities {
      id
      name
    }
  }
`;
