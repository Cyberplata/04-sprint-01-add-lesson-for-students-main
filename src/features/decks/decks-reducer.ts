import type { AppDispatch } from '../../app/store.ts'
import { decksApi } from './decks-api.ts'
import type { Decks } from './DecksList/decksApi.types.ts'

const initialState = {
  // decks: [] as any[], // todo: add type
  // searchParams: {
  //   name: '',
  // },
  decks: {
    items: [],
    pagination: {
      currentPage: 0,
      itemsPerPage: 0,
      totalPages: 0,
      totalItems: 0,
    },
  },
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return { ...state, decks: action.payload.decks }
    default:
      return state
  }
}

// Action creators
export const setDecksAC = (payload: { decks: Decks }) => {
  return {type: 'SET_DECKS', payload } as const
}

// Thunks
export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksApi.getDecks().then((res) => {
    dispatch(setDecksAC({ decks: res.data }))
  })
}

// запись через ReturnType Actions type
export type SetDecksActionType = ReturnType<typeof setDecksAC>

type DecksActions = SetDecksActionType