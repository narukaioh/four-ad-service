const initialState = {
  NOMANDIC_ALQUIMIST: false,
  NOMANDIC_HEALER: false,
  WHITE_WOMAN: false,
  SOURCE: false
}

const activeNomandicAlquimist = () => {
  initialState.NOMANDIC_ALQUIMIST = true
}
const activeNomandicHealer = () => {
  initialState.WHITE_WOMAN = true
}
const activeSource = () => {
  initialState.SOURCE = true
}
const activeWhiteWomanQuest = () => {
  initialState.NOMANDIC_HEALER = true
}

const getNomandicAlquimist = () => initialState.NOMANDIC_ALQUIMIST
const getNomandicHealer = () => initialState.NOMANDIC_HEALER
const getSource = () => initialState.SOURCE
const getWhiteWoman = () => initialState.WHITE_WOMAN

export default {
  activeNomandicAlquimist,
  activeNomandicHealer,
  activeSource,
  activeWhiteWomanQuest,
  getNomandicAlquimist,
  getNomandicHealer,
  getSource,
  getWhiteWoman
}
