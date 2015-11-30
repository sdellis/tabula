import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
// import Slide from '../components/slide'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'PresentationDetailPage',

  propTypes: {
    presentation: React.PropTypes.object.isRequired
  },

  onAddClick () {
    this.props.presentation.metadata.add({
      name: '',
      content: '',
      editing: true,
      saved: false
    }, { at: 0 })
  },

  render () {
    const {presentation} = this.props

    return (
      <div className='container'>
         <h1>{presentation.manifest.getLabel()} Slides</h1>
         <p><strong>Subjects:</strong> {presentation.subjects}</p>
         <ul>
         {presentation.manifest.getSequences().map((sequence) => {
           let label = 'Untitled Slide Group'
           if ( !sequence.getLabel() === 'undefined' ) { label = sequence.getLabel() }
           return (
             <li><strong>{label}</strong> : {sequence.getTotalCanvases()} slides</li>
           )
         })}
         </ul>
         <p>
          <button onClick={this.onAddClick} className='button'>Add a Slide</button>
         </p>
         <ul className="sequence">
         {presentation.manifest.getSequences().map((sequence) => {
           sequence.getCanvases().map((canvas) => {
               canvas.getImages().map((image) => {
                  return (
                   <li className="slide"><img src={image.getResource().id}/></li>
                  )
               })
             })
         })}
         </ul>
         <hr/>
         <ul className="sequence">
            <li className="slide">1</li>
            <li className="slide">2</li>
            <li className="slide">3</li>
            <li className="slide">4</li>
            <li className="slide">5</li>
            <li className="slide">6</li>
         </ul>

       </div>
    )
  }
})
