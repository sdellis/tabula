import Model from 'ampersand-model'
import Resource from './resource'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string',
    motivation: 'string',
    width: 'number',
    height: 'number',
    about: 'string'
  },

  model: {
      resource: new Resource(this.r),
  },

  parse: function(response){
      response.r = response.resource; //remap an oddly named attribute
      delete response.resource;

      response.about = response.on; //remap an oddly named attribute
      delete response.on;

      for(var key in this.model)
      {
          var embeddedClass = this.model[key];
          var embeddedData = response[key];
          response[key] = new embeddedClass(embeddedData, {parse:true});
      }
      return response;
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved
  }

})
