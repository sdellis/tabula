import 'babel-polyfill'
import app from 'ampersand-app'
import pageLabels from 'page-label-generator'
import styles from './styles/main.styl'
import icons from '../node_modules/octicons/octicons/octicons.css'
import Router from './router'
import Me from './models/me'

// expose `app` to browser console
window.app = app

// these are just set so that standard won't complain of unused vars
window.styles = styles
window.icons = icons

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
    this.gen = pageLabels.pageLabelGenerator()
  }
})

app.init()
