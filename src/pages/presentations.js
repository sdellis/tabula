import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'PresentationsPage',

  propTypes: {
    presentations: React.PropTypes.object.isRequired
  },

  render () {
    const {presentations} = this.props
    console.log(presentations)
    return (
      <div>
        <h1>Presentations Gallery</h1>
        <div>
          {presentations.map((presentation) => {
            //if (presentation.name.startsWith('tabula-')) {
              return (
                <div key={presentation._id}>
                  <a href={presentation.app_url}><span className='octicon octicon-repo'></span> {presentation.label}</a>
                </div>
              )
            //}
          })}
        </div>
      </div>
    )
  }
})
