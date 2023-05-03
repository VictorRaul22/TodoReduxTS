import { type store } from './'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type SelectorC<T> = (state: RootState) => T
