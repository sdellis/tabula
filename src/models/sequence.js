import Model from 'ampersand-model'
import CanvasCollection from './canvas-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
           type : 'string',
           required : 'true',
           default : 'sc:Sequence',
           test: function(value){
                if (value !== 'sc:Sequence') {
                    return "Value must equal 'sc:Sequence'.";
                }
                return false;
            }
           },
    label: 'string',
    viewingDirection: 'string',
    viewingHint: 'string',
    startCanvas: 'string'
  },

  collections: {
    canvases: CanvasCollection
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
