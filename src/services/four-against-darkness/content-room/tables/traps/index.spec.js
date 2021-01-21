import { tableTraps } from './'

describe('content-room/trap', () => {
  it('deve retornar o valor da tabela de armadilhas', () => {
    const number = 5
    const result = tableTraps(number)

    expect(result).toBe(
      `Lanças saem de uma parede (nível 5) acertando duas personagens. Os personagens 3 e 3 da ordem.`
    )
  })
})
