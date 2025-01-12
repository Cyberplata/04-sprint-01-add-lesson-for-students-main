// Thunks
import type { AppDispatch } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC({ decks: res.data }))
  })
}

export const addDeckTC = (arg: {name: string}) => async (dispatch: AppDispatch) => {
  return decksApi.createDeck(arg).then((res) => {
    dispatch(addDeckAC({ deck: res.data }))
  })
}
