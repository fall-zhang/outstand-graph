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
  // {
  //   keyId: 'polarIndex',
  //   keyName: '极坐标系索引',
  //   setters: ['number'],
  //   default: '',
  // },
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
  {
    keyId: 'boundaryGap',
    keyName: '数据轴类型',
    tips: '默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。',
    setters: ['switch', 'array'],
    default: 'category',
  },
  setting.max,
  setting.min,
  setting.scale,
  setting.splitNumber,
  setting.minInterval,
  setting.maxInterval,
  setting.interval,
  setting.logBase,
  setting.triggerEvent,
  {
    keyId: 'axisLine',
    keyName: '轴线相关设置',
    tips: '设置成 true 后坐标刻度不会强制包含零刻度。',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示坐标轴',
        setters: ['switch'],
        default: true,
      },
    ]
  },
  {
    keyId: 'axisTick',
    keyName: '刻度设置',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示刻度',
        setters: ['switch'],
        default: true,
      },
    ]
  },
  {
    keyId: 'minorTick',
    keyName: '次刻度设置',
    tips: '当然，前提是有次刻度',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示刻度',
        setters: ['switch'],
        default: true,
      },
    ]
  },
  {
    keyId: 'axisLabel',
    keyName: '坐标轴刻度标签',
    tips: '前提是有坐标轴刻度标签',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示刻度标签',
        setters: ['switch'],
        default: true,
      },
    ]
  },
  {
    keyId: 'splitLine',
    keyName: '分割提示线',
    tips: 'grid 区域中的分隔线（坐标直线轴）',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示刻度标签',
        setters: ['switch'],
        default: true,
      },
    ]
  },
  {
    keyId: 'minorSplitLine',
    keyName: '次分割提示线',
    tips: 'grid 区域中的分隔线（坐标直线轴）',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示次刻度标签',
        setters: ['switch'],
        default: false,
      },
    ]
  },
  {
    keyId: 'splitArea',
    keyName: '分隔区域颜色',
    tips: 'grid 区域中的分隔各个区域的颜色（坐标直线轴分割）',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示分隔区域颜色',
        setters: ['switch'],
        default: false,
      },
    ]
  },
  {
    keyId: 'data',
    keyName: '极坐标数据',
    setters: ['json'],
    default: [],
  },
  // {
  //   keyId: 'axisPointer',
  //   keyName: '坐标轴指示器',
  //   setters: ['json'],
  //   default: [],
  // },
  setting.animation,
  setting.animationThreshold,
  setting.animationDuration,
  setting.animationEasing,
  setting.animationDelay,
  setting.animationDurationUpdate,
  setting.animationEasingUpdate,
  setting.animationDelayUpdate,
  setting.zlevel,
  setting.z,
]

export default angleAxis