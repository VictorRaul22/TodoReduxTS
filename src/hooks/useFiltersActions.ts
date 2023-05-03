import {
  addNewColor,
  changeStatus,
  type ColorType,
  removeColor,
  type StatusType,
} from '../redux/filter/slice'

import { useAppDispatch } from './store'
interface ReturnUseFilterAction {
  changeFilterStatus: (status: StatusType) => void
  addColor: (status: ColorType) => void
  deleteColor: (status: ColorType) => void
}
export const useFiltersActions = (): ReturnUseFilterAction => {
  const dispatch = useAppDispatch()
  const changeFilterStatus: ReturnUseFilterAction['changeFilterStatus'] =
    status => {
      dispatch(changeStatus(status))
    }
  const addColor: ReturnUseFilterAction['addColor'] = color => {
    dispatch(addNewColor(color))
  }
  const deleteColor: ReturnUseFilterAction['deleteColor'] = color => {
    dispatch(removeColor(color))
  }
  return { changeFilterStatus, addColor, deleteColor }
}
