import { gql } from '@apollo/client'

export const GET_HOME_DATA = gql`
  query {
    banner {
      description
    }
    projets {
      nom
      short_description
      banner {
        url
        alternativeText
        formats
      }
    }
  }
`
