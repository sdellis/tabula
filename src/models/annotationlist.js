import Model from 'ampersand-model'
import ResourceCollection from './resource-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string'
  },

  collections: {
    resources: new ResourceCollection(this.resources)
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved
  }

})
