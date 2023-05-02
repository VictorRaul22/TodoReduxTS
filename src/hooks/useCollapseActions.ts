import { changeCollapse } from '../redux/collapse/slice'

import { useAppDispatch, useAppSelector } from './store'
interface returnUseCollapseAction {
  toggleCollapse: (state?: boolean) => void
  // collapse: boolean
}
export const useCollapseActions = (): returnUseCollapseAction => {
  const dispatch = useAppDispatch()
  const collapse = useAppSelector(state => state.collapse)

  const toggleCollapse: returnUseCollapseAction['toggleCollapse'] = state => {
    if (state != null) {
      dispatch(changeCollapse(state))
    } else {
      dispatch(changeCollapse(!collapse))
    }
  }

  return { toggleCollapse }
}
