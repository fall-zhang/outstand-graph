import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'
const grid: Array<EchartsOption> = [
  {
    keyId: 'id',
    keyName: '组件 ID',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'show',
    keyName: '坐标系网格',
    tips: '显示直角坐标系网格',
    setters: ['switch'],
    default: true,
  },
  setting.zlevel,
  setting.z,
  {
    keyId: 'left',
    keyName: '左侧距离',
    setters: ['number', 'select', 'input'],
    optionalValue: [
      { label: '左侧', value: 'left' },
      { label: '中心', value: 'center' },
      { label: '右侧', value: 'right' }
    ],
    default: '10%',
  },
  {
    keyId: 'top',
    keyName: '顶部距离',
    setters: ['slider', 'input', 'select'],
    optionalValue: [
      { label: '上侧', value: 'top' },
      { label: '中心', value: 'middle' },
      { label: '下侧', value: 'bottom' }
    ],
    default: '60',
  },
  {
    keyId: 'bottom',
    keyName: '顶部距离',
    setters: ['number', 'input'],
    optionalValue: [
      { label: '上侧', value: 'top' },
      { label: '中心', value: 'middle' },
      { label: '下侧', value: 'bottom' }
    ],
    default: '60',
  },
  {
    keyId: 'right',
    keyName: '顶部距离',
    setters: ['number', 'input'],
    default: '10%',
  },
  {
    keyId: 'width',
    keyName: '宽度',
    setters: ['number', 'input'],
    default: 'auto',
  },
  {
    keyId: 'height',
    keyName: '高度',
    setters: ['number', 'input'],
    default: 'auto',
  },
  {
    keyId: 'containLabel',
    keyName: '包含刻度标签',
    tips: 'grid 区域是否包含坐标轴的刻度标签。true，经常用于防止标签溢出的场景',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'transparent',
  },
  setting.borderColor,
  setting.borderWidth,
  setting.shadowBlur,
  setting.shadowColor,
  setting.shadowOffsetX,
  setting.shadowOffsetY,
  {
    keyId: 'tooltips',
    keyName: '提示信息',
    setters: ['object'],
    children: [{
      keyId: 'show',
      keyName: '是否展示',
      setters: ['switch'],
      default: false
    }],
    default: {},
  },
]

export default grid