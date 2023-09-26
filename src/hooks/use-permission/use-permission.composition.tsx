import { usePermission } from './use-permission'

export const BasicUsage = () => {
  const [validatePermission] = usePermission()
  return validatePermission('test') ? <div>有权限</div> : <div>没权限</div>
}
