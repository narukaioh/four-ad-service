import { d6 } from '../../../dices-rolls'
import { tableWarms } from '../warms'
import { tableBizarreMonsters } from '../bizarre-monsters'
import { tableEnemies } from '../enemies'
import { tableBosses, tinnyDragon } from '../bosses'
import {
  activeNomandicAlquimist,
  activeWhiteWomanQuest,
  activeNomandicHealer,
  getNomandicAlquimist,
  getNomandicHealer,
  getWhiteWoman
} from '../../../state'

import { tableTraps } from '../traps'

const getErrantBoss = () => {
  let errantBoss
  do {
    errantBoss = d6({})
  } while (errantBoss === tinnyDragon)
  return tableBosses(errantBoss)
}

const errantMonsters = (number) => {
  const table = {
    1: tableWarms(d6({})),
    2: tableWarms(d6({})),
    3: tableWarms(d6({})),
    4: tableEnemies(d6({})),
    5: tableBizarreMonsters(d6({})),
    6: `${getErrantBoss()}. Não é considerado chefão final.`
  }

  return table[number]
}

const tableSpecialEvents = (number) => {
  const table = {
    1: `Um Fantasma passa pelo grupo.
        Todas as personagens devem passar numa rolagem contra medo nível 4 ou perder 1 de vida.
        Um clérigo adiciona seu nível a essa rolagem.`,
    2: `Monstros Errantes atacam o grupo. ${errantMonsters(d6({}))}.`,
    3: `Uma Mulher de Branco aparece e pede para o grupo completar uma missão. 
        Se você aceitar, ${tableQuests(d6({}))}. 
        Se você recusar, ela desaparece. ${activeWhiteWomanQuest()}`,
    4: `Armadilha! ${tableTraps(d6({}))}.`,
    5: `Você encontra um Curandeiro Nômade. 
        Ele vai curar o seu grupo por 10 PO por ponto de vida curado. 
        Você pode curar quantos pontos de vida você puder pagar.
        Você não o encontrará novamente durante essa aventura.${activeNomandicHealer()}`,
    6: `Você encontra um Alquimista Nômade. 
        Ele lhe venderá até uma poção de cura por membro do grupo (50 PO cada) ou 
        uma única dose de veneno para lâmina (30 PO). 
        A poção de cura irá curar todos os pontos vitais perdidos de um único personagem 
        e pode ser engolida a qualquer momento durante o jogo como uma ação livre. 
        O veneno da lâmina permite envenenar uma única flecha ou arma cortante (não uma arma esmagadora). 
        Essa arma terá +1 no Ataque contra o primeiro inimigo que você lutar. 
        O veneno não funciona em monstros mortos-vivos, demônios, gosmas, autômatos ou 
        estátuas vivas. Você pode encontrar um alquimista nômade apenas uma vez por jogo.${activeNomandicAlquimist()}`
  }

  while (
    (getWhiteWoman() && number === 3) ||
    (getNomandicHealer() && number === 5)
  ) {
    number = d6({})
  }

  return getNomandicAlquimist() && number === 6
    ? tableTraps(d6({}))
    : table[number]
}

export default { tableSpecialEvents }
