import Model from 'ampersand-model'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
// import githubMixin from '../helpers/github-mixin'
import SequenceCollection from './sequence-collection'
import config from '../config'

// export default Model.extend(githubMixin, {
export default Model.extend({

  initialize () {
    this.getManifest // load the manifesto object into this.manifest
  },

  idAttribute: '_id',

  url () {
    return config.manifestStore + '/' + this._id
  },

  props: {
    _id: 'string',
    '@id': 'string',
    '@context': 'string',
    '@type': {
           type : 'string',
           required : 'true',
           default : 'sc:Manifest',
           test: function(value){
                if (value !== 'sc:Manifest') {
                    return "Value must equal 'sc:Manifest'.";
                }
                return false;
            }
           },
    label: 'string',
    thumbnail: 'string',
    viewingHint: 'string',
    metadata: 'array'
  },

  collections: {
    sequences: SequenceCollection
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'presentations/' + this._id
      }
    },
    subjects: {
      deps: ['metadata'],
      fn () {
        var s = ''
        this.metadata.forEach(function(md) {
              if(md.label === 'Subjects'){
                s = md.value.join(', ')
              }
      	     })
        return s
      }
    },
    /****
    // The getManifest() method is for demo purposes, showing how one can use
    // the Manifesto library within this app by attaching a Manifesto object,
    // with all its methods to this model.
    // i.e. this.manifest.getLabel()
    ****/
    getManifest: {
      deps: ['_id'],
      fn () {
        var _this = this
        manifesto.loadManifest(config.manifestStore + '/' + this._id).then(function(manifest) {
            _this.manifest = manifesto.create(manifest)
            return _this.manifest
          },
          function(error) {
            console.error("Failed!", error);
          });
        this.manifest = _this.manifest
      }
    }
  }

})
