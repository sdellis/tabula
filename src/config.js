const config = {
  'ltopmacellis.local': {
    clientId: '900ada97278b5f64a533',
    gatekeeperUrl: 'https://tabula-localhost.herokuapp.com/authenticate',
    manifestStore: 'http://localhost:4000/collections/manifests'
  },

  'tabula.surge.sh': {
    clientId: '010379124ec4bf2e878a',
    gatekeeperUrl: 'https://tabula-production.herokuapp.com/authenticate',
    manifestStore: 'http://45.55.133.0:3000/collections/manifests'
  }
}[window.location.hostname]

export default config
