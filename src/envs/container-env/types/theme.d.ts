import type { ThemeConfig } from 'antd'

declare module '@emotion/react' {
  export interface Theme {
    antdTheme: ThemeConfig
    namespace: string
    breakPoint: {
      xxs: number // 320
      xs: number // 480
      s: number // 640
      sm: number // 768
      m: number // 992
      l: number // 1024
      lg: number // 1200
      xl: number // 1440
      xxl: number // 1600
      xxxl: number // 1920
    }
    colors: {
      white: string
      black: string
      primary: string
    }
    [K: string]: any
  }
}
