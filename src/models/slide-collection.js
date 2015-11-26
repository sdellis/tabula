import Collection from 'ampersand-rest-collection'
import Slide from './slide'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url () {
    return this.parent.url() + '/contents'
  },

  model: Slide
})
