import type { Deck, Decks } from './DecksList/decksApi.types.ts'

// const initialState = {
//   // decks: [] as any[], // todo: add type
//   // searchParams: {
//   //   name: '',
//   // },
// }
const initialState: DecksState = {
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

export type DecksState = {
  decks: Decks
  searchParams: {
    name: string
  }
}

// type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return { ...state, decks: action.payload.decks, searchParams: { name: '' } }
    case 'ADD_DECK': {
      const newDeck = action.payload.deck;
      return {
        ...state,
        decks: {
          ...state.decks,
          items: [newDeck, ...state.decks.items],
          pagination: {
            ...state.decks.pagination,
            // totalItems: state.decks.pagination.totalItems + 1,
          },
        },
      }
    }

    // case 'ADD_DECK':
    //   const newDeck: Deck = {
    //     id: 'string',
    //     userId: 'string',
    //     name: action.payload.name,
    //     isPrivate: false,
    //     cover: 'string',
    //     created: '2025-01-08T07:51:09.173Z',
    //     updated: '2025-01-08T07:51:09.173Z',
    //     cardsCount: 0,
    //   }
    //   return {
    //     ...state,
    //     decks: {
    //       ...state.decks,
    //       items: [newDeck, ...state.decks.items],
    //       pagination: {
    //         ...state.decks.pagination,
    //         totalItems: state.decks.pagination.totalItems + 1,
    //       },
    //     },
    default:
      return state
  }
}

// Action creators
export const setDecksAC = (payload: { decks: Decks }) => {
  return {type: 'SET_DECKS', payload } as const
}

export const addDeckAC = (payload: { deck: Deck }) => {
// export const addDeckAC = (payload: { name: string }) => {
  return {type: 'ADD_DECK', payload } as const
}

// запись через ReturnType Actions type
export type SetDecksActionType = ReturnType<typeof setDecksAC>
export type AddDeckActionType = ReturnType<typeof addDeckAC>

export type DecksActions = SetDecksActionType | AddDeckActionType