import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Styled = styled.div(() => {
  return css`
    &.fullScreen-toolsBar_root {
      position: absolute;
      bottom: 40px;
      right: 10px;
      z-index: 9;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      border-radius: 2px;
      overflow: hidden;

      &.is-map {
        bottom: 120px;
      }

      & > .fullScreen-toolsBar_icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;

        svg {
          width: 30px;
          height: 30px;
          fill: #666666;
        }
      }
    }
  `
})

export default Styled
