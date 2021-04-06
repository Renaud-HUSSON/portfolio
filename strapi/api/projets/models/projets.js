'use strict'

const { slugify } = require('../../../util/functions')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.nom) {
        data.slug = slugify(data.nom)
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.nom) {
        data.slug = slugify(data.nom)
      }
    },
  },
}
