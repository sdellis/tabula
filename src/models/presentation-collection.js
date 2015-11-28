import Collection from 'ampersand-rest-collection'
import Presentation from './presentation'
import githubMixin from '../helpers/github-mixin'
import config from '../config'

//export default Collection.extend(githubMixin, {
export default Collection.extend({
  url: config.manifestStore,

  model: Presentation,

  getByID (id) {
    let model = this.findWhere({_id: id})

    if (!model) {
      model = new Presentation({_id: id})
    }

    model.fetch()

    return model
  }
})
