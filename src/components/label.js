import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Label',

  propTypes: {
    label: React.PropTypes.object.isRequired
  },

  getInitialState () {
    const {name, color} = this.props.label
    return {
      name: name,
      color: color
    }
  },

  onEditClick () {
    this.props.label.editing = true
  },

  onCancelClick () {
    const {label} = this.props
    label.editing = false
    if (label.saved) {
      label.editing = false
    } else {
      label.collection.remove(label)
    }
    this.setState(this.getInitialState)
  },

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  },

  onColorChange (event) {
    this.setState({
      color: event.target.value.slice(1)
    })
  },

  onSubmitForm (event) {
    event.preventDefault()
    const {label} = this.props
    if (label.saved) {
      label.update(this.state)
    } else {
      label.save(this.state)
    }
    label.editing = false
  },

  onDeleteClick (event) {
    this.props.label.destroy()
  },

  render () {
    const {label} = this.props
    const {name, color} = this.state
    const cssColor = '#' + color
    let content

    if (label.editing) {
      content = (
        <form onSubmit={this.onSubmitForm} className='label'>
          <span style={{backgroundColor: cssColor}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input onChange={this.onNameChange} value={name} name='name'/>
          <input onChange={this.onColorChange} value={'#' + color} name='color'/>
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else {
      content = (
        <div className='label'>
          <span style={{backgroundColor: cssColor}} className='label-color'>&nbsp;</span>
          <span>{label.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
        </div>
      )
    }

    return <div>{content}</div>
  }
})
