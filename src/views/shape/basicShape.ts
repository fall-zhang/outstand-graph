import { Shape } from '@antv/x6'
import type { NodeView } from '@antv/x6'
/**
 * 
 * 
 * 
 */
const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    { id: 'left', group: 'left' },
    { id: 'top', group: 'top' },
    { id: 'right', group: 'right' },
    { id: 'bottom', group: 'bottom' },
  ]
}
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
    ports,
    ...configObj
  })
}
export function getDataQuadrangle(label?: string, config?: NodeView.Options) {
  let configObj = {}
  if (config && typeof config === 'object') {
    configObj = config
  }
  return new Shape.Polygon({
    width: 64,
    height: 40,
    attrs: {
      body: {
        refPoints: '10,0 40,0 30,20 0,20',
      },
    },
    label: label || '',
    zIndex: 2,
    ...configObj
  })
}

export default [
  getBasicCircle('连接'),
  getRoundRect('开始'),
  getOptionalRect('可选过程'),
  getBasicRect('过程'),
  getDataQuadrangle('数据'),
  getRhombic('决策')
]