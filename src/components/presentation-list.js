import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Presentation',

  render () {
    const {presentation} = this.props
    return <li><a href={presentation.app_url}>{presentation.label[0]['@value']}</a></li>;
    /*
    return (

      <ul>

        {presentations.map((presentation) => {
          return (
            <li>
              <a href={presentation.app_url}>{presentation.label[0]['@value']}</a>
            </li>
          )
        })}


      </ul>
    )
    */
  }
})
