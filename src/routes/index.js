import Map from '../services/'

const routes = (server) => {
  server.get('/map/:number', Map().get)
  server.get('/quest/:question', Map().getQuest)
}

export default routes
