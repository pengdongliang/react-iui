import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import React from 'react'

import { AntdConfigProvider } from '../context/antd-config'
import { ConfigProvider } from '../context/config'
import { PaletteTree } from './palette'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path="/ConfigProvider">
        <ConfigProvider />
      </ComponentPreview>
      <ComponentPreview path="/AntdConfigProvider">
        <AntdConfigProvider />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
