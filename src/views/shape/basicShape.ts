import { Shape } from '@antv/x6'
import type { NodeView } from '@antv/x6'
export function getBasicRect(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Rect({
    width: 64,
    height: 40,
    label: label,
    zIndex: 2,
    ...configObj
  })
}
export function getBasicSquare(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Rect({
    width: 40,
    height: 40,
    label: label,
    zIndex: 2,
    ...configObj
  })
}

export function getBasicCircle(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Circle({
    width: 40,
    height: 40,
    label: label || '',
    zIndex: 2,
    ...configObj
  })
}
export function getRoundRect(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Rect({
    width: 64,
    height: 40,
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
    label: label || '',
    zIndex: 2,
    ...configObj
  })
}
export function getOptionalRect(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Rect({
    width: 64,
    height: 40,
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
    label: label || '',
    zIndex: 2,
    ...configObj
  })
}
// 生成菱形
export function getRhombic(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Polygon({
    width: 64,
    height: 40,
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
    label: label || '',
    zIndex: 2,
    ...configObj
  })
}

export default [getBasicCircle(), getRoundRect(), getOptionalRect(), getBasicRect(), getBasicSquare(), getRhombic(),]