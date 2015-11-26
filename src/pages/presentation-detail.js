import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Slide from '../components/slide'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'PresentationDetailPage',

  propTypes: {
    presentation: React.PropTypes.object.isRequired,
    slides: React.PropTypes.object.isRequired
  },

  onAddClick () {
    this.props.slides.add({
      name: '',
      content: '',
      editing: true,
      saved: false
    }, { at: 0 })
  },

  render () {
    const {presentation, slides} = this.props

    return (
      <div className='container'>
       <h1>{presentation.label} Slides</h1>
       <p>
        <button onClick={this.onAddClick} className='button'>Add a Slide</button>
       </p>
       <ul>
          {slides.map((slide) =>
            <Slide key={slide.name} slide={slide}/>
          )}
       </ul>
     </div>
    )
  }
})
