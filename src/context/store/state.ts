export interface StateType {
  permissionList: Record<string, any>[]
}

export const state: StateType = {
  /** 权限列表 */
  permissionList: [],
}
