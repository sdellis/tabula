import {Manifest} from 'tabula-rasa'
import manifesto from '../../../node_modules/manifesto.js/dist/server/manifesto.js'
import config from '../../config'

export default Manifest.extend({

  initialize () {
    this.getManifest // load the manifesto object into this.manifest
  },

  url () {
    return config.manifestStore + '/' + this._id + '/manifest.json'
  },

  derived: {
    foo: {
      deps: ['_id'],
      fn () {
        return 'foo/' + this._id
      }
    },
    app_url: {
      deps: ['_id'],
      fn () {
        return 'presentations/' + this._id
      }
    },
    /* ***
    // The getManifest() method is for demo purposes, showing how one can use
    // the Manifesto library within this app by attaching a Manifesto object,
    // with all its methods to this model.
    // i.e. this.manifestation.getLabel()
    *** */
    getManifest: {
      deps: ['@id'],
      fn () {
        var _this = this

        manifesto.loadManifest(this['@id']).then(function (manifest) {
          _this.manifestation = manifesto.create(manifest)
          return _this.manifestation
        },
        function (error) {
          console.error('Failed!', error)
        })

        this.manifestation = _this.manifestation
      }
    }
  }

})
