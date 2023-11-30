// import { seriesType } from './dictionary/common-series.js'
import setting from './dictionary/commonProperty'
import type { EchartsOption } from '../chart-config.d.ts'
const seriesBar: EchartsOption[] = [
  // 不在内部修改图表类型
  //   {
  //   keyId: 'type',
  //   keyName: '图表类型',
  //   setters: ['select'],
  //   optionalValue: [
  //     { label: '柱状图', value: 'bar' },
  //     { label: '折线图', value: 'line' },
  //     { label: '饼图', value: 'pie' }
  // ],
  //   default: 'bar',
  // },
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
  // {
  //   keyId: 'xAxisIndex',
  //   keyName: '使用的 x 轴',
  //   tips: '多个坐标轴时，指定的坐标轴 ID',
  //   setters: ['number'],
  //   default: '',
  // },
  // {
  //   keyId: 'yAxisIndex',
  //   keyName: '使用的 y 轴',
  //   tips: '多个坐标轴时，指定的坐标轴 ID',
  //   setters: ['number'],
  //   default: '',
  // },
  // {
  //   keyId: 'polarIndex',
  //   keyName: '极坐标系索引',
  //   tips: '多个坐标轴时，指定的坐标轴 ID',
  //   setters: ['number'],
  //   default: '',
  // },
  {
    keyId: 'roundCap',
    keyName: '环形柱条圆弧',
    tips: '对极坐标系柱状图有效，在环形柱条两侧使用圆弧效果。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'realtimeSort',
    keyName: '实时排序',
    tips: '开启实时排序，用来实现动态排序图效果',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'showBackground',
    keyName: '展示背景',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'backgroundStyle',
    keyName: '背景样式',
    setters: ['object'],
    children: [
      {
        keyId: 'color',
        keyName: '背景颜色',
        setters: ['color', 'input'],
        default: 'rgba(180, 180, 180, 0.2)',
      }
    ],
    default: '',
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
    keyId: 'labelLine',
    keyName: '视觉引导线',
    tips: '标签的视觉引导线配置',
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
    keyId: 'itemStyle',
    keyName: '总样式',
    tips: '折线拐点标志的样式',
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
  setting.selectedMode,
  setting.stack,
  setting.stackStrategy,
  setting.cursor,
  setting.barWidth,
  setting.barMaxWidth,
  setting.barMinWidth,
  setting.barMinHeight,
  setting.barMinAngle,
  setting.barGap,
  setting.barCategoryGap,
  setting.large,
  setting.largeThreshold,
  setting.progressive,
  setting.progressiveThreshold,
  setting.dimensions,
  setting.encode,
  setting.seriesLayoutBy,
  setting.datasetIndex,
  setting.dataGroupId,
  setting.clip,
  setting.triggerLineEvent,
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
        keyName: '显示端点标签',
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
  setting.sampling,
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