import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import PresentationList from '../components/presentation-list'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'PresentationsPage',

  propTypes: {
    presentations: React.PropTypes.object.isRequired,
    endpoints: React.PropTypes.object.isRequired
  },

  getInitialState () {
    const {label, value} = this.props.endpoints
    const {presentations} = this.props.presentations
    return {
      label: label,
      value: value,
      presenations: presentations
    }
  },

  onEndpointChange(event) {
    const {presentations} = this.props
    const {endpoints} = this.props
    this.setState({value: event.target.value})
    // presentations.refresh(event.target.value)
  },

  render () {
    const {presentations} = this.props
    const {endpoints} = this.props
    return (
      <div>
        <h1>Presentations Gallery</h1>
        <select id="endpoints" value={this.state.value} onChange={this.onEndpointChange}>
        {endpoints.map((endpoint) => {
          return (
            <option value={endpoint.value}>
            {endpoint.label}
            </option>
          )
        })}
        </select>
        <p>
         <button onClick={this.onLoadClick} className='button'>Load Collection</button>
         <button onClick={this.onSaveClick} className='button'>Save Collection</button>
        </p>
        <PresentationList presentations={presentations.manifests.models} />
      </div>
    )
  }
})
