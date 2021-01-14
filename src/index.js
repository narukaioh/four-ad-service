import server from './server'

const port = 3000

server.listen(port, () => {
  console.log(`listening in http://localhost:${port}`)
})
