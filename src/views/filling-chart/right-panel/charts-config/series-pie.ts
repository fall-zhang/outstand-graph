// import { seriesType } from './dictionary/common-series'
import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'
// 图表类型的配置
const seriesType = [
  { label: '柱状图', value: 'bar' },
  { label: '折线图', value: 'line' },
  { label: '饼图', value: 'pie' }
]

const seriesPie: EchartsOption[] = [
  {
    keyId: 'type',
    keyName: '图表类型',
    setters: ['select'],
    optionalValue: seriesType,
    default: 'pie',
  },
  // {
  //   keyId: 'id',
  //   keyName: 'ID',
  //   tips: '指定则可用于在 option 或者 API 中引用组件。',
  //   setters: ['input'],
  //   default: '',
  // },
  {
    keyId: 'name',
    keyName: '名称',
    tips: '用于提示（tooltip）和图例（legend）的显示',
    setters: ['input'],
    default: true,
  },
  {
    keyId: 'data',
    keyName: '数据',
    setters: ['json'],
    default: true,
  },
  setting.colorBy,
  setting.legendHoverLink,
  {
    keyId: 'coordinateSystem',
    keyName: '采用坐标系',
    setters: ['select'],
    optionalValue: [
      { label: '无坐标系', value: 'none' },
      { label: '地理坐标系', value: 'geo' },
      { label: '日历坐标系', value: 'calendar' },
    ],
    default: ''
  },
  setting.geoIndex,
  setting.calendarIndex,
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
    keyId: 'selectedOffset',
    keyName: '选中扇区偏移',
    tips: '选中的扇区的偏移距离，需要开启 selectedMode',
    setters: ['number'],
    default: 0
  },
  {
    keyId: 'clockwise',
    keyName: '数据顺时针排布',
    setters: ['switch'],
    default: true
  },
  {
    keyId: 'startAngle',
    keyName: '初始角度',
    setters: ['number'],
    default: 90
  },
  {
    keyId: 'minAngle',
    keyName: '最小扇区角度',
    tips: '防止值过小导致扇区太小影响交互',
    setters: ['number'],
    default: 0
  },
  {
    keyId: 'minShowLabelAngle',
    keyName: '小角度隐藏标签',
    tips: '小于该角度的，标签会被隐藏',
    setters: ['number'],
    default: 0
  },
  {
    keyId: 'roseType',
    keyName: '南丁格尔图',
    tips: '展示成南丁格尔图，数据大小同时影响半径和弧度',
    setters: ['select'],
    optionalValue: [
      { label: '仅弧度', value: false },
      { label: '半径和弧度', value: 'radius' },
      { label: '仅半径', value: 'area' },
    ],
    default: undefined
  },
  {
    keyId: 'avoidLabelOverlap',
    keyName: '标签重叠策略',
    tips: '默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置',
    setters: ['switch'],
    default: true
  },
  {
    keyId: 'stillShowZeroSum',
    keyName: '空数据扇区',
    tips: '所有数据为 0 时候仍显示扇区',
    setters: ['switch'],
    default: true
  },
  {
    keyId: 'showEmptyCircle',
    keyName: '无数据扇区',
    tips: '是否在无数据的时候显示一个占位圆',
    setters: ['switch'],
    default: true
  },
  {
    keyId: 'emptyCircleStyle',
    keyName: '无数据扇区样式',
    setters: ['object'],
    children: [],
    default: true
  },
  {
    keyId: 'percentPrecision',
    keyName: '百分比精确度',
    tips: '默认保留小数点后两位',
    setters: ['number'],
    default: 2
  },
  setting.cursor,
  setting.zlevel,
  setting.z,
  setting.left,
  setting.top,
  setting.right,
  setting.bottom,
  setting.width,
  setting.height,
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
  {
    keyId: 'center',
    keyName: '饼图圆心坐标',
    tips: '第一项是横坐标，第二项是纵坐标',
    setters: ['array'],
    default: ['50%', '50%']
  },
  {
    keyId: 'radius',
    keyName: '饼图半径',
    tips: '可以指定为数组，分别为内半径和外半径',
    setters: ['array', 'number', 'input'],
    default: [0, '75%']
  },
  setting.seriesLayoutBy,
  setting.dimensions,
  setting.encode,
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
  {
    keyId: 'animationType',
    keyName: '初始化动画',
    setters: ['select'],
    optionalValue: [
      { label: '沿弧线展开', value: 'expansion' },
      { label: '自内而外缩放', value: 'scale' },
    ],
    default: 'expansion'
  },
  {
    keyId: 'animationTypeUpdate',
    keyName: '更新动画',
    setters: ['select'],
    optionalValue: [
      { label: '改变角度过度', value: 'transition' },
      { label: '数据整体展开', value: 'expansion' },
    ],
    default: 'transition'
  },
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
export default seriesPie