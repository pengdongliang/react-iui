import type { ReactNode } from 'react'

export type FullScreenContainerProps = {
  children?: ReactNode
}

export function FullScreenContainer({ children }: FullScreenContainerProps) {
  return <div>{children}</div>
}
