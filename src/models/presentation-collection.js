import Collection from 'ampersand-rest-collection'
import Presentation from './presentation'
import githubMixin from '../helpers/github-mixin'
import config from '../config'

//export default Collection.extend(githubMixin, {
export default Collection.extend({
  url: config.manifestStore,

  model: Presentation,

  getByFullName (fullName) {
    let model = this.findWhere({full_name: fullName})

    if (!model) {
      model = new Presentation({full_name: fullName})
    }

    model.fetch()

    return model
  }
})
