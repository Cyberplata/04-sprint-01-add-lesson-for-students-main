import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksTC } from '../decks-reducer.ts'
import { selectDecks } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import s from './DecksList.module.css'

export const DecksList = () => {
  const decks = useAppSelector(selectDecks)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return <ul className={s.list}>
    {decks.items.map(deck => <DeckItem key={deck.id} deck={deck} />)}
  </ul>
}
