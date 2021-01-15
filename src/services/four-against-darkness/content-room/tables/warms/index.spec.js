jest.mock('../../../dices-rolls')
import { d6 } from '../../../dices-rolls'
import { tableWarms } from './'

d6.mockImplementation(() => 4)

describe('services/4ad/content-room/warms', () => {
  describe('tableWarms function represents a table of warms', () => {
    it('should return an option when number is passed', () => {
      const number = 1
      const response = tableWarms(number)

      expect(response).toBe(
        '4 Ratos. Nível 1, sem tesouro. Qualquer personagem ferida tem 1 chance em 6 de perder 1 ponto de vida adicional devido a um ferimento infectado. Reações (d6): 1-3 fogem, 4-6 lutam'
      )
    })
  })
})
