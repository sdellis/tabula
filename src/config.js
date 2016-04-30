const config = {
  'ltopmacellis.local': {
    clientId: '900ada97278b5f64a533',
    gatekeeperUrl: 'https://tabula-localhost.herokuapp.com/authenticate',
    // manifestStore: 'http://iiif.io/api/presentation/2.0/example/fixtures'
    manifestStore: 'http://localhost:3000/collections/manifests'
  },

  'tabula.surge.sh': {
    clientId: '010379124ec4bf2e878a',
    gatekeeperUrl: 'https://tabula-production.herokuapp.com/authenticate',
    manifestStore: 'https://tabula.space/collections/manifests'
  }
}[window.location.hostname]

export default config
