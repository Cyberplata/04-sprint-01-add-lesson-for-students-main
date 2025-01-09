import { combineReducers, legacy_createStore, applyMiddleware, AnyAction } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type DecksActions, decksReducer } from '../features/decks/decks-reducer.ts'

const rootReducer = combineReducers({
  decks: decksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

// export type AppRootState = ReturnType<typeof rootReducer>
export type AppRootState = ReturnType<typeof store.getState>

// type AppActionsType = DecksActions

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>
// export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActionsType>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
