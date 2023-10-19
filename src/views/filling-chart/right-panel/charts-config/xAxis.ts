// echarts 的 xAxis 配置
import setting from './dictionary/common-property'
const typeArr = [
  { label: '数据轴', value: 'value' },
  { label: '类目轴', value: 'category' },
  { label: '时间轴', value: 'time' },
  { label: '对数轴', value: 'log' },
]
export default [
  // {
  //   keyId: "id",
  //   keyName: "ID",
  //   setters: ['switch'],
  //   default: true,
  // },
  {
    keyId: 'show',
    keyName: '显示 x 轴',
    setters: ['switch'],
    default: true,
  },
  // {
  //   keyId: 'gridIndex',
  //   tips: '当定义多个布局（grid）时，填写对应的布局',
  //   keyName: '布局索引',
  //   setters: ['number'],
  //   default: 0
  // },
  {
    keyId: 'alignTicks',
    tips: '当前轴为 value 和 log 类型时有效',
    keyName: '对齐刻度',
    setters: ['switch'],
    default: 0
  },
  // {
  //   keyId: "position",
  //   // tips: "当前轴为 value 和 log 类型时有效。",
  //   keyName: "x 轴位置",
  //   setters: ['switch'],
  //   default: 0
  // },
  {
    keyId: 'position',
    keyName: 'x 轴的位置',
    tips: '默认为下侧，另一个数据轴在另一侧',
    setters: ['select'],
    default: 'left',
    optionalValue: [
      { label: '上侧', value: 'top' },
      { label: '下侧', value: 'bottom' },
    ],
  },
  {
    keyId: 'offset',
    keyName: '数据轴偏移',
    setters: ['number'],
    default: 0,
  },
  {
    keyId: 'type',
    keyName: '数据轴类型',
    setters: ['select'],
    optionalValue: typeArr,
    default: 'category',
    // children: xAxisConfig,
  },
  {
    keyId: 'name',
    keyName: '数据轴名称',
    setters: ['input'],
    default: '',
    // children: xAxisConfig,
  },
  {
    keyId: 'nameLocation',
    keyName: '名称位置',
    setters: ['select'],
    optionalValue: [
      { label: '起点', value: 'start' },
      { label: '中心', value: 'center' },
      { label: '终点', value: 'end' },
    ],
    default: '',
    // children: xAxisConfig,
  },
  {
    keyId: 'nameTextStyle',
    keyName: '文字样式',
    setters: ['object'],
    children: [
      setting.color,
      setting.fontStyle,
      setting.fontWeight,
    ],
    default: {},
  },
  // 数据内容还可以进行补充，或者使用其它编辑
  {
    keyId: 'data',
    keyName: '数据轴内容',
    setters: ['json'],
    default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // children: xAxisConfig,
  },
  {
    keyId: 'min',
    keyName: '最小刻度值',
    tips: "（数据轴时可用）特殊值 'dataMin' 表示数据中的最小值",
    setters: ['input', 'number', 'function'],
    default: '',
  },
  {
    keyId: 'max',
    keyName: '最大刻度值',
    tips: "（数据轴时可用）特殊值 'dataMax' 表示数据中的最小值",
    setters: ['input', 'number', 'function'],
    default: '',
  },
  {
    keyId: 'scale',
    keyName: '不包含 0',
    tips: '数据轴不会强制从零开始。不设置最大（最小）刻度值时有效，在x轴类型为数值时有效（type:value）',
    setters: ['input', 'number', 'function'],
    default: '',
    optionEnable: ['!xAxis.max', 'xAxis.min']
  },
  {
    keyId: 'splitNumber',
    keyName: '大致分割段数',
    tips: '实际段数会在该数值基础上，对易读程度作调整',
    setters: ['slider', 'number'],
    default: 5,
  },
  {
    keyId: 'minInterval',
    keyName: '刻度最小间隔',
    tips: '设置为 1 可以保证刻度值为整数',
    setters: ['slider', 'number'],
    default: 0,
  },
  {
    keyId: 'maxInterval',
    keyName: '刻度最大间隔',
    // tips: "",
    setters: ['slider', 'number'],
    default: 0,
  },
  {
    keyId: 'interval',
    keyName: '强制刻度间隔',
    // tips: "",
    setters: ['slider', 'number'],
    default: 0,
  },
  // {
  //   keyId: "logBase",
  //   keyName: "对数的底数",
  //   tips: "仅在对数轴中有效（type:'log'）",
  //   setters: ['slider', 'number'],
  //   default: 10,
  // },
  {
    keyId: 'silent',
    keyName: '静态坐标轴',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'triggerEvent',
    keyName: '响应鼠标事件',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'axisLine',
    keyName: '坐标轴线设置',
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
    keyId: 'axisTick',
    keyName: '坐标刻度设置',
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
    keyId: 'minorTick',
    keyName: '次刻度设置',
    tips: '对除类目轴中的刻度有效',
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
    keyId: 'axisLabel',
    keyName: '刻度标签设置',
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
    keyId: 'splitLine',
    keyName: '数据分割线',
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
    keyId: 'minorSplitLine',
    keyName: '数据次分割线',
    tips: '对类目轴（type:category）无效',
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
    keyId: 'splitArea',
    keyName: '区域分隔',
    tips: '对轴中的每一块进行块状分割',
    setters: ['object'],
    children: [
      {
        keyId: 'interval',
        keyName: '展示间隔',
        setters: ['number'],
        default: 0,
      },
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
    keyId: 'axisPointer',
    keyName: '鼠标指示器',
    tips: '鼠标在数据轴上移动时的表现，默认会在显示 tooltip.trigger 为 axis 时显示',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '展示指示器',
        setters: ['switch'],
        default: true,
      },
      {
        keyId: 'type',
        keyName: '标签内容',
        setters: ['select'],
        optionalValue: [
          { label: '线型', value: 'line' },
          { label: '阴影', value: 'shadow' },
          { label: '无', value: 'none' },
        ],
        default: 'none',
      },
    ],
    default: {},
  },
  setting.animation,
  setting.animationThreshold,
  setting.animationDuration,
  setting.animationEasing,
  setting.animationDelay,
  setting.animationDurationUpdate,
  setting.animationEasingUpdate,
  setting.animationDelayUpdate,
  // setting.zlevel,
  setting.z,
]