import Collection from 'ampersand-rest-collection'
import iiifCollection from './collection'
import githubMixin from '../helpers/github-mixin'
import config from '../config'

//export default Collection.extend(githubMixin, {
export default Collection.extend({
  url: '', // some collection store

  model: iiifCollection,

  getById (id) {
    let model = this.findWhere({_id: id})

    if (!model) {
      model = new iiifCollection({_id: id})
    }

    model.fetch()

    return model
  }
})
