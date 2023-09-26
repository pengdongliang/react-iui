import { useSelector } from '@yooco/react-iui.context.store'
import { useCallback } from 'react'

export type UsePermissionProps = [permission?: string | ({ name: string; required?: boolean } | string)[] | undefined]

/**
 * 校验权限
 */
export const usePermission = (...props: UsePermissionProps) => {
  const permissionList = useSelector((state) => state?.permissionList)

  const handlePermission = useCallback(
    (s: string) => {
      return permissionList?.find((i) => i === s)
    },
    [permissionList]
  )

  const validatePermission = useCallback(
    (...args: UsePermissionProps) => {
      const [permissionProps] = props
      const [permissionArgs] = args
      const permission = permissionArgs ?? permissionProps
      if (!permission) return true
      let flag = false
      if (Array.isArray(permission)) {
        if (permission?.every((i) => (typeof i === 'object' ? i?.required === false : false))) return true
        const statusList = permission?.reduce((p: boolean[], c) => {
          let currentFlag = false

          if (typeof c === 'object') {
            const { name, required } = c ?? {}
            const hasPermission = handlePermission(name)
            if (!hasPermission) {
              if (!required) {
                currentFlag = true
              } else {
                return p
              }
            } else {
              currentFlag = true
            }
          } else if (typeof c === 'string') {
            if (handlePermission(c)) currentFlag = true
          }
          p = [...p, currentFlag]
          return p
        }, [])
        flag = !!statusList?.filter(Boolean)?.length
      } else if (typeof permission === 'string') {
        flag = handlePermission(permission)
      } else {
        flag = true
      }
      return !!flag
    },
    [handlePermission, props]
  )

  return [validatePermission]
}
