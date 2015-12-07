import Model from 'ampersand-model'
import AnnotationCollection from './annotation-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
           type : 'string',
           required : 'true',
           default : 'sc:AnnotationList',
           test: function(value){
                if (value !== 'sc:AnnotationList') {
                    return "Value must equal 'sc:AnnotationList'.";
                }
                return false;
            }
           },
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
