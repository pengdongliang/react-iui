import { BaseThemeProps } from '@emotion/react'
import { theme } from 'antd'
import merge from 'lodash/merge'

const { getDesignToken } = theme
export const antdDefaultToken = getDesignToken()

/**
 * 基础主题token, antd + emotion
 */
export const baseTheme: BaseThemeProps = {
  namespace: 'ocloud',
  breakPoint: {
    xxs: 320,
    xs: 480,
    s: 640,
    sm: 768,
    m: 992,
    l: 1024,
    lg: 1200,
    xl: 1440,
    xxl: 1600,
    xxxl: 1920,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    primary: '#00A9AF',
  },
  antdTheme: merge(antdDefaultToken, {
    token: {
      colorPrimary: '#30b8bd',
      fontFamily: 'Microsoft YaHei,Arial',
      controlHeight: 34,
      padding: 16,
      paddingSM: 13,
      paddingXS: 8,
      paddingXXS: 4,
      paddingMD: 20,
      paddingLG: 24,
      paddingXL: 28,
      paddingContentHorizontal: 14,
      margin: 16,
      marginSM: 12,
      marginXS: 8,
      marginXXS: 4,
      marginMD: 20,
      marginLG: 24,
      marginXL: 28,
      marginXXL: 32,
      sizeStep: 4,
      borderRadius: 4,
      colorBorder: '#D1D1D1',
      colorBgContainer: '#ffffff',
      colorBgElevated: '#ffffff',
      colorBgLayout: '#F2F6FA',
      colorTextBase: '#221f1f',
      colorTextPlaceholder: '#B6B6B6',
      colorBgContainerDisabled: '#EDEDED',
      controlItemBgActive: '#F6F8FC',
      controlItemBgHover: '#F6F8FC',
      colorInfo: '#30b8bd',
      colorText: '#221F1F',
      colorLink: '#30b8bd',
      colorLinkActive: '#1e8e96',
      colorLinkHover: '#53c9c9',
      wireframe: false,
      borderRadiusLG: 4,
      borderRadiusSM: 0,
      boxShadowSecondary: '0 0 7px 0 rgba(126,136,155,0.2)',
    },
    components: {
      Layout: {
        colorBgHeader: '#30B8BD',
        colorBgBody: '#F2F6FA',
        colorBgTrigger: '#30B8BD',
      },
      Menu: {
        itemBg: '#ffffff',
        itemColor: '#221F1F',
        groupTitleColor: '#221F1F',
        itemHoverColor: '#2AB9C5',
        colorItemBgSelected: '#ffffff',
        subMenuItemBg: '#ffffff',
        horizontalItemHoverColor: '#2AB9C5',
        itemSelectedColor: '#30B8BD',
        horizontalItemSelectedColor: '#30B8BD',
        radiusItem: 0,
        dropdownWidth: 230,
        controlHeightLG: 40,
        subMenuItemBorderRadius: 4,
        itemHoverBg: 'rgba(48,184,189, 0.09)',
        itemActiveBg: 'rgba(48,184,189, 0.09)',
        fontSize: 14,
        margin: 26,
        padding: 30,
        itemMarginInline: 4,
      },
      Button: {
        colorBgTextActive: 'rgba(34, 31, 31, 0.15)',
        controlOutlineWidth: 2,
        paddingContentHorizontal: 21,
        colorPrimaryHover: '#00A9AF',
        colorTextDisabled: '#666666',
      },
      Input: {
        controlHeight: 34,
        colorText: '#221F1F',
        colorTextPlaceholder: '#BDBDBD',
        colorPrimaryHover: '#30B8BD',
        colorBgContainerDisabled: '#F8F8F8',
        paddingSM: 13,
      },
      Pagination: {
        colorBgTextActive: 'rgba(34, 31, 31, 0.15)',
        colorBgTextHover: 'rgba(48,184,189, 0.09)',
        margin: 20,
        fontWeightStrong: 400,
        controlHeight: 32,
      },
      Cascader: {
        controlWidth: 156,
        dropdownHeight: 180,
        colorText: '#333333',
        controlHeight: 30,
        controlInteractiveSize: 14,
        paddingSM: 10,
        controlItemWidth: 156,
        fontWeightStrong: 400,
      },
      Select: {
        controlHeight: 34,
        paddingSM: 13,
        controlItemBgHover: '#F6F8FC',
        controlItemBgActive: '#F6F8FC',
      },
      Checkbox: {
        borderRadiusSM: 4,
      },
      Radio: {
        colorBorder: '#E7E7E7',
      },
      Dropdown: {
        colorText: '#333333',
      },
      Modal: {
        fontSizeLG: 13,
        boxShadow: '0 0 7px 0 rgba(126,136,155,0.2)',
      },
      Mentions: {
        controlItemWidth: 156,
      },
      Table: {
        borderRadius: 0,
        borderRadiusLG: 0,
        colorFillSecondary: 'rgba(34, 31, 31, 0.06)',
        paddingContentVerticalLG: 12,
        padding: 12,
        colorTextHeading: '#333333',
        colorBorderSecondary: '#E7E7E7',
      },
      Tooltip: {
        colorBgDefault: '#FFBA00',
      },
      TreeSelect: {
        borderRadius: 0,
        paddingXS: 0,
      },
    },
  }),
}