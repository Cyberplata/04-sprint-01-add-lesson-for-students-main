import axios from 'axios'
import type { Deck, Decks } from './DecksList/decksApi.types.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<Decks>('/v2/decks')
  },
  createDeck(payload: { name: string }) {
    const { name } = payload
    return instance.post<Deck>('/v1/decks', { name })
  },
  // updateDeck(deck: Deck) {
  //   return instance.put<Deck>(`/decks/${deck.id}`, deck)
  // },
  // deleteDeck(deckId: string) {
  //   return instance.delete<Deck>(`/decks/${deckId}`)
  // },
}