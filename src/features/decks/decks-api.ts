import axios from 'axios'
import type { Decks } from './DecksList/decksApi.types.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<Decks>('/v2/decks')
  },
  // createDeck(deck: Deck) {
  //   return instance.post<Deck>('/decks', deck)
  // },
  // updateDeck(deck: Deck) {
  //   return instance.put<Deck>(`/decks/${deck.id}`, deck)
  // },
  // deleteDeck(deckId: string) {
  //   return instance.delete<Deck>(`/decks/${deckId}`)
  // },
}