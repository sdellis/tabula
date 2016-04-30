import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Presentation',

  render () {
    const {presentations} = this.props
    // console.log(presentations);

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

  }
})
