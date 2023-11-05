// import { seriesType } from './dictionary/common-series.js'
import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty.js'
const seriesType = [
  { label: '柱状图', value: 'bar' },
  { label: '折线图', value: 'line' },
  { label: '饼图', value: 'pie' }
]

const seriesLine: EchartsOption[] = [
  // {
  //   keyId: 'type',
  //   keyName: '图表类型',
  //   setters: ['select'],
  //   optionalValue: seriesType,
  //   default: 'line',
  // },
  // {
  //   keyId: 'id',
  //   keyName: '组件 ID',
  //   tips: '用于提示（tooltip）和图例（legend）的显示',
  //   setters: ['input'],
  //   default: '',
  // },
  {
    keyId: 'name',
    keyName: '名称',
    tips: '用于提示（tooltip）和图例（legend）的显示',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'data',
    keyName: '数据',
    setters: ['json'],
    default: [],
  },
  setting.stack,
  setting.stackStrategy,
  setting.colorBy,
  setting.coordinateSystem,
  {
    keyId: 'coordinateSystem',
    keyName: '数据',
    setters: ['json'],
    default: [],
  },
  {
    keyId: 'xAxisIndex',
    keyName: '使用的 x 轴',
    setters: ['number'],
    default: 0,
  },
  {
    keyId: 'yAxisIndex',
    keyName: '使用的 y 轴',
    setters: ['number'],
    default: 0,
  },
  {
    keyId: 'polarIndex',
    keyName: '使用的极坐标轴',
    setters: ['number'],
    default: 0,
  },
  setting.showSymbol,
  setting.symbol,
  setting.symbolSize,
  setting.symbolRotate,
  setting.symbolKeepAspect,
  setting.symbolOffset,
  setting.showAllSymbol,
  setting.legendHoverLink,
  setting.cursor,
  // {
  //   keyId: 'connectNulls',
  //   keyName: '连接空数据',
  //   tips: '和 CSS 的手势相同',
  //   setters: ['switch'],
  //   default: false,
  // },
  setting.clip,
  setting.triggerLineEvent,
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
    keyId: 'endLabel',
    keyName: '折线端点标签',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '显示端点标签',
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
    keyId: 'labelLayout',
    keyName: '标签布局配置',
    tips: '该配置项是在每个系列默认的标签布局基础上，统一调整标签的(x, y)位置，标签对齐等属性以实现想要的标签布局效果。',
    setters: ['object', 'function'],
    children: [
      {
        keyId: 'hideOverlap',
        keyName: '是否隐藏重叠的标签',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
  {
    keyId: 'itemStyle',
    keyName: '总样式',
    tips: '折线拐点标志的样式。',
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
    keyId: 'lineStyle',
    keyName: '线段的样式',
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
    keyId: 'areaStyle',
    keyName: '填充的样式',
    tips: '设置后显示成区域面积图。',
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
    keyName: '强调的样式',
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
  {
    keyId: 'selectedMode',
    keyName: '选中模式',
    setters: ['switch', 'select'],
    optionalValue: [
      { label: '关闭', value: false },
      { label: '单个', value: 'single' },
      { label: '多选', value: 'multiple' },
      { label: '系列', value: 'series' },
    ],
    default: false,
  },
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
    keyId: 'smooth',
    keyName: '平滑曲线',
    setters: ['switch', 'number'],
    default: false,
  },
  {
    keyId: 'smoothMonotone',
    keyName: '平滑单调性',
    tips: '在一个维度上保持单调性，通常在双数值轴上使用。',
    setters: ['switch', 'number'],
    optionalValue: [
      { label: 'x 轴', value: 'x' },
      { label: 'y 轴', value: 'y' },
    ],
    default: false,
  },
  {
    keyId: 'sampling',
    keyName: '多数据采样策略',
    tips: '折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率',
    setters: ['select'],
    optionalValue: [
      { label: 'lttb 算法', value: 'lttb' }, // 采用 Largest-Triangle-Three-Bucket 算法，
      { label: '过滤点平均值', value: 'avreage' },
      { label: '过滤点最大值', value: 'max' },
      { label: '过滤点最小值', value: 'min' },
      { label: '过滤点和', value: 'sum' },
    ],
    default: '',
  },
  setting.dimensions,
  setting.encode,
  setting.seriesLayoutBy,
  setting.datasetIndex,
  setting.dataGroupId,
  {
    keyId: 'markPoint',
    keyName: '图表标注点',
    setters: ['object'],
    children: [
      {
        keyId: 'symbol',
        keyName: '图形类型',
        setters: ['select', 'input'],
        optionalValue: [
          { label: '圆形', value: 'circle' },
          { label: '矩形', value: 'rect' },
          { label: '圆角矩形', value: 'roundRect' },
          { label: '三角形', value: 'triangle' },
          { label: '钻石', value: 'diamond' },
          { label: '大头针', value: 'pin' },
          { label: '箭头', value: 'arrow' },
          { label: '无', value: 'none' },
        ],
        default: 'pin'
      }
    ],
    default: {},
  },
  {
    keyId: 'markLine',
    keyName: '图表标注线',
    setters: ['object'],
    children: [
      {
        keyId: 'silent',
        keyName: '安静模式',
        setters: ['switch'],
        tips: '图形是否不响应和触发鼠标事件',
        default: false
      }
    ],
    default: '',
  },
  {
    keyId: 'markArea',
    keyName: '图表标域',
    setters: ['object'],
    children: [
      {
        keyId: 'silent',
        keyName: '安静模式',
        setters: ['switch'],
        tips: '图形是否不响应和触发鼠标事件',
        default: false
      }
    ],
    default: '',
  },
  setting.zlevel,
  setting.z,
  setting.silent,
  setting.animation,
  setting.animationDelay,
  setting.animationDelayUpdate,
  setting.animationDuration,
  setting.animationDurationUpdate,
  setting.animationEasing,
  setting.animationEasingUpdate,
  setting.animationThreshold,
  {
    keyId: 'universalTransition',
    keyName: '全局过渡动画',
    setters: ['object'],
    children: [
      {
        keyId: 'enabled',
        keyName: '是否开启',
        setters: ['switch'],
        tips: '图形是否不响应和触发鼠标事件',
        default: false
      }
    ],
    default: '',
  },
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
export default seriesLine