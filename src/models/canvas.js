import Model from 'ampersand-model'
import ImageCollection from './image-collection'
import AnnotationListCollection from './annotationlist-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string',
    label: 'string',
    width: 'number',
    height: 'number',
    images: 'array',
    otherContent: 'array'
  },

  collections: {
    images: new ImageCollection(this.images),
    annotation_lists: new AnnotationListCollection(this.otherContent)
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
