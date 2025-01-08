import { useEffect } from 'react'
import { useAppDispatch } from '../../../app/store.ts'
import { fetchDecksTC } from '../decks-reducer.ts'
import s from './DecksList.module.css'

export const DecksList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return <ul className={s.list}></ul>
}
