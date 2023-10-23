// import { seriesType } from './dictionary/common-series.js'
const seriesType = [
  { label: '柱状图', value: 'bar' },
  { label: '折线图', value: 'line' },
  { label: '饼图', value: 'pie' }
]

export default [
  //   {
  //   keyId: 'type',
  //   keyName: '图表类型',
  //   setters: ['select'],
  //   optionalValue: seriesType,
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
    keyId: 'data',
    keyName: '数据',
    setters: ['json'],
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
  {
    keyId: 'xAxisIndex',
    keyName: '使用的 x 轴',
    tips: '多个坐标轴时，指定 ID 有效',
    setters: ['number'],
    default: '',
  },
  {
    keyId: 'yAxisIndex',
    keyName: '使用的 x 轴',
    tips: '多个坐标轴时，指定 ID 有效',
    setters: ['number'],
    default: '',
  },
  {
    keyId: 'polarIndex',
    keyName: '极坐标系索引',
    tips: '多个坐标轴时，指定 ID 有效',
    setters: ['number'],
    default: '',
  },
  {
    keyId: 'symbol',
    keyName: '标记图形类型',
    tips: '可以添加图片和 path 详情可见 https://echarts.apache.org/zh/option.html#series-line.symbol',
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
    default: 'emptyCircle',
  },
  {
    keyId: 'symbolSize',
    keyName: '标记图形类型',
    tips: '可以设置为数组，表示宽高',
    setters: ['number', 'json'],
    default: 4,
  },
  {
    keyId: 'symbolRotate',
    keyName: '标记图形类型',
    setters: ['number'],
    default: 0,
  },
  {
    keyId: 'symbolKeepAspect',
    keyName: '保持 path 长宽比',
    setters: ['switch'],
    default: 0,
  },
  {
    keyId: 'symbolOffset',
    keyName: '相对于原本位置的偏移',
    setters: ['json'],
    default: `[0, 0]`,
  },
  {
    keyId: 'showSymbol',
    keyName: '显示 symbol',
    tips: ' 如果 false 则只有在 tooltip hover 的时候显示。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'showAllSymbol',
    keyName: '显示全部 symbol',
    tips: '类目轴（category）时有效如果 false 则只有在 tooltip hover 的时候显示。',
    setters: ['select'],
    optionValue: [
      { label: '显示所有图形', value: true },
      { label: '随主轴标签间隔隐藏策略', value: false },
      { label: '根据空间适应', value: 'auto' }
    ],
    default: true,
  },
  {
    keyId: 'legendHoverLink',
    keyName: '联动图例',
    tips: '启用图例 hover 时的联动高亮。',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'stack',
    keyName: '数据堆叠标志',
    tips: '相同标志的数据会进行堆叠',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'stackStrategy',
    keyName: '数据堆叠策略',
    tips: '相同标志的数据会进行堆叠',
    setters: ['select'],
    optionValue: [
      { label: '符号相同（同为正或负）', value: 'samesign' },
      { label: '堆叠所有的值', value: 'all' },
      { label: '只堆积正值', value: 'positive' },
      { label: '只堆叠负值', value: 'negative' },
    ],
    default: '',
  },
  {
    keyId: 'cursor',
    keyName: '手势',
    tips: '和 CSS 的手势相同',
    setters: ['select'],
    optionValue: [
      { label: '符号相同（同为正或负）', value: 'pointer' },
      { label: '堆叠所有的值', value: 'all' },
      { label: '只堆积正值', value: 'positive' },
      { label: '只堆叠负值', value: 'negative' },
    ],
    default: 'pointer',
  },
  // {
  //   keyId: 'connectNulls',
  //   keyName: '连接空数据',
  //   tips: '和 CSS 的手势相同',
  //   setters: ['switch'],
  //   default: false,
  // },
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
  {
    keyId: 'triggerLineEvent',
    keyName: '线条区域触发事件',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'step',
    keyName: '阶梯线图',
    optionValue: [
      { label: '起始', value: 'start' },
      { label: '中心', value: 'middle' },
      { label: '结尾', value: 'end' },
    ],
    setters: ['select'],
    default: false,
  },
  {
    keyId: 'label',
    keyName: '文本标签',
    setters: ['object'],
    childern: [
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
    childern: [
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
    childern: [
      {
        keyId: 'show',
        keyName: '显示端点标签',
        setters: ['switch'],
        default: false
      }
    ],
    default: {},
  },
]