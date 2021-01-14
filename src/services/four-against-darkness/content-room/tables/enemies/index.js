import { d6 } from '../../../dices-rolls'

/*
1....... d6+2 para Esqueletos ou d6 para Zumbis (50% de chance para cada). Mortos- -vivos, nível 3, sem tesouro. Arma de esmagamento atacam Esqueletos com +1. Flechas têm -1 contra esqueletos e zumbis. Esqueletos e zumbis nunca testam vontade.
Reações: Sempre lutam até a morte.
2....... d6+3 Goblins. Nível 3, tesouro -1. Os goblins têm 1 chance em 6 de conseguirem
agir de surpresa, agindo antes do grupo. Se eles agirem antes do grupo, role a tabela de reações abaixo. Anões atacam goblins com +1.
Reações (d6): 1 fogem se em menor número, 2-3 suborno (5 PO por goblin), 4-6 lutam.
3....... d6 Hobgoblins. Nível 4, tesouro +1.
Reações (d6): 1 fugir se estiver em menor número, 2-3 suborno (10 PO por hob- goblin), 4-5 lutam, 6 lutam até a morte.
4....... d6+1 Orcs. Nível 4, tesouro normal. Orcs têm medo de magia e devem testar vontade cada vez que um ou mais são mortos por uma magia. Se uma magia fi- zer com que sua vida caia para menos de 50%, eles testarão vontade com -1. Eles nunca têm itens mágicos em seu tesouro: em vez disso, trate qualquer magia rolada como peças de ouro d6 x d6. Elfos atacam e lançam magias contra orcs com +1.
Reações (d6): 1-2 pedem suborno (10 PO por orc), 3-5 lutam, 6 lutam até a morte. 5....... d3 Trolls. Nível 5, tesouro normal. Trolls se regeneram, a menos que sejam mor- tos por magia, ou a menos que um personagem use um ataque para cortar um troll já morto em pedaços. Se isso não acontecer, role um dado para cada troll morto no próximo turno. Com 5 ou 6, o troll vai voltar à vida e continuar a lutar.
Halflings adicionam seu nível ao teste de Defesa contra trolls.
Reações (d6): 1-2 lutam, 3-6 lutam até a morte. Se um anão estiver presente no grupo, os trolls lutarão automaticamente até a morte.
6....... 2d6 Povo Fungo. Nível 3, tesouro normal. Qualquer personagem que tome dano do povo fungo deve passar numa rolagem contra veneno de nível 3 ou perder 1 de vida. Halflings adicionam seu nível nessa rolagem.
Reações (d6): 1-2 pedem suborno (d6 PO por fungo), 3-6 lutam.
*/
const gobblinsAttacksFirst = () => {
  return d6({}) > 1 ? false : true
}

export const tableEnemies = (number) => {
  const goblins = d6({ bonus: 3 })
  const table = {
    1: `${d6({
      bonus: 2
    })} para Esqueletos ou d6 para Zumbis (50% de chance para cada). 
      Mortos- -vivos, nível 3, sem tesouro. 
      Arma de esmagamento atacam Esqueletos com +1. 
      Flechas têm -1 contra esqueletos e zumbis. 
      Esqueletos e zumbis nunca testam vontade.
      Reações: Sempre lutam até a morte.`,
    2: `${goblins} Goblins.
      Nível 3, tesouro -1. 
      Anões atacam goblins com +1.
      Os goblins têm 1 chance em 6 de conseguirem agir de surpresa, agindo antes do grupo. 
      Se eles agirem antes do grupo, role a tabela de reações abaixo. 
      Reações (d6): 
        1 fogem se em menor número, 
        2-3 suborno (${goblins * 5} PO por goblin), 
        4-6 lutam.`,
    3: '',
    4: '',
    5: '',
    6: ''
  }

  return table[number]
}
