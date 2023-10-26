/**
 * 通过 key 的方式提供单个属性的配置
 */

import type { EchartsOption } from '../../chart-config.d.ts'

const commonProperty: Record<string, EchartsOption> = {
  backgroundColor: {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'transparent'
  },
  shadowColor: {
    keyId: 'shadowColor',
    keyName: '阴影颜色',
    setters: ['input', 'color'],
    default: 0
  },
  shadowBlur: {
    keyId: 'shadowBlur',
    keyName: '阴影虚化',
    setters: ['number', 'slider'],
    default: 0
  },
  shadowOffsetX: {
    keyId: 'shadowOffsetX',
    keyName: '阴影X轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
  shadowOffsetY: {
    keyId: 'shadowOffsetY',
    keyName: '阴影Y轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
  opacity: {
    keyId: 'opacity',
    keyName: '透明度',
    setters: ['number', 'slider'],
    default: 0
  },
  show: {
    keyId: 'show',
    keyName: '展示',
    setters: ['switch'],
    default: true,
  },
  width: {
    keyId: 'width',
    keyName: '宽度',
    setters: ['input', 'number'],
    default: 'auto',
  },
  height: {
    keyId: 'height',
    keyName: '高度',
    setters: ['input', 'number'],
    default: 'auto',
  },
  borderDashOffset: {
    keyId: 'borderDashOffset',
    keyName: '虚线偏移',
    setters: ['number'],
    default: 'inherit'
  },
  borderColor: {
    keyId: 'borderColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'transparent'
  },
  borderWidth: {
    keyId: 'borderWidth',
    keyName: '边框宽度',
    setters: ['number', 'input'],
    default: 0
  },
  borderRadius: {
    keyId: 'borderRadius',
    keyName: '圆角半径',
    setters: ['slider', 'number'],
    default: 0
  },
  dashOffset: {
    keyId: 'dashOffset',
    keyName: '虚线偏移',
    setters: ['number', 'input'],
    default: 0
  },
  color: {
    keyId: 'color',
    keyName: '文字颜色',
    setters: ['color', 'input'],
    default: '',
  },
  fontStyle: {
    keyId: 'fontStyle',
    keyName: '文字风格',
    setters: ['select'],
    optionalValue: [
      { label: '正常', value: 'normal' },
      { label: '斜体', value: 'italic' },
      // { label: '强制倾斜', value: 'oblique' },
    ],
    default: 'normal',
  },
  fontWeight: {
    keyId: 'fontWeight',
    keyName: '字体粗细',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '正常', value: 'normal' },
      { label: '加粗', value: 'bold' },
      { label: '更粗', value: 'bolder' },
      { label: '更细', value: 'lighter' },
    ],
    default: 'normal',
  },
  fontFamily: {
    keyId: 'fontFamily',
    keyName: '字体类型',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'serif', value: 'serif' },
      { label: 'monospace', value: 'monospace' },
      { label: 'Arial', value: 'Arial' },
      { label: 'Courier New', value: 'Courier New' },
      { label: 'Microsoft YaHei', value: 'Microsoft YaHei' },
    ],
    default: 'sans-serif',
  },
  fontSize: {
    keyId: 'fontSize',
    keyName: '字体大小',
    setters: ['slider', 'number'],
    default: 12,
  },
  animation: {
    keyId: 'animation',
    keyName: '是否开启动画',
    setters: ['switch'],
    default: true
  },
  animationThreshold: {
    keyId: 'animationThreshold',
    keyName: '开启动画阈值',
    setters: ['number'],
    default: 2000
  },
  animationDuration: {
    keyId: 'animationDuration',
    keyName: '初始动画时长',
    setters: ['number'],
    default: 1000
  },
  animationEasing: {
    keyId: 'animationEasing',
    keyName: '动画效果',
    setters: ['select'],
    optionalValue: [
      { label: 'linear', value: 'linear' },
      { label: 'quadraticIn', value: 'quadraticIn' },
      { label: 'quadraticOut', value: 'quadraticOut' },
      { label: 'quadraticInOut', value: 'quadraticInOut' },
    ],
    default: 'cubicOut'
  },
  animationDelay: {
    keyId: 'animationDelay',
    keyName: '动画延迟',
    setters: ['number', 'function'],
    default: 0
  },
  animationDurationUpdate: {
    keyId: 'animationDurationUpdate',
    tips: '数据更新的动画时长',
    keyName: '数据动画时长',
    setters: ['number', 'function'],
    default: 300
  },
  animationEasingUpdate: {
    keyId: 'animationEasingUpdate',
    tips: '数据更新的动画效果',
    keyName: '数据动画效果',
    setters: ['select'],
    optionalValue: [
      { label: 'linear', value: 'linear' },
      { label: 'quadraticIn', value: 'quadraticIn' },
      { label: 'quadraticOut', value: 'quadraticOut' },
      { label: 'quadraticInOut', value: 'quadraticInOut' },
    ],
    default: 'cubicInOut'
  },
  animationDelayUpdate: {
    keyId: 'animationDelayUpdate',
    tips: '数据更新动画的延迟效果',
    keyName: '数据动画延迟',
    setters: ['number'],
    default: 0
  },
  zlevel: {
    keyId: 'zlevel',
    keyName: '图层层级',
    setters: ['number'],
    default: 0
  },
  z: {
    keyId: 'z',
    keyName: '图形层级',
    setters: ['number'],
    default: 0
  },
  left: {
    keyId: 'left',
    keyName: '左侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '左侧对齐', value: 'left' },
      { label: '中心对齐', value: 'center' },
      { label: '右侧对齐', value: 'right' },
    ],
    default: 'auto'
  },
  top: {
    keyId: 'top',
    keyName: '上侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '顶部对齐', value: 'top' },
      { label: '中心对齐', value: 'middle' },
      { label: '底部对齐', value: 'bottom' },
    ],
    default: 'auto'
  },
  right: {
    keyId: 'right',
    keyName: '右侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 'auto'
  },
  bottom: {
    keyId: 'bottom',
    keyName: '下侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 'auto'
  },
  silent: {
    keyId: 'silent',
    keyName: '静默模式',
    tips: '图形是否不响应和触发鼠标事件',
    setters: ['switch'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 'auto'
  },
  splitNumber: {
    keyId: 'splitNumber',
    keyName: '分割段数',
    tips: '表示大致分割段数，类目轴无效',
    setters: ['number'],
    default: 5
  },
  minInterval: {
    keyId: 'minInterval',
    keyName: '坐标轴最小间隔',
    tips: '可以设置成 1 保证坐标轴分割刻度显示成整数',
    setters: ['number'],
    default: undefined
  },
  maxInterval: {
    keyId: 'maxInterval',
    keyName: '坐标轴最大间隔',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  interval: {
    keyId: 'interval',
    keyName: '强制设置分隔',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  logBase: {
    keyId: 'logBase',
    keyName: '对数轴的底数',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  triggerEvent: {
    keyId: 'triggerEvent',
    keyName: '标签事件响应',
    tips: '坐标轴的标签是否响应和触发鼠标事件，默认不响应。',
    setters: ['switch'],
    default: false
  },
}

export default commonProperty