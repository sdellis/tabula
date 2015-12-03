import Model from 'ampersand-model'
import ManifestCollection from './manifest-collection'
import iiifCollection from './collection-collection'
import ServiceCollection from './service-collection'
import config from '../config'

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
    '@type': 'string',
    label: 'string',
    logo: 'string',
    license: 'string',
    viewingHint: 'string',
    related: 'string',
    seeAlso: 'string',
    within: 'string',
    thumbnail: 'string',
    description: 'string',
    attribution: 'string',
    metadata: 'array'
  },

  collections: {
    manifests: ManifestCollection,
    collections: iiifCollection,
    services: ServiceCollection
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'collections/' + this._id
      }
    }

})
