import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Slide',

  propTypes: {
    slide: React.PropTypes.object.isRequired
  },

  getInitialState () {
    const {name, payload} = this.props.slide
    return {
      name: name
    }
  },

  onEditClick () {
    this.props.slide.editing = true
  },

  onCancelClick () {
    const {slide} = this.props
    slide.editing = false
    if (slide.saved) {
      slide.editing = false
    } else {
      slide.collection.remove(slide)
    }
    this.setState(this.getInitialState)
  },

  onNameChange (event) {
    this.setState({
      name: event.target.value
    })
  },

  onSubmitForm (event) {
    event.preventDefault()
    const {slide} = this.props
    if (slide.saved) {
      slide.update(this.state)
    } else {
      slide.save(this.state)
    }
    slide.editing = false
  },

  onDeleteClick (event) {
    this.props.slide.destroy()
  },

  render () {
    const {slide} = this.props
    const {name, payload} = this.state
    let markup

    if (slide.editing) {
      markup = (
        <form onSubmit={this.onSubmitForm} className='label'>
          <span style={{backgroundColor: 'white'}} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
          <input onChange={this.onNameChange} value={name} name='name'/>
          <button type='submit' className='button button-small'>Save</button>
          <button onClick={this.onCancelClick} type='button' className='button button-small button-unstyled'>cancel</button>
        </form>
      )
    } else {
      markup = (
        <div className='label'>
          <span style={{backgroundColor: 'white'}} className='label-color'>&nbsp;</span>
          <span>{slide.name}</span>
          <span onClick={this.onEditClick} className='octicon octicon-pencil'></span>
          <span onClick={this.onDeleteClick} className='octicon octicon-x'></span>
        </div>
      )
    }

    return <div>{markup}</div>
  }
})
