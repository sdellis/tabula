import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Sequence',

  propTypes: {
    sequence: React.PropTypes.object.isRequired
  },

  getInitialState () {
    const name = this.props.sequence.label
    const totalCanvases = this.props.sequence.canvases.length
    return {
      name: name,
      totalCanvases: totalCanvases
    }
  },

  render () {
    let content

    content = (
      <div className='sequence'>

        <span>{sequence.name} is a sequence with {sequence.totalCanvases} canvases.</span>

      </div>
    )

    return <div>{content}</div>
  }
})
