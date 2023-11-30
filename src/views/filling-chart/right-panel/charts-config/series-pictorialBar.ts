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
  setting.legendHoverLink,
  setting.coordinateSystem,
  setting.xAxisIndex,
  setting.yAxisIndex,
  setting.curosr,
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

  setting.barWidth,
  setting.barMaxWidth,
  setting.barMinWidth,
  setting.barMinHeight,
  setting.barMinAngle,
  setting.barGap,
  setting.barCategoryGap,
  {
    keyId: 'symbol',
    keyName: '标记图形样式',
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
    default: 0,
  },
  setting.symbolSize,
  {
    keyId: 'symbolPosition',
    keyName: '标记图形样式',
    setters: ['select', 'input'],
    optionalValue: [
      { label: '柱状图内切（开始）', value: 'start' },
      { label: '柱状图内切（结束）', value: 'end' },
      { label: '柱状图内切（居中）', value: 'center' },
    ],
    default: 0,
  },
  setting.symbolOffset,
  setting.symbolRotate,
  setting.symbolRepeat,
  setting.symbolRepeatDirection,
  {
    keyId: 'symbolBoundingData',
    keyName: '图形界限的值',
    setters: ['json'],
    default: [0, 0],
  },
  {
    keyId: 'symbolPatternSize',
    keyName: '图形图案大小',
    setters: ['json'],
    default: [0, 0],
  },
  setting.hoverAnimation,
  setting.dimensions,
  setting.encode,
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
    default: '',
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
  setting.silent,
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
  {
    keyId: 'universalTransition',
    keyName: '全局过渡动画',
    setters: ['object'],
    children: [{
      keyId: 'enabled',
      keyName: '是否开启',
      setters: ['switch'],
      tips: '图形是否不响应和触发鼠标事件',
      default: false
    }],
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

export default seriesBar