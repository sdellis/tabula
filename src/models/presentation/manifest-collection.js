import Manifest from './manifest'
import {ManifestList} from 'tabula-rasa'
import config from '../../config'

export default ManifestList.extend({
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
