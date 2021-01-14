import { rooms } from './four-against-darkness/rooms'
import tableContentRoom from './four-against-darkness/content-room'
import { d6 } from './four-against-darkness/dices-rolls'

export default () => {
  const get = (req, res) => {
    const { number } = req.params
    const room = rooms[number]

    const contentRoom = tableContentRoom.find(
      (contentRoom) => contentRoom.id === d6({ rolls: 2 })
    )

    const response = {
      image: `${number}.png`,
      description: contentRoom[room.type](),
      quest: {}
    }

    res.send(response)
  }

  const getQuest = (req, res) => {
    const { question } = req.params
    res.send({
      question
    })
  }

  return {
    get,
    getQuest
  }
}
