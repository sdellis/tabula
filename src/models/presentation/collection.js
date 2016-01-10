import {Collections} from 'tabula-rasa'
import ManifestList from './manifest-collection'
import uuid from 'node-uuid'
import config from '../../config'

export default Collections.Collection.extend({

  props: {
    '_id': {
      type: 'string',
      required: 'true',
      default: uuid()
    }
  },

  url () {
    return config.manifestStore + '/collection.json'
  },

  collections: {
    manifests: ManifestList,
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'collections/' + this._id
      }
    }
  }
})
