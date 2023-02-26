import { Cell, CellView, Shape } from '@antv/x6'
import type { Node } from '@antv/x6'
import { Base } from '@antv/x6/lib/shape/base'

export const startShape = rectBaseTheme('开始', {
  attrs: {
    body: {
      rx: 20,
      ry: 26,
    }
  }
})


function rectBaseTheme(label?: string, config?: Node.Metadata) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Rect({
    x: 40,
    y: 40,
    width: 64,
    height: 40,
    label: label,
    zIndex: 2,
    ...configObj
  })
}
