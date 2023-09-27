import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from 'antd'

import { EntityButtonItemType, TextButtonItemType } from './config'

export const StyledButton = styled(Button)<{
  config: EntityButtonItemType<string> & TextButtonItemType<string>
}>(({ theme, config }) => {
  if (!config) return css``

  const { namespace = 'ant' } = theme
  const { background, border, color, hoverBackground, activeBackground, hoverColor, activeColor } = config

  return css`
    &:not(.${namespace}-btn-link),
    &:not(.${namespace}-btn-text) {
      &:not(:disabled) {
        background-color: ${background};
        border-color: ${border} !important;
        color: ${color} !important;

        &:hover,
        &:focus {
          background-color: ${hoverBackground};
        }

        &:active,
        &.active {
          background-color: ${activeBackground};
        }
      }
    }

    &.${namespace}-btn-link, &.${namespace}-btn-text {
      &:not(:disabled) {
        color: ${color};

        &:hover,
        &:focus {
          color: ${hoverColor};
        }

        &:active,
        &.active {
          color: ${activeColor};
        }
      }
    }
  `
})
