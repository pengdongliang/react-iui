import type { StateType } from './state'

export type Action = 'setPermissionList'

export interface ActionType {
  type: Action
  payload?: any
}

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'setPermissionList': {
      return {
        ...state,
        permissionList: action.payload,
      }
    }
    default:
      return state
  }
}
