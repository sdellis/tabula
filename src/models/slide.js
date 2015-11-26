import app from 'ampersand-app'
import Model from 'ampersand-model'
import xhr from 'xhr'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
  idAttribute: 'name',

  props: {
    name: 'string',
    content: 'string'
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

  derived: {
    payload: {
      deps: ['content'],
      fn () {
        return this.content
      }
    }
  },

  isNew () {
    return !this.saved
  },

  update (newAttributes) {
    const old = this.attributes
    xhr({
      url: this.url(),
      json: newAttributes,
      headers: {
        Authorization: 'token ' + app.me.token
      },
      method: 'PATCH'
    }, (err, resp, body) => {
      if (err) {
        this.set(old)
        console.error('check your wifi!', err)
      }
    })
    this.set(newAttributes)
  }

})
