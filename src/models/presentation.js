import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import SlideCollection from './slide-collection'

// export default Model.extend(githubMixin, {
export default Model.extend({
  idAttribute: '_id',

  url () {
    return 'http://localhost:4000/collections/manifests' + this._id
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
