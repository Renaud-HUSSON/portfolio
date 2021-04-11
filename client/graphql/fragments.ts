import gql from 'graphql-tag'

export const CORE_PROJECT_FIELDS = gql`
  fragment CoreProjectFields on Projets {
    nom
    slug
  }
`
