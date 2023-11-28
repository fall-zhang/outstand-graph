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
  {
    keyId: 'center',
    keyName: '中心坐标',
    tips: '第一项是横坐标，第二项是纵坐标',
    setters: ['array'],
    default: ['50%', '50%']
  },
  {
    keyId: 'radius',
    keyName: '旭日图半径',
    tips: '可以指定为数组，分别为内半径和外半径',
    setters: ['array', 'number', 'input'],
    default: [0, '75%']
  },
  {
    keyId: 'nodeClick',
    keyName: '点击行为',
    setters: ['select'],
    optionalValue: [
      { label: '点击节点设为根结点', value: 'rootToNode' },
      { label: '链接跳转', value: 'link' },
      { label: '无反应', value: false },
    ],
    default: 'zoomToNode',
  },
  {
    keyId: 'sort',
    keyName: '点击行为',
    setters: ['select'],
    optionalValue: [
      { label: '点击节点设为根结点', value: 'rootToNode' },
      { label: '链接跳转', value: 'link' },
      { label: '无反应', value: false },
    ],
    default: 'zoomToNode',
  },
  {
    keyId: 'renderLabelForZeroData',
    keyName: '无名称数据',
    tips: '如果数据没有 name，是否需要渲染文字。',
    setters: ['switch'],
    default: false,
  },
  setting.clockwise,
  setting.startAngle,
  {
    keyId: 'label',
    keyName: '文本标签',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示标签',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'labelLine',
    keyName: '视觉引导线',
    tips: '标签的视觉引导线配置',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示引导线',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'itemStyle',
    keyName: '图形样式',
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
    tips: '设置后显示成区域面积图。',
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
    keyId: 'blur',
    keyName: '淡出状态',
    tips: '开启 emphasis.focus 后有效。',
    setters: ['object'],
    children: [
      {
        keyId: 'label',
        keyName: '标签样式',
        setters: ['object'],
        default: {},
        children: [
          {
            keyId: 'show',
            keyName: '展示标签',
            setters: ['switch'],
            default: false
          }
        ]
      },
      {
        keyId: 'labelLine',
        keyName: '视觉引导线样式',
        setters: ['object'],
        default: {},
        children: [
          {
            keyId: 'show',
            keyName: '展示引导线',
            setters: ['switch'],
            default: false
          }
        ]
      }
    ],
    default: {},
  },
  setting.selectedMode,
  {
    keyId: 'select',
    keyName: '选中状态样式',
    tips: '折线图的选中状态',
    setters: ['object'],
    children: [
      {
        keyId: 'disable',
        keyName: '是否可以被选中',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'levels',
    keyName: '多层配置',
    setters: ['object', 'function'],
    children: [
      {
        keyId: 'visualDimension',
        keyName: '视觉映射',
        setters: ['number'],
        default: 1
      }
    ],
    default: {},
  },
  {
    keyId: 'levels',
    keyName: '多层配置',
    setters: ['object', 'function'],
    children: [
      {
        keyId: 'visualDimension',
        keyName: '视觉映射',
        setters: ['number'],
        default: 1
      }
    ],
    default: {},
  },
  setting.z,
  setting.zlevel,
  setting.silent,
  setting.animationDuration,
  setting.animationEasing,
  setting.animationDelay,
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