import { Shape } from '@antv/x6'
import type { NodeView } from '@antv/x6'
export function getSpecialCircle(label: string = '', config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Circle({
    x: 500, // Number，必选，节点位置的 x 值
    y: 500, // Number，必选，节点位置的 y 值
    label: label,
    zIndex: 2,
    ...configObj
  })
}