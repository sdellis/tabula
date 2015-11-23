import Collection from 'ampersand-rest-collection'
import Presentation from './presentation'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos?sort=desc',

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
