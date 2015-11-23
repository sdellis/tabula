import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import uuid from 'node-uuid'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import RepoDetailPage from './pages/repo-detail'
import PresentationsPage from './pages/presentations'
import PresentationDetailPage from './pages/presentation-detail'
import MessagePage from './pages/message'
import Layout from './layout'
import config from './config'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout me={app.me}>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos',
    'presentations': 'presentations',
    'presentation/:owner/:name': 'presentationDetail',
    'login': 'login',
    'logout': 'logout',
    'repo/:owner/:name': 'repoDetail',
    'auth/callback?:query': 'authCallback',
    '*fourohfour': 'fourOhfour'
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  presentations () {
    this.renderPage(<PresentationsPage presentations={app.me.presentations}/>)
  },

  presentationDetail (owner, name) {
    console.log(owner, name)
    const presentation = app.me.presentations.getByFullName(owner + '/' + name)
    this.renderPage(<PresentationDetailPage presentation={presentation} slides={presentation.slides}/>)
  },

  repos () {
    this.renderPage(<ReposPage repos={app.me.repos}/>)
  },

  repoDetail (owner, name) {
    console.log(owner, name)
    const repo = app.me.repos.getByFullName(owner + '/' + name)
    this.renderPage(<RepoDetailPage repo={repo} labels={repo.labels}/>)
  },

  login () {
    const state = uuid()
    window.localStorage.state = state
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: config.clientId,
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo',
      state: state
    })
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback (query) {
    query = qs.parse(query)
    if (query.state === window.localStorage.state) {
      delete window.localStorage.state

      xhr({
        url: config.gatekeeperUrl + '/' + query.code,
        json: true
      }, (err, resp, body) => {
        if (err) {
          console.error('something went wrong')
        } else {
          app.me.token = body.token
          this.redirectTo('/repos')
        }
      })
      this.renderPage(<MessagePage title='Fetching data from Github'/>)
    }
  },

  fourOhFour () {
    this.renderPage(<MessagePage title='Page not found'/>)
  }

})
