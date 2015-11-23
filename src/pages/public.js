import React from 'react'
import NavHelper from '../components/nav-helper'

export default React.createClass({
  displayName: 'PublicPage',

  render () {
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>Tabula</h1>
        </header>
        <div>
          <p>Build IIIF Manifest-powered Slide Shows</p>
          <a href='/login' className='button button-large'>
            <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
          </a>
        </div>
      </NavHelper>
    )
  }
})
