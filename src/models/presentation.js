import Model from 'ampersand-model'
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
    label: 'string'
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
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.slides.fetch()
  }

})
