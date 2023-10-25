
import xAxisConfig from './charts-config/xAxis'
import titleConfig from './charts-config/title'
import yAxisConfig from './charts-config/yAxis'
import legendConfig from './charts-config/legend'
import tooltipConfig from './charts-config/tooltip'
import { textStyle } from './charts-config/dictionary/commonOption'

import type { EchartsOption } from './chart-config.d.ts'
const rightProperty: Array<EchartsOption> = [
  {
    keyId: 'xAxis',
    keyName: '横轴',
    setters: ['array'],
    default: {},
    children: xAxisConfig
  },
  {
    keyId: 'title',
    keyName: '标题',
    setters: ['array'],
    default: {},
    children: titleConfig
  },
  {
    keyId: 'yAxis',
    keyName: '纵轴',
    setters: ['array'],
    default: {},
    children: yAxisConfig
  },
  {
    keyId: 'legend',
    tips: '需要数据提供名称（name）属性',
    keyName: '图例',
    setters: ['array'],
    default: {},
    children: legendConfig
  },
  // {
  //   keyId: "darkMode",
  //   keyName: "黑暗模式",
  //   setters: ['switch'],
  //   default: false
  // },
  {
    keyId: 'color',
    keyName: '颜色列表',
    tips: '不同的 series 拥有不同的颜色',
    setters: ['json'],
    default: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  },
  {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: ''
  },
  {
    keyId: 'tooltip',
    keyName: '提示信息',
    setters: ['color', 'input'],
    default: {},
    children: tooltipConfig
  },
  textStyle,
  {
    keyId: 'animation',
    keyName: '动画',
    setters: ['switch'],
    default: true
  }
]
export default rightProperty