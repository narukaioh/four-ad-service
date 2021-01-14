const { d4 } = require('../../../dices-rolls')
const { getSource } = require('../../../state')
const { tableTeasure } = require('../treasure')

const resolveStatue = (number) => {
  if (number >= 1 && number <= 3) {
    return `a estátua acorda e ataca o grupo. (chefão de nível 4 com 6 pontos de vida, imune a todas às magias;`
  }
  return `a estátua quebra e você encontra ${d6({ rolls: 3 }) * 10} PO dentro`
}

const tableSpecialResources = (number) => {
  const table = {
    1: `Fonte: 
        ${
          getSource()
            ? 'Todos os personagens feridos recuperam 1 de Vida.'
            : 'Nenhuma cura disponível.'
        }`,
    2: `Templo Sagrado: 
         Uma personagem de sua escolha ganha +1 de Ataque contra monstros mortos-vivos 
         ou demônios. Assim que mata um morto-vivo ou um de- mônio, o bônus desaparece.`,
    3: `Arsenal: 
        Personagens podem mudar suas armas se quiserem, 
        no limite das armas permitidas para o seu tipo de personagem. 
        Por exemplo, um guerreiro que estava usando uma arma e um escudo 
        pode descartar seu escudo e pegar a espada de duas mãos, 
        ou trocar sua espada por uma maça.`,
    4: `Altar Amaldiçoado: 
        Quando você entrar na sala, um brilho misterioso emana do altar sinistro. 
        A ${d4()} personagem da ordem é amaldiçoada e agora tem -1 nas suas rolagens de Defesa. 
        Para quebrar a maldição, a personagem deve derrotar o monstro chefão sozinho, 
        ou entrar no Templo Sagrado, ou ter uma magia de Benção usada nela por um clérigo.`,
    5: `Estátua: 
        Você pode deixar a estátua sozinha ou tocá-la. 
        Você quer tocá-la? [alert]${resolveStatue(d6({}))}[alert].`,
    6: `Sala de Enigma: 
        A sala contém uma caixa de quebra-cabeça nv ${d6({})}. 
        Você pode não mexer nela ou tentar resolvê-la. 
        Para cada tentativa falha, a personagem tentando resolver perde 1 de vida. 
        Magos e ladinas adicionam seu nível na rolagem para resolver enigmas. 
        O enigma foi resolvido? a caixa abre: ${tableTeasure(d6({}))}`
  }

  return table[number]
}

export default { tableSpecialResources }
