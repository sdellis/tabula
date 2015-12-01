import Model from 'ampersand-model'
import CanvasCollection from './canvas-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string',
    label: 'string',
    viewingDirection: 'string',
    viewingHint: 'string',
    startCanvas: 'string',
    canvases: 'array'
  },

  collections: {
    canvases: new CanvasCollection(this.canvases)
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
