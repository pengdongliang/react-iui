import { Category, Component, Palette, Variant } from '@react-buddy/ide-toolbox'
import AntdPalette from '@react-buddy/palette-antd'
import React, { Fragment } from 'react'

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
    <AntdPalette />
  </Palette>
)

export function ExampleLoaderComponent() {
  return <>Loading...</>
}
