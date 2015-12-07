import Model from 'ampersand-model'
import githubMixin from '../../helpers/github-mixin'
import LabelCollection from './label-collection'

export default Model.extend(githubMixin, {
  url () {
    return 'https://api.github.com/repos/' + this.full_name
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },

  collections: {
    labels: LabelCollection
  },

  derived: {
    app_url: {
      deps: ['full_name'],
      fn () {
        return 'repos/' + this.full_name
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  }

})
