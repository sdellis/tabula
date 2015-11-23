const config = {
  'ltopmacellis.local': {
    clientId: '900ada97278b5f64a533',
    gatekeeperUrl: 'https://tabula-localhost.herokuapp.com/authenticate'
  },

  'tabula.surge.sh': {
    clientId: '010379124ec4bf2e878a',
    gatekeeperUrl: 'https://tabula-production.herokuapp.com/authenticate'
  }
}[window.location.hostname]

export default config
