import { type COLOR_FILTERS, type STATUS_FILTERS } from './consts'

export type StatusType = (typeof STATUS_FILTERS)[keyof typeof STATUS_FILTERS]
export type ColorType = (typeof COLOR_FILTERS)[keyof typeof COLOR_FILTERS]
export type ArrayColorsType = ColorType[]
export interface filterState {
  status: StatusType
  colors: ArrayColorsType
}
