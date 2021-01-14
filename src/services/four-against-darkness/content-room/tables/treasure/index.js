import { d6 } from '../../../dices-rolls'

const magicWeapon = (number) => {
  const table = {
    1: 'arma leve de es- magamento',
    2: 'arma leve cortante',
    3: 'arma de mão de esmagamento',
    4: 'arma de mão cortante',
    5: 'arma de mão cortante',
    6: 'arco'
  }
  return table[number]
}

const tableMagicTeasure = (number) => {
  const table = {
    1: `varinha do sono. 
        O usuário pode lançar a magia Sono 3 vezes antes que sua energia se esgote. 
        Apenas magos e elfos podem usá-la. 
        Adicione o nível do usuário para determinar o teste de magia, 
        como você faria para uma magia de Sono lançada por aquele personagem.`,

    2: `anel de teletransporte. 
        Permite que o usuário passe automaticamente por um teste de Defesa movendo aquela personagem para fora da sala. 
        Essa persona- gem pode não participar do combate atual, mas se junta ao grupo assim que o combate terminar. 
        Após um uso, o anel perde seus poderes e se torna um anel de ouro simples que vale 
        ${d6({ bonus: 1 })}`,
    3: `ouro do tolo.
        Essas peças de ouro mágicas (mas falsas) permitirão ao usuário subornar automaticamente o próximo monstro que pedir suborno. 
        Não importa o que o monstro peça, aparecerá ouro o suficiente para satisfazer sua ganância. 
        Este é um item mágico de uso único.`,
    4: `${magicWeapon(d6({}))}.
        Dá +1 às jogadas de Ataque de seu usuário. 
        Este é um item mágico permanente.`,
    5: `Poção de Cura. 
        Pode ser usada a qualquer momento, curando todos os pontos de vida perdidos de um único personagem. 
        Beber não requer uma ação. 
        Este é um item mágico de uso único, utilizável por todas as classes, exceto bárbaros.`,
    6: `Cajado de Bola de Fogo. 
        Permite que seu usuário lance a magia Bola de Fogo duas vezes, 
        então seus poderes esgotam. 
        Apenas magos podem usá-lo. 
        Adicione o nível do usuário para determinar a jogada de magia, 
        como você faria para uma magia de Bola de Fogo lançada por aquela personagem.`
  }

  return table[number]
}

export const tableTeasure = (number) => {
  const table = {
    0: 'nenhum tesouro encontrado.',
    1: `${d6({})} peças de ouro.`,
    2: `${d6({ rolls: 2 })} peças de ouro.`,
    3: `um pergaminho com uma magia aleatória.`,
    4: `uma gema que vale ${d6({ rolls: 2 }) * 5} peças de ouro.`,
    5: `uma joia que vale ${d6({ rolls: 3 }) * 10} peças de ouro.`,
    6: `um item mágico: ${tableMagicTeasure(d6({}))}.`
  }

  if (number <= 0) {
    return table[0]
  }
  if (number >= 6) {
    return table[6]
  }

  return table[number]
}
