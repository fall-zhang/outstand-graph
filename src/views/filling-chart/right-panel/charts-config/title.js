import { richTextChildren, positionConfig } from './dictionary/common-option'
export default [
  {
    keyId: 'show',
    keyName: '显示标题',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'text',
    keyName: '标题文本',
    tips: '使用 text 时可以换行',
    setters: ['input', 'textarea'],
    default: ''
  },
  {
    keyId: 'link',
    keyName: '跳转链接',
    setters: ['input'],
    default: ''
  },
  {
    keyId: 'target',
    keyName: '链接跳转方式',
    setters: ['select'],
    optionalValue: [
      { label: '当前窗口', value: 'self' },
      { label: '新的窗口', value: 'blank' },
    ],
    default: 'self'
  },
  {
    keyId: 'textStyle',
    keyName: '标题字体样式',
    setters: ['object'],
    default: {},
    children: richTextChildren,
  },
  {
    keyId: 'subtext',
    keyName: '副标题',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'sublink',
    keyName: '副标题跳转',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'subtarget',
    keyName: '副标题跳转方式',
    setters: ['select'],
    optionalValue: [
      { label: '当前窗口', value: 'self' },
      { label: '新的窗口', value: 'blank' },
    ],
    default: 'self',
  },
  {
    keyId: 'subtextStyle',
    keyName: '副标题字体样式',
    setters: ['object'],
    default: {},
    children: richTextChildren,
  },
  {
    keyId: 'textAlign',
    keyName: '水平对齐方式',
    setters: ['select'],
    default: 'auto',
    optionalValue: [
      { label: '自动', value: 'auto' },
      { label: '左侧', value: 'left' },
      { label: '右侧', value: 'right' },
      { label: '中心', value: 'center' },
    ]
  },
  {
    keyId: 'textVerticalAlign',
    keyName: '垂直对齐方式',
    setters: ['select'],
    default: 'auto',
    optionalValue: [
      { label: '自动', value: 'auto' },
      { label: '顶部', value: 'top' },
      { label: '底部', value: 'bottom' },
      { label: '中心', value: 'center' },
    ]
  },
  {
    keyId: 'triggerEvent',
    keyName: '是否触发事件',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'padding',
    keyName: '内边距',
    tips: '同 CSS 的 padding，可设置为数组',
    setters: ['number', 'json', 'slider'],
    default: 5
  },
  {
    keyId: 'itemGap',
    keyName: '主副标题间距',
    setters: ['number', 'json', 'slider'],
    default: 10
  },
  // {
  //   keyId: "zlevel",
  //   tips: "用于 canvas 分级，会将变化频繁的组件设置为单独的 zlevel",
  //   keyName: "图形层级",
  //   setters: ['number', 'slider'],
  //   default: 1
  // },
  // {
  //   keyId: "z",
  //   tips: "单个 canvas 的 z 表示他的层级，比 zlevel 优先级更低，且不会创建新 canvas",
  //   keyName: "图形层级",
  //   setters: ['number', 'slider'],
  //   default: 1
  // },
  ...positionConfig,
  {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['input', 'color'],
    default: 'transparent'
  },
  {
    keyId: 'borderColor',
    keyName: '边框背景颜色',
    setters: ['input', 'color'],
    default: '#ccc'
  },
  {
    keyId: 'borderWidth',
    keyName: '边框线宽',
    setters: ['input', 'slider'],
    default: 0
  },
  {
    keyId: 'borderRadius',
    keyName: '圆角半径',
    setters: ['input', 'color'],
    default: 0
  },
  {
    keyId: 'shadowColor',
    keyName: '阴影颜色',
    setters: ['input', 'color'],
    default: 0
  },
  {
    keyId: 'shadowBlur',
    keyName: '阴影虚化',
    setters: ['number', 'slider'],
    default: 0
  },
  {
    keyId: 'shadowOffsetX',
    keyName: '阴影X轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
  {
    keyId: 'shadowOffsetY',
    keyName: '阴影Y轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
]