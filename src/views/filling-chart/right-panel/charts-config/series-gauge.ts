// import { seriesType } from './dictionary/common-series.js'
import setting from './dictionary/commonProperty'
import type { EchartsOption } from '../chart-config.d.ts'
const seriesBar: EchartsOption[] = [
  {
    keyId: 'id',
    keyName: 'ID',
    tips: '指定则可用于在 option 或者 API 中引用组件。',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'name',
    keyName: '名称',
    tips: '用于提示（tooltip）和图例（legend）的显示',
    setters: ['input'],
    default: '',
  },
  {
    // 应该为数据添加新的内容
    keyId: 'data',
    keyName: '数据',
    setters: ['json', 'object'],
    // fillValue: [
    //   213, 461, 124, 342, 197
    // ],
    default: `[]`,
  },
  setting.colorBy,
  setting.center,
  setting.legendHoverLink,
  {
    keyId: 'startAngle',
    keyName: '初始角度',
    setters: ['number', 'slider'],
    default: 225,
  },
  {
    keyId: 'endAngle',
    keyName: '初始角度',
    setters: ['number', 'slider'],
    default: -45,
  },
  {
    keyId: 'min',
    keyName: '最小数据值',
    setters: ['number', 'select', 'function'],
    default: 0
  },
  {
    keyId: 'min',
    keyName: '最大数据值',
    setters: ['number', 'select', 'function'],
    default: 0
  },
  {
    keyId: 'splitNumber',
    keyName: '分割段数',
    tips: '仪表盘刻度的分割段数，类目轴无效',
    setters: ['number'],
    default: 10
  },
  {
    keyId: 'axisLine',
    keyName: '仪表盘轴线',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '展示坐标轴',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'progress',
    keyName: '当前进度',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '展示坐标轴',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'splitLine',
    keyName: '分隔线样式',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '展示标签',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'axisTick',
    keyName: '坐标刻度',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示刻度',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'axisLabel',
    keyName: '刻度标签',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示刻度',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'pointer',
    keyName: '仪表盘指针',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示刻度',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'anchor',
    keyName: '指针固定点',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示刻度',
        setters: ['switch'],
        default: false,
      },
    ],
    default: {},
  },
  {
    keyId: 'itemStyle',
    keyName: '仪表盘样式',
    setters: ['object'],
    children: [
      {
        keyId: 'color',
        keyName: '显示端点标签',
        setters: ['color', 'input'],
        default: ''
      }
    ],
    default: {},
  },
  {
    keyId: 'emphasis',
    keyName: '强调样式',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'title',
    keyName: '仪表盘标题',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'detail',
    keyName: '仪表盘详情',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'markPoint',
    keyName: '图表标注',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'markLine',
    keyName: '图表标线',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'markArea',
    keyName: '图表标域',
    tips: '常用于标记图表中某个范围的数据，例如标出某段时间投放了广告。',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '关闭强调样式',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  setting.z,
  setting.zlevel,
  setting.silent,
  setting.animation,
  setting.animationThreshold,
  setting.animationDuration,
  setting.animationEasing,
  setting.animationDelay,
  setting.animationDelayUpdate,
  setting.animationDurationUpdate,
  setting.animationEasingUpdate,
  // {
  //   keyId: 'tooltip',
  //   keyName: '提示设置',
  //   tips: '系列 tooltip 设定',
  //   setters: ['object'],
  //   children: [
  //     {
  //       keyId: 'position',
  //       keyName: '是否开启',
  //       setters: ['select'],
  //       optionalValue: [
  //         { label: 'auto', value: 'auto' }
  //       ],
  //       tips: '图形是否不响应和触发鼠标事件',
  //       default: false
  //     }
  //   ],
  //   default: '',
  // },
]

export default seriesBar