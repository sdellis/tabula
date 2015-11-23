import React from 'react'

export default React.createClass({
  displayName: 'MessagePage',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string
  },

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    )
  }
})
