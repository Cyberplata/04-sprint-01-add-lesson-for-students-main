import type { AppRootState } from '../../app/store.ts'
import type { Deck } from './DecksList/decksApi.types.ts'

export const selectDecks = (state: AppRootState): Deck[] => state.decks.decks
