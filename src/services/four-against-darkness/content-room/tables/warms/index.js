export const tableWarms = (number) => {
  const goblins = d6({ rolls: 2 })
  const table = {
    1: `${d6({ rolls: 3 })} Ratos. 
        Nível 1, sem tesouro. 
        Qualquer personagem ferida tem 1 chance em 6 de perder 1 ponto de vida adicional devido a um ferimento infectado. 
        Reações (d6): 1-3 fogem, 4-6 lutam
  `,
    2: `${d6({ rolls: 3 })} Morcegos Vampiros. 
        Nível 1, sem tesouro. 
        Magias são lançadas com -1 por conta da distração causada por seus gritos. 
        Apesar do nome Vampiro, essas NÃO são criaturas mortas-vivas.
        Reações (d6): 1-3 fogem, 4-6 lutam`,
    3: `${goblins} Goblins. 
        Nível 3, tesouro -1, vontade -1. 
        Anões os atacam com +1 Reações (d6): 
          1 fugir, 2-3 fogem se em menor número, 
          4 pedem suborno (${golbins * 5} PO por goblin), 
          5-6 lutam.`,
    4: `${d6({})} Centopeias Gigantes. 
        Nível 3, sem tesouro. 
        Qualquer personagem ferida por uma centopeia gigante 
        deve passar num teste contra veneno de nível 2 ou perde 1 de vida adicional.
        Reações (d6): 1 fogem, 2-3 fogem se em menor número, 4-6 lutar`,
    5: `${d6({})} Sapos Vampiros. 
        Nível 4, tesouro -1. 
        Apesar do nome Vampiro, essas NÃO são criaturas mortas-vivas.
        Reações (d6): 1 fogem, 2-4 lutam, 5-6 lutam até a morte`,
    6: `${d6({ rolls: 2 })} Ratos Esqueléticos. 
        Nível 3, morto-vivo, sem tesouro. 
        Ataques com armas de esmagamento são +1 contra ratos esqueléticos, 
        mas eles não podem ser atacados por arcos e fundas. 
        Clérigos adicionam o seu nível quando os atacam por que são mortos-vivos.
        Reações (d6): 1-2 fogem, 3-6 lutam`
  }

  return table[number]
}
