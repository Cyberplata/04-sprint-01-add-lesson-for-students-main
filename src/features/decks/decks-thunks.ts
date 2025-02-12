// Thunks
import type { AppDispatch } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksAC({ decks: res.data.items }))
  })
}

export const addDeckTC = (arg: {name: string}) => async (dispatch: AppDispatch) => {
  decksApi.createDeck(arg).then((res) => {
    dispatch(addDeckAC({ deck: res.data }))
  })
}
