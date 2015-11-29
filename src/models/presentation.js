import Model from 'ampersand-model'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
import githubMixin from '../helpers/github-mixin'
import SlideCollection from './slide-collection'
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
    '@type': 'string',
    label: 'string',
    thumbnail: 'string',
    viewingHint: 'string',
    metadata: 'array',
    sequences: 'array'
  },

  collections: {
    slides: SlideCollection
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'presentation/' + this._id
      }
    },
    subjects: {
      deps: ['metadata'],
      fn () {
        var _this = this
        _this.subjects = ''
        _this.metadata.forEach(function(md) {
              if(md.label === 'Subjects'){
                _this.subjects = md.value.join(', ')
              }
      	     })
        return _this.subjects
      }
    },
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
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.slides.fetch()
  }

})
