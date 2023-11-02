// import { seriesType } from './dictionary/common-series.js'
import setting from './dictionary/commonProperty'
import type { EchartsOption } from '../chart-config.d.ts'
const symbolShpe = [
  { label: '圆形', value: 'circle' },
  { label: '矩形', value: 'rect' },
  { label: '圆角矩形', value: 'roundRect' },
  { label: '三角形', value: 'triangle' },
  { label: '钻石', value: 'diamond' },
  { label: '大头针', value: 'pin' },
  { label: '箭头', value: 'arrow' },
  { label: '无', value: 'none' },
]
const seriesBar: EchartsOption[] = [
  // 不在内部修改图表类型
  //   {
  //   keyId: 'type',
  //   keyName: '图表类型',
  //   setters: ['select'],
  //   optionalValue: [
  // { label: '柱状图', value: 'bar' },
  // { label: '折线图', value: 'line' },
  // { label: '饼图', value: 'pie' }
  // ],
  //   default: 'bar',
  // },
  {
    keyId: 'id',
    keyName: 'ID',
    tips: '指定则可用于在 option 或者 API 中引用组件。',
    setters: ['input'],
    default: null,
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
    keyId: 'colorBy',
    keyName: '使用色系',
    setters: ['select'],
    optionalValue: [
      { label: '系列调色盘', value: 'series' },
      { label: '数据项分配', value: 'data' },
    ],
    default: `series`,
  },
  {
    keyId: 'coordinateSystem',
    keyName: '使用坐标系',
    setters: ['select'],
    optionalValue: [
      { label: '二维坐标系', value: 'cartesian2d' },
      { label: '极坐标系', value: 'polar' },
    ],
    default: `series`,
  },
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
    default: false,
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
  {
    keyId: 'clip',
    keyName: '裁剪超出坐标系部分的图形',
    // 散点图/带有涟漪特效动画的散点（气泡）图：忽略中心点超出坐标系的图形，但是不裁剪单个图形
    // 柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子
    // 折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理
    // 路径图：裁掉所有超出坐标系的部分
    // K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形
    // 自定义系列：裁掉所有超出坐标系的部分
    setters: ['switch'],
    default: true,
  },
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
    keyId: 'selectMode',
    keyName: '选中模式',
    setters: ['switch', 'select'],
    optionalValue: [
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
  {
    keyId: 'dimensions',
    keyName: '维度信息',
    tips: '定义 series.data 或者（数据集）dataset.source 的每个维度的信息。',
    // https://echarts.apache.org/zh/option.html#series-line.dimensions
    setters: ['array'],
    default: '',
  },
  {
    keyId: 'encode',
    keyName: '编码格式',
    tips: '定义 data 的哪个维度被编码成什么。',
    setters: ['array'],
    default: '',
  },
  {
    keyId: 'seriesLayoutBy',
    keyName: '数据集对应列',
    tips: '指定了 dataset（数据集）用行还是列对应到系列上',
    setters: ['select'],
    optionalValue: [
      { label: '列', value: 'column' },
      { label: '行', value: 'row' },
    ],
    default: '',
  },
  {
    keyId: 'datasetIndex',
    keyName: '数据集对应列',
    tips: '指定了 dataset（数据集）用行还是列对应到系列上',
    setters: ['select'],
    optionalValue: [
      { label: '过滤点最小值', value: 'column' },
      { label: '过滤点和', value: 'row' },
    ],
    default: '',
  },
  {
    keyId: 'dataGroupId',
    keyName: '数据共有id',
    tips: '系列所有数据共有的组 ID',
    setters: ['select'],
    optionalValue: [
      { label: '过滤点最小值', value: 'column' },
      { label: '过滤点和', value: 'row' },
    ],
    default: '',
  },
  {
    keyId: 'markPoint',
    keyName: '图表标注点',
    setters: ['object'],
    children: [{
      keyId: 'symbol',
      keyName: '图形类型',
      setters: ['select', 'input'],
      optionalValue: symbolShpe,
      default: 'pin'
    }],
    default: '',
  },
  {
    keyId: 'markLine',
    keyName: '图表标注线',
    setters: ['object'],
    children: [{
      keyId: 'silent',
      keyName: '安静模式',
      setters: ['switch'],
      tips: '图形是否不响应和触发鼠标事件',
      default: false
    }],
    default: '',
  },
  {
    keyId: 'markArea',
    keyName: '图表标域',
    setters: ['object'],
    children: [{
      keyId: 'silent',
      keyName: '安静模式',
      setters: ['switch'],
      tips: '图形是否不响应和触发鼠标事件',
      default: false
    }],
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
    children: [{
      keyId: 'enabled',
      keyName: '是否开启',
      setters: ['switch'],
      tips: '图形是否不响应和触发鼠标事件',
      default: false
    }],
    default: '',
  },
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
  {
    keyId: 'tooltip',
    keyName: '提示设置',
    tips: '系列 tooltip 设定',
    setters: ['object'],
    children: [{
      keyId: 'position',
      keyName: '是否开启',
      setters: ['select'],
      optionalValue: [
        { label: 'auto', value: 'auto' }
      ],
      tips: '图形是否不响应和触发鼠标事件',
      default: false
    }],
    default: '',
  },
]

export default seriesBar