import { createEffectWithTarget } from '@yooco/react-iui.toolbox.utils'
import { useEffect } from 'react'

/**
 * 监听dom元素的useEffect
 */
export const useEffectWithTarget = createEffectWithTarget(useEffect)

/**
 * 监听dom元素的useEffect, 在窗口尺寸变化后更新
 */
export const useEffectWithTargetAfterWindowChange = createEffectWithTarget(useEffect, { updateAfterWindowChange: true })
