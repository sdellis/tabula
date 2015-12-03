import Model from 'ampersand-model'
import AnnotationCollection from './annotation-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string'
  },

  collections: {
    resources: AnnotationCollection
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
