const { d4 } = require('../../../dices-rolls')

export const tableTraps = (number) => {
  const table = {
    1: 'Um dardo (nível 2) ataca uma personagem aleatória.',
    2: 'O gás venenoso (nível 3) ataca todas as personagens.',
    3: 'Um alçapão (nível 4) se abre sob os pés da personagem que lidera a ordem de marcha.',
    4: 'Armadilha para ursos (nível 4) atingindo a personagem que lidera a ordem de marcha.',
    5: `Lanças saem de uma parede (nível 5) acertando duas personagens. Os personagens ${d4(
      {}
    )} e ${d4({})} da ordem.`,
    6: 'Um bloco de pedra gigante (nível 5) cai sobre a última personagem na ordem da marcha.'
  }

  return table[number]
}
