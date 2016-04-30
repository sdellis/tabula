import {Collections} from 'tabula-rasa'
import ManifestList from './manifest-collection'
import uuid from 'node-uuid'
import xhr from 'xhr'
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
    return this.endpoint
  },

  collections: {
    manifests: ManifestList,
  },

  session: {
    endpoint: {
      type: 'string',
      default: config.manifestStore + '/collection.json'
    }
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'collections/' + this._id
      }
    }
  },

  refresh (endpoint) {
    const old = this.attributes
    //this.reset()
    this.endpoint = endpoint
    /*
    xhr.get(this.endpoint, function(err, resp) {
      this.setState(resp.body)
      this.set(this.state)
    })
    */
    this.fetch(function (err, model) {
      if (err) {
        this.set(old)
        console.error('There was a problem fetching data: ', err)
      }
    })

  }

})
