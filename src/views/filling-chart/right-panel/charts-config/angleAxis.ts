/**
 * 极坐标系（polar）的角度轴
 */

import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'

const angleAxis: EchartsOption[] = [
  // {
  //   keyId: 'id',
  //   keyName: 'ID',
  //   setters: ['input'],
  //   default: '',
  // },
  {
    keyId: 'polarIndex',
    keyName: '极坐标系索引',
    setters: ['number'],
    default: '',
  },
  {
    keyId: 'startAngle',
    keyName: '起始刻度角度',
    setters: ['number', 'slider'],
    default: 90,
  },
  {
    keyId: 'clockwise',
    keyName: '顺时针',
    tips: '刻度增长是否按顺时针，默认顺时针。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'type',
    keyName: '坐标轴类型',
    tips: '刻度增长是否按顺时针，默认顺时针。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'boundaryGap',
    keyName: '坐标轴类型',
    tips: '刻度增长是否按顺时针，默认顺时针。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'type',
    keyName: '数据轴类型',
    setters: ['select'],
    optionalValue: [
      { label: '数据轴', value: 'value' },
      { label: '类目轴', value: 'category' },
      { label: '时间轴', value: 'time' },
      { label: '对数轴', value: 'log' },
    ],
    default: 'category',
  },
]

export default angleAxis