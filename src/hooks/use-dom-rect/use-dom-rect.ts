import { useLayoutEffectWithTargetAfterWindowChange } from '@yooco/react-iui.hooks.use-layout-effect-with-target'
import type { BasicTarget, TargetType } from '@yooco/react-iui.toolbox.utils'
import { getTargetElement } from '@yooco/react-iui.toolbox.utils'
import { useState } from 'react'

export type UseDomRectProps<T extends TargetType = Element> = [
  /** 支持ref, dom, ()=>dom */
  target: BasicTarget<T>
]

/**
 * 获取dom元素大小及其相对于视口的位置
 */
export const useDomRect = <T extends TargetType>(...props: UseDomRectProps<T>) => {
  const [target] = props
  const [rect, setRect] = useState<Record<string, any>>({})

  const getScrollPosition = () => {
    let scrollX = 0
    let scrollY = 0
    if (window.pageXOffset) {
      scrollX = window.pageXOffset
      scrollY = window.pageYOffset
    } else {
      scrollX = (document.documentElement || (document.body.parentNode as Element) || document.body).scrollLeft
      scrollY = (document.documentElement || (document.body.parentNode as Element) || document.body).scrollTop
    }
    return { scrollX, scrollY }
  }

  useLayoutEffectWithTargetAfterWindowChange(
    () => {
      const el = getTargetElement<T>(target)

      if (!el) {
        return
      }

      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { scrollX, scrollY } = getScrollPosition()
          const { top = 0, left = 0, x, y, width, height, bottom } = entry.target?.getBoundingClientRect() ?? {}
          const itemStyle = entry.target ? window?.getComputedStyle(entry.target as Element, null) : undefined
          let paddingLeft = 0
          let paddingRight = 0
          let paddingTop = 0
          let paddingBottom = 0
          if (itemStyle) {
            paddingLeft = parseFloat(itemStyle.getPropertyValue('padding-left')) ?? 0 // 获取左侧内边距
            paddingRight = parseFloat(itemStyle.getPropertyValue('padding-right')) ?? 0 // 获取右侧内边距
            paddingTop = parseFloat(itemStyle.getPropertyValue('padding-top')) ?? 0 // 获取顶部内边距
            paddingBottom = parseFloat(itemStyle.getPropertyValue('padding-bottom')) ?? 0 // 获取底部内边距
          }

          const domToBodyLeft = left + scrollX
          const domToBodyTop = top + scrollY
          const flexWidth = window.innerWidth - domToBodyLeft
          const flexHeight = window.innerHeight - domToBodyTop
          const realWidth = flexWidth - paddingLeft - paddingRight
          const realHeight = flexHeight - paddingTop - paddingBottom
          setRect({
            x,
            y,
            width,
            height,
            bottom,
            domToBodyTop,
            domToBodyLeft,
            flexWidth,
            flexHeight,
            realWidth,
            realHeight,
            scrollX,
            scrollY,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            dom: entry.target,
          })
        })
      })

      resizeObserver.observe(el as Element)

      return () => {
        resizeObserver.disconnect()
      }
    },
    [],
    target
  )

  return rect
}
