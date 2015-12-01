import Model from 'ampersand-model'
import Service from './service'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': 'string',
    motivation: 'string',
    width: 'number',
    height: 'number'
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

  model: {
      service: new Service(this.service)
  },

  parse: function(response){

      for(var key in this.model)
      {
          var embeddedClass = this.model[key];
          var embeddedData = response[key];
          response[key] = new embeddedClass(embeddedData, {parse:true});
      }
/*
      response.s = {}
      console.log(response.service)
      if(response.service !== 'undefined'){
        response.s = response.service; //remap an oddly named attribute
        delete response.service;
      }
*/
      return response;
  },

  isNew () {
    return !this.saved
  }

})
