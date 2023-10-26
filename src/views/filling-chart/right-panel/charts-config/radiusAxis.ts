/**
 * 极坐标系（polar）的径向轴
 */

import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'
import { textStyle } from './dictionary/commonOption.js'
const radiusAxis: EchartsOption[] = [
  // {
  //   keyId: 'id',
  //   keyName: 'ID',
  //   setters: ['input'],
  //   default: '',
  // },
  {
    keyId: 'polarIndex',
    keyName: '极坐标索引',
    tips: '径向轴所在的极坐标系的索引',
    setters: ['number'],
    default: true,
  },
  {
    keyId: 'type',
    keyName: '坐标轴类型',
    setters: ['select'],
    optionalValue: [
      { label: '数值轴', value: 'value' },
      { label: '类目轴', value: 'category' },
      { label: '时间轴', value: 'time' },
      { label: '对数轴', value: 'log' },
    ],
    default: 'value',
  },
  {
    keyId: 'name',
    keyName: '坐标轴名称',
    setters: ['select'],
    default: 'value',
  },
  {
    keyId: 'nameTextStyle',
    keyName: '坐标轴名称样式',
    setters: ['object'],
    default: {},
    children: textStyle.children
  },
  {
    keyId: 'nameGap',
    keyName: '名称与轴线距离',
    setters: ['slider', 'number'],
    default: 15,
  },
  {
    keyId: 'nameRotate',
    keyName: '名称旋转角度',
    setters: ['slider', 'number'],
    default: 0,
  },
  {
    keyId: 'inverse',
    keyName: '坐标轴反向',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'boundaryGap',
    keyName: '坐标轴留白',
    setters: ['switch', 'array'],
    default: 0,
  },
  {
    keyId: 'min',
    keyName: '刻度最小值',
    setters: ['switch', 'array'],
    default: 0,
  },
  {
    keyId: 'max',
    keyName: '刻度最大值',
    setters: ['switch', 'array'],
    default: 0,
  },
  {
    keyId: 'scale',
    keyName: '脱离 0 值比例',
    tips: '设置成 true 后坐标刻度不会强制包含零刻度。',
    setters: ['switch', 'array'],
    default: false
  },
  setting.splitNumber,
  setting.minInterval,
  setting.maxInterval,
  setting.interval,
  setting.logBase,
  setting.silent,
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
    tips: 'grid 区域中的分隔线。',
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
    tips: 'grid 区域中的分隔线。',
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
    tips: 'grid 区域中的分隔各个区域的颜色。',
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

export default radiusAxis