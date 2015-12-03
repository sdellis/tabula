import Collection from 'ampersand-rest-collection'
import Manifest from './manifest'
import githubMixin from '../helpers/github-mixin'
import config from '../config'

//export default Collection.extend(githubMixin, {
export default Collection.extend({
  url: config.manifestStore,

  model: Manifest,

  getById (id) {
    let model = this.findWhere({_id: id})

    if (!model) {
      model = new Manifest({_id: id})
    }

    model.fetch()

    return model
  }
})
