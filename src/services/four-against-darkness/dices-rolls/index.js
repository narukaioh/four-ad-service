import { randomInt } from './randomInt'

export const d6 = ({ bonus, rolls }) => {
  if (!bonus) {
    bonus = 0
  }
  if (!rolls) {
    rolls = 1
  }

  return rolls * randomInt(1, 6) + bonus
}

export const d4 = ({ bonus = 0, rolls = 1 }) => rolls * randomInt(1, 4) + bonus

export const d6xd6 = () => d6({}) * d6({})

export const d66 = () => parseInt(`${d6({})}${d6({})}`)
