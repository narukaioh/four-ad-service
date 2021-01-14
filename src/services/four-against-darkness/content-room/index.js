import { d6 } from '../dices-rolls'
import Tables from './tables'

const {
  tableBizarreMonsters,
  tableBosses,
  tableEnemies,
  tableSpecialEvents,
  tableSpecialResources,
  tableTeasure,
  tableTraps,
  tableWarms,
  tinnyDragon
} = Tables

const empty = () => 'vazio'

export default [
  {
    id: 2,
    hall: () => tableTeasure(d6({})),
    room: () => tableTeasure(d6({}))
  },
  {
    id: 3,
    hall: () => tableTraps(d6({})),
    room: () => tableTraps(d6({}))
  },
  {
    id: 4,
    hall: () => empty(),
    room: () => tableSpecialEvents(d6({}))
  },
  {
    id: 5,
    hall: () => tableSpecialResources(d6({})),
    room: () => tableSpecialResources(d6({}))
  },
  {
    id: 6,
    hall: () => tableWarms(d6({})),
    room: () => tableWarms(d6({}))
  },
  {
    id: 7,
    hall: () => tableEnemies(d6({})),
    room: () => tableEnemies(d6({}))
  },
  {
    id: 8,
    hall: () => empty(),
    room: () => tableEnemies(d6({}))
  },
  {
    id: 9,
    hall: () => empty(),
    room: () => empty()
  },
  {
    id: 10,
    hall: () => empty(),
    room: () => tableBizarreMonsters(d6({}))
  },
  {
    id: 11,
    hall: () => tableBosses(d6({})),
    room: () => tableBosses(d6({}))
  },
  {
    id: 12,
    hall: () => empty(),
    room: () => tableBosses(tinnyDragon)
  }
]
