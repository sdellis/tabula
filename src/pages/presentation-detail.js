import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

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
         <h1>{presentation.manifestation.getLabel()} Slides</h1>
         <p><strong>Subjects:</strong> {presentation.subjects}</p>
         <ul>
         {presentation.manifestation.getSequences().map((sequence) => {
           let label = 'Untitled Slide Group'
           if (!sequence.getLabel() === 'undefined') { label = sequence.getLabel() }
           return (
             <li><strong>{label}</strong> : {sequence.getTotalCanvases()} slides</li>
           )
         })}
         </ul>
         <p>
          <button onClick={this.onAddClick} className='button'>Add a Slide</button>
         </p>
         <ul className='sequence'>
         {presentation.manifestation.getSequences()[0].getThumbs(200).map((thumb) => {
           return (
            <li className='slide'><img src={thumb.uri}/></li>
           )
         })}
         </ul>
         <hr/>

       </div>
    )
  }
})
