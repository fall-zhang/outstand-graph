// import { seriesType } from "./common-series"
export const textStyle = {
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
export const richTextChildren = textStyle.children.concat([
  {
    keyId: 'rich',
    keyName: '富文本',
    tips: '<a href="https://echarts.apache.org/zh/option.html#title.textStyle.rich" target="blank">富文本介绍（点击进入）</a>',
    setters: ['json'],
    default: '',
  },
])

export const positionConfig = [
  {
    keyId: 'left',
    keyName: '左侧距离',
    setters: ['number', 'select'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '左侧对齐', value: 'left' },
      { label: '中心对齐', value: 'center' },
      { label: '右侧对齐', value: 'right' },
    ],
    default: 0
  },
  {
    keyId: 'top',
    keyName: '上侧距离',
    setters: ['number', 'select'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '顶部对齐', value: 'top' },
      { label: '中心对齐', value: 'middle' },
      { label: '底部对齐', value: 'bottom' },
    ],
    default: 0
  },
  {
    keyId: 'right',
    keyName: '右侧距离',
    setters: ['number', 'select'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 0
  },
  {
    keyId: 'bottom',
    keyName: '下侧距离',
    setters: ['number', 'select'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 0
  },
]

// 有 Label 属性时的配置
export const labelConfig = [
  // show , precision , formatter , margin , color , fontStyle , fontWeight , fontFamily , fontSize , lineHeight , width , height , textBorderColor , textBorderWidth , textBorderType , textBorderDashOffset , textShadowColor , textShadowBlur , textShadowOffsetX , textShadowOffsetY , overflow , ellipsis , padding , backgroundColor , borderColor , borderWidth , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY
]

export const lineStyleConfig = [
  // color , width , type , dashOffset , cap , join , miterLimit , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity
]
export const shadowStyleConfig = [
  // color , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity
]
export const crossStyleConfig = [
  // color , width , type , dashOffset , cap , join , miterLimit , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity
]