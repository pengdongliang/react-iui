import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledMainContentContainer = styled.div<{ itemHeight: number }>(({ itemHeight }) => {
  return css`
    height: ${itemHeight}px;
  `
})
