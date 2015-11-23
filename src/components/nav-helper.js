import app from 'ampersand-app'
import React from 'react'
import localLinks from 'local-links'

export default React.createClass({
  displayName: 'NavHelper',

  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array
    ]).isRequired
  },

  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
