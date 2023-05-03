// import { type Selector } from 'react-redux'

import { type SelectorC } from '../types'

import { type filterState } from './type'

export const allFilters: SelectorC<filterState> = state => state.filters
