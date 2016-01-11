import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'PresentationsPage',

  propTypes: {
    presentations: React.PropTypes.object.isRequired,
    endpoints: React.PropTypes.object.isRequired
  },

  render () {
    const {presentations} = this.props
    const {endpoints} = this.props
    return (
      <div>
        <h1>Presentations Gallery</h1>

        <div>
          {presentations.map((presentation) => {
            return (
              <div key={presentation._id}>
                <a href={presentation.app_url}><span className='octicon octicon-repo'></span> {presentation.label}</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
