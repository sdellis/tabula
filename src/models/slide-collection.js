import Collection from 'ampersand-rest-collection'
import Slide from './slide'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url () {
    // return this.parent.url() + '/contents'
    // temp url to avoid preflight errors... 
    return '/collections/manifests'
  },

  model: Slide
})
