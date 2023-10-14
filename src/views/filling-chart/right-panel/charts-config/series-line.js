// import { seriesType } from './dictionary/common-series.js'
const seriesType = [
  { label: '柱状图', value: 'bar' },
  { label: '折线图', value: 'line' },
  { label: '饼图', value: 'pie' }
]

export default [{
  keyId: 'type',
  keyName: '图表类型',
  setters: ['select'],
  optionalValue: seriesType,
  default: 'line',
  type: 'object'
}, {
  keyId: 'name',
  keyName: '名称',
  tips: '用于提示（tooltip）和图例（legend）的显示',
  setters: ['input'],
  default: '',
  type: 'object'
}, {
  keyId: 'data',
  keyName: '数据',
  setters: ['json'],
  default: [],
  type: 'object'
},]