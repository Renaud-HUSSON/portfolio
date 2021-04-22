import { gql } from '@apollo/client'
import { CORE_PROJECT_FIELDS } from './fragments'

export const GET_HOME_DATA = gql`
  ${CORE_PROJECT_FIELDS}
  query {
    banner {
      description
    }
    projets(sort: "id:DESC") {
      ...CoreProjectFields
      banner {
        url
        alternativeText
        formats
      }
      short_description
      keywords
    }
  }
`

export const GET_PROJECTS_PATHS = gql`
  query {
    projets {
      slug
    }
  }
`

export const GET_PROJECT_DATA = gql`
  ${CORE_PROJECT_FIELDS}
  query Projets($slug: String) {
    projets(where: { slug: $slug }, limit: 1) {
      ...CoreProjectFields
      url
      github
      long_description
      technologies {
        nom
      }
      images_pc {
        url
        formats
      }
      images_mobile {
        url
        formats
      }
      video {
        url
        alternativeText
      }
      debut
      fin
    }
  }
`
