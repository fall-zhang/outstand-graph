
import xAxisConfig from './charts-config/xAxis'
import titleConfig from './charts-config/title'
import yAxisConfig from './charts-config/yAxis'
import legendConfig from './charts-config/legend'
import tooltipConfig from './charts-config/tooltip'
import radiusAxis from './charts-config/radiusAxis'
import { textStyle } from './charts-config/dictionary/commonOption'

import type { EchartsOption } from './chart-config.d.ts'
import polar from './charts-config/polar'
import axisPointer from './charts-config/axisPointer'
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
  {
    keyId: 'polar',
    tips: '极坐标需要搭配极坐标系角度轴（angleAxis）使用，极坐标径向轴（radiusAxis）',
    keyName: '极坐标',
    setters: ['array'],
    default: {},
    children: polar
  },
  {
    keyId: 'radiusAxis',
    keyName: '极坐标径向轴',
    tips: '是半径所在的轴，可以配置半径轴上相关内容',
    setters: ['array'],
    default: {},
    children: radiusAxis
  },
  {
    keyId: 'angleAxis',
    keyName: '极坐标角度轴',
    tips: '角度轴是外侧从 0 到 360° 的轴，可以配置轴线相关内容',
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
    setters: ['object'],
    default: {},
    children: tooltipConfig
  },
  {
    keyId: 'axisPointer',
    keyName: '坐标轴指示器',
    setters: ['object'],
    default: {},
    children: axisPointer
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