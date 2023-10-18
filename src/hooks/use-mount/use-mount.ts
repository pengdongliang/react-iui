import { useEffect, useRef } from 'react'

/**
 * 只在组件初始化时执行, 返回是否初始化完成, 如: `const mounted = useMount(() => {}); mounted.current && doSomething()`
 */
export const useMount = (fn?: () => void) => {
  if (fn && typeof fn !== 'function') {
    console.error(`useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`)
  }

  const mounted = useRef(false)

  useEffect(() => {
    fn?.()
    mounted.current = true

    return () => {
      mounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return mounted
}
