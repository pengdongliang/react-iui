import { css } from '@emotion/react'
import styled, { type StyledComponent } from '@emotion/styled'

const Styled: StyledComponent<any> = styled.div(({ theme }) => {
  const { namespace } = theme

  return css`
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    & > .pagination-header {
      background-color: #fff;
      margin-bottom: 6px;

      & > .pagination-form_container {
        padding: 15px 20px 0;
        box-sizing: border-box;

        & > div {
          gap: 0 !important;

          & > div > .${namespace}-row {
            margin-left: -6px !important;
            margin-right: -6px !important;

            & > .${namespace}-col {
              margin-bottom: 15px;
              padding-left: 7px !important;
              padding-right: 7px !important;

              & > .${namespace}-space {
                gap: 14px !important;

                .advancedQuery {
                  z-index: 2;
                }
              }
            }
          }
        }

        .${namespace}-form-item {
          margin-bottom: 0;
        }
      }
    }

    & > .iPagination_content {
      flex: 1;
      height: 100%;
      overflow: hidden;
      padding: 14px 20px 8px;
      background-color: #fff;
    }

    & > .iPagination_pagination {
      padding: 8px 20px;
      text-align: right;
      background-color: #fff;

      &.${namespace}-pagination {
        .${namespace}-pagination-item {
          border-color: #bdbdbd;
        }

        .${namespace}-pagination-item-active {
          background-color: #30b8bd;
          border-color: #30b8bd;

          a {
            color: #fff;
          }
        }

        .${namespace}-pagination-prev, .${namespace}-pagination-next {
          .${namespace}-pagination-item-link {
            width: 100%;
            height: 100%;
            padding: 0;
            font-size: 12px;
            text-align: center;
            background-color: transparent;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            outline: none;
            transition: border 0.2s;
          }
        }
      }
    }
  `
})

export default Styled
