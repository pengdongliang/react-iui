import { createEffectWithTarget } from '@yooco/react-iui.toolbox.utils'
import { useLayoutEffect } from 'react'

/**
 * 监听dom元素的useLayoutEffect
 */
export const useLayoutEffectWithTarget = createEffectWithTarget(useLayoutEffect)

/**
 * 监听dom元素的useLayoutEffect, 在窗口尺寸变化后更新
 */
export const useLayoutEffectWithTargettAfterWindowChange = createEffectWithTarget(useLayoutEffect, {
  updateAfterWindowChange: true,
})
