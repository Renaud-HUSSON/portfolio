import { gql } from '@apollo/client'

export const GET_HOME_DATA = gql`
  query {
    banner {
      description
    }
  }
`
