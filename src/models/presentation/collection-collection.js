import Collection from 'ampersand-rest-collection'
import IIIFCollection from './collection'

export default Collection.extend({
  url: '', // some collection store

  model: IIIFCollection,

  getById (id) {
    let model = this.findWhere({_id: id})

    if (!model) {
      model = new IIIFCollection({_id: id})
    }

    model.fetch()

    return model
  }
})
