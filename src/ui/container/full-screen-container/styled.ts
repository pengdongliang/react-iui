import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledFullScreenBox = styled.div(({ theme }) => {
  const { namespace } = theme as { namespace: string }

  return css`
    &.fullScreen-box {
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;

      .fullScreen-box_spin {
        width: 100%;
        height: 100%;

        .${namespace}-spin-spinning {
          max-height: 100%;
        }

        & > .${namespace}-spin-container {
          width: 100%;
          height: 100%;
        }
      }
    }
  `
})
