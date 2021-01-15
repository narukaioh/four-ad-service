jest.mock('../../../dices-rolls')
import { d6 } from '../../../dices-rolls'
import { tableTeasure } from './'

d6.mockImplementation(() => 4)

describe('services/4ad/content-room/treasure', () => {
  describe('tableTeasure function represents a table of treasures', () => {
    it('should return first option when number is less than or equal 0', () => {
      const number = -1
      const response = tableTeasure(number)

      expect(response).toBe('nenhum tesouro encontrado.')
    })

    it('should return first option when number is greater than or equal 6', () => {
      const number = 10
      const response = tableTeasure(number)

      expect(response).toBe(
        'um item mágico: arma de mão cortante. Dá +1 às jogadas de Ataque de seu usuário. Este é um item mágico permanente.'
      )
    })
  })
})
