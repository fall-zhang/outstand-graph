
/**
 * 用于定义一些经常出现的大对象，类似于
 * tooltip、textStyle
 */

import type { EchartsOption } from '../../chart-config.d.ts'

export const textStyle: EchartsOption = {
  keyId: 'textStyle',
  keyName: '字体样式',
  setters: ['object'],
  children: [{
    keyId: 'color',
    keyName: '文字颜色',
    setters: ['color'],
    default: ''
  },
  {
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
  {
    keyId: 'fontWeight',
    keyName: '字体粗细',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '正常', value: 'normal' },
      { label: '加粗', value: 'bold' },
      { label: '粗', value: 'bolder' },
      { label: '细体', value: 'lighter' },
    ],
    default: 'normal',
  },
  // {
  //   keyId: "fontFamily",
  //   keyName: "文字字体",
  //   setters: ['select'],
  //   optionalValue: [
  //     { label: '细体', value: 'lighter' },
  //   ],
  //   default: 'normal',
  // },
  {
    keyId: 'lineHeight',
    keyName: '行高',
    setters: ['number'],
    default: undefined,
  },
  {
    keyId: 'textBorderColor',
    keyName: '文字描边颜色',
    setters: ['color'],
    default: undefined,
  },
  {
    keyId: 'textBorderWidth',
    keyName: '文字描边宽度',
    setters: ['number'],
    default: undefined,
  },
  {
    keyId: 'textBorderType',
    keyName: '文字描边类型',
    tips: '可以设置为数组，实现更灵活的虚线',
    setters: ['select', 'json'],
    optionalValue: [
      { label: '实线', value: 'solid' },
      { label: '虚线', value: 'dashed' },
      { label: '点', value: 'dotted' },
    ],
    default: 'solid',
  },
  {
    keyId: 'textBorderDashOffset',
    tips: '搭配文字描边（textBorderType）的数组，进行设置偏移',
    keyName: '文字描边偏移',
    setters: ['number'],
    default: undefined,
  },
  {
    keyId: 'textShadowColor',
    keyName: '文字阴影颜色',
    setters: ['color'],
    default: undefined,
  },
  {
    keyId: 'textShadowBlur',
    keyName: '文字阴影模糊',
    setters: ['number'],
    default: undefined,
  },
  {
    keyId: 'textShadowOffsetX',
    keyName: '文字阴影偏移',
    tips: 'x 轴方向偏移',
    setters: ['slider'],
    default: undefined,
  },
  {
    keyId: 'textShadowOffsetY',
    keyName: '文字阴影偏移',
    tips: 'y 轴方向偏移',
    setters: ['slider'],
    default: undefined,
  },
  {
    keyId: 'overflow',
    keyName: '文字溢出',
    tips: '配置 width 时有效,强制换行包括英文内容',
    setters: ['select'],
    optionalValue: [
      { label: '截断', value: 'truncate' },
      { label: '换行', value: 'break' },
      { label: '强制换行', value: 'breakAll' }
    ],
    default: 'none',
  },
  {
    keyId: 'ellipsis',
    keyName: '溢出文本',
    tips: '溢出时的文本',
    setters: ['input'],
    default: '...',
  },
  ],
  default: {}
}


// tooltip 的配置
export const tooltip: EchartsOption = {
  keyId: 'tooltip',
  keyName: '提示信息',
  setters: ['object'],
  children: []
}

export const labelConfig: EchartsOption = {
  keyId: 'tooltip',
  keyName: '提示信息',
  setters: ['object'],
  children: []
}

export const lineStyleConfig: EchartsOption = {
  keyId: 'tooltip',
  keyName: '提示信息',
  setters: ['object'],
  children: []
}

export const crossStyleConfig: EchartsOption = {
  keyId: 'tooltip',
  keyName: '提示信息',
  setters: ['object'],
  children: []
}