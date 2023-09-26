import { ColorType } from './button'

export type EntityButtonItemType<T> = {
  key?: T
  background?: string
  border?: string
  color?: string
  hoverBackground?: string
  activeBackground?: string
}

export type EntityButtonConfigType = {
  [K in ColorType & Record<string, any>]?: EntityButtonItemType<K>
}

/**
 * 实体按钮配置
 */
export const entityButtonConfig: EntityButtonConfigType = {
  red: {
    key: 'red',
    background: '#f5222d',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#ff4d4f',
    activeBackground: '#cf1322',
  },
  orange: {
    key: 'orange',
    background: '#fa541c',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#ff7a45',
    activeBackground: '#d4380d',
  },
  yellow: {
    key: 'yellow',
    background: '#faad14',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#ffc53d',
    activeBackground: '#d48806',
  },
  green: {
    key: 'green',
    background: '#52c41a',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#73d13d',
    activeBackground: '#389e0d',
  },
  cyan: {
    key: 'cyan',
    background: '#13c2c2',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#36cfc9',
    activeBackground: '#08979c',
  },
  blue: {
    key: 'blue',
    background: '#2f54eb',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#1d39c4',
    activeBackground: '#597ef7',
  },
  purple: {
    key: 'purple',
    background: '#722ed1',
    border: 'transparent',
    color: '#fff',
    hoverBackground: '#531dab',
    activeBackground: '#391085',
  },
}

export type TextButtonItemType<T> = {
  key?: T
  color?: string
  hoverColor?: string
  activeColor?: string
}

export type TextButtonConfigType = {
  [K in ColorType & Record<string, any>]?: TextButtonItemType<K>
}

/**
 * 文本按钮配置
 */
export const textButtonConfig = {
  red: {
    key: 'red',
    color: '#f5222d',
    hoverColor: '#f6696b',
    activeColor: '#cf1322',
  },
  orange: {
    key: 'orange',
    color: '#fa541c',
    hoverColor: '#fa8e64',
    activeColor: '#d4380d',
  },
  yellow: {
    key: 'yellow',
    color: '#faad14',
    hoverColor: '#f3c863',
    activeColor: '#d48806',
  },
  green: {
    key: 'green',
    color: '#52c41a',
    hoverColor: '#8ad261',
    activeColor: '#389e0d',
  },
  cyan: {
    key: 'cyan',
    color: '#13c2c2',
    hoverColor: '#5dd2cd',
    activeColor: '#08979c',
  },
  blue: {
    key: 'blue',
    color: '#2f54eb',
    hoverColor: '#455ac7',
    activeColor: '#597ef7',
  },
  purple: {
    key: 'purple',
    color: '#722ed1',
    hoverColor: '#683ab2',
    activeColor: '#391085',
  },
}
