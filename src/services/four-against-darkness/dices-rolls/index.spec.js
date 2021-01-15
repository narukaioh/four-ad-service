import { d4, d6, d66, d6xd6 } from './'

describe('services/4ad/dices-rolls', () => {
  describe('d4 function represents a dice with four sides and ...', () => {
    const dice = { sides: 4 }

    it('should return numbers greater than 0', () => {
      const result = d4({})
      expect(result > 0).toBeTruthy()
    })

    it(`should return numbers less than or equal ${dice.sides}`, () => {
      const result = d4({})
      expect(result <= dice.sides).toBeTruthy()
    })

    it('should be possible to pass the quantity of rolls', () => {
      const rolls = 2
      const max = dice.sides * rolls

      const result = d4({ rolls })
      expect(result <= max).toBeTruthy()
    })

    it('should be possible to pass the quantity of bonus', () => {
      const bonus = 10

      const result = d4({ bonus })
      expect(result <= dice.sides + bonus).toBeTruthy()
    })
  })

  describe('d6 function represents a dice with six sides and ...', () => {
    const dice = { sides: 6 }

    it('should return numbers greater than 0', () => {
      const result = d6({})
      expect(result > 0).toBeTruthy()
    })

    it(`should return numbers less than or equal ${dice.sides}`, () => {
      const result = d6({})
      expect(result <= dice.sides).toBeTruthy()
    })

    it('should be possible to pass the quantity of rolls', () => {
      const rolls = 2
      const max = dice.sides * rolls

      const result = d6({ rolls })
      expect(result <= max).toBeTruthy()
    })

    it('should be possible to pass the quantity of bonus', () => {
      const bonus = 10

      const result = d6({ bonus })
      expect(result <= dice.sides + bonus).toBeTruthy()
    })
  })

  describe(`d66 function represents two dices of six sides. 
      where together it will form a number. 
      the first dice represents a decimal and
      the last one is a numeric...`, () => {
    it('should return numbers greater than or equal 11', () => {
      const result = d66()
      expect(result >= 11).toBeTruthy()
    })

    it('should return numbers less than or equal 66', () => {
      const result = d66()
      expect(result <= 66).toBeTruthy()
    })
  })

  describe(`d6xd6 function represents two dices of six sides where we multiply them and it will form a number.`, () => {
    it('should return numbers greater than or equal 6', () => {
      const result = d6xd6()
      expect(result >= 6).toBeTruthy()
    })

    it('should return numbers less than or equal 36', () => {
      const result = d6xd6()
      expect(result <= 36).toBeTruthy()
    })
  })
})
