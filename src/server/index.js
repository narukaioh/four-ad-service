import express from 'express'
import cors from 'cors'
import routes from '../routes'

const server = express()
server.use(cors())
server.use(express.static('public'))
routes(server)

export default server
