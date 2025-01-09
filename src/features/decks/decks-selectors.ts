import type { AppRootState } from '../../app/store.ts'
import type { Decks } from './DecksList/decksApi.types.ts'


export const selectDecks = (state: AppRootState): Decks => state.decks.decks
