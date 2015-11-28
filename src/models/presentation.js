import Model from 'ampersand-model'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
import githubMixin from '../helpers/github-mixin'
import SlideCollection from './slide-collection'
import config from '../config'

// export default Model.extend(githubMixin, {
export default Model.extend({
  idAttribute: '_id',

  url () {
    return config.manifestStore + '/' + this._id
  },

  props: {
    _id: 'string',
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
    manifest: {
      deps: ['_id'],
      fn () {
        manifesto.loadManifest('http://wellcomelibrary.org/iiif/b18035723/manifest').then(function(manifest) {
            manifest = manifesto.create(manifest)
            console.log(manifest.getLabel())
            return manifest
          },
          function(error) {
            console.error("Failed!", error);
          });
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.slides.fetch()
  }

})
