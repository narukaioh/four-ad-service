jest.mock('./four-against-darkness/dices-rolls')
import Map from './'
import { d6 } from './four-against-darkness/dices-rolls'

d6.mockImplementation(() => 2)
describe('services/get', () => {
  it('deve retornar um mapa', () => {
    const req = {
      params: {
        number: 11
      }
    }

    const res = {
      send: (args) => args
    }

    jest.spyOn(res, 'send')

    const { get } = Map()

    get(req, res)

    expect(res.send).toHaveBeenCalled()
    expect(res.send).toHaveBeenCalledWith({
      description: '2 peças de ouro.',
      image: '11.png',
      quest: {}
    })
  })
})
