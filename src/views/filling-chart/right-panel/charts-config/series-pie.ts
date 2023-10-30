// import { seriesType } from './dictionary/common-series'
import type { EchartsOption } from '../chart-config.d.ts'
// 图表类型的配置
const seriesType = [
  { label: '柱状图', value: 'bar' },
  { label: '折线图', value: 'line' },
  { label: '饼图', value: 'pie' }
]

const seriesPie: EchartsOption[] = [{
  keyId: 'type',
  keyName: '图表类型',
  setters: ['select'],
  optionalValue: seriesType,
  default: 'pie',
}, {
  keyId: 'name',
  keyName: '名称',
  tips: '用于提示（tooltip）和图例（legend）的显示',
  setters: ['input'],
  default: true,
}, {
  keyId: 'data',
  keyName: '数据',
  setters: ['json'],
  default: true,
},]
export default seriesPie