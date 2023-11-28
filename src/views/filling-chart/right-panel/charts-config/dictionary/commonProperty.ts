/**
 * 通过 key 的方式提供单个属性的配置
 */

import type { EchartsOption } from '../../chart-config.d.ts'

const commonProperty: Record<string, EchartsOption> = {
  backgroundColor: {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'transparent'
  },
  shadowColor: {
    keyId: 'shadowColor',
    keyName: '阴影颜色',
    setters: ['input', 'color'],
    default: 0
  },
  shadowBlur: {
    keyId: 'shadowBlur',
    keyName: '阴影虚化',
    setters: ['number', 'slider'],
    default: 0
  },
  shadowOffsetX: {
    keyId: 'shadowOffsetX',
    keyName: '阴影X轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
  shadowOffsetY: {
    keyId: 'shadowOffsetY',
    keyName: '阴影Y轴偏移',
    setters: ['number', 'slider'],
    default: 0
  },
  opacity: {
    keyId: 'opacity',
    keyName: '透明度',
    setters: ['number', 'slider'],
    default: 0
  },
  show: {
    keyId: 'show',
    keyName: '展示',
    setters: ['switch'],
    default: true,
  },
  width: {
    keyId: 'width',
    keyName: '宽度',
    setters: ['input', 'number'],
    default: 'auto',
  },
  height: {
    keyId: 'height',
    keyName: '高度',
    setters: ['input', 'number'],
    default: 'auto',
  },
  borderDashOffset: {
    keyId: 'borderDashOffset',
    keyName: '虚线偏移',
    setters: ['number'],
    default: 'inherit'
  },
  borderColor: {
    keyId: 'borderColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'transparent'
  },
  borderWidth: {
    keyId: 'borderWidth',
    keyName: '边框宽度',
    setters: ['number', 'input'],
    default: 0
  },
  borderRadius: {
    keyId: 'borderRadius',
    keyName: '圆角半径',
    setters: ['slider', 'number'],
    default: 0
  },
  dashOffset: {
    keyId: 'dashOffset',
    keyName: '虚线偏移',
    setters: ['number', 'input'],
    default: 0
  },
  color: {
    keyId: 'color',
    keyName: '文字颜色',
    setters: ['color', 'input'],
    default: '',
  },
  fontStyle: {
    keyId: 'fontStyle',
    keyName: '文字风格',
    setters: ['select'],
    optionalValue: [
      { label: '正常', value: 'normal' },
      { label: '斜体', value: 'italic' },
      // { label: '强制倾斜', value: 'oblique' },
    ],
    default: 'normal',
  },
  fontWeight: {
    keyId: 'fontWeight',
    keyName: '字体粗细',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '正常', value: 'normal' },
      { label: '加粗', value: 'bold' },
      { label: '更粗', value: 'bolder' },
      { label: '更细', value: 'lighter' },
    ],
    default: 'normal',
  },
  fontFamily: {
    keyId: 'fontFamily',
    keyName: '字体类型',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'serif', value: 'serif' },
      { label: 'monospace', value: 'monospace' },
      { label: 'Arial', value: 'Arial' },
      { label: 'Courier New', value: 'Courier New' },
      { label: 'Microsoft YaHei', value: 'Microsoft YaHei' },
    ],
    default: 'sans-serif',
  },
  fontSize: {
    keyId: 'fontSize',
    keyName: '字体大小',
    setters: ['slider', 'number'],
    default: 12,
  },
  animation: {
    keyId: 'animation',
    keyName: '是否开启动画',
    setters: ['switch'],
    default: true
  },
  animationThreshold: {
    keyId: 'animationThreshold',
    keyName: '开启动画阈值',
    setters: ['number'],
    default: 2000
  },
  animationDuration: {
    keyId: 'animationDuration',
    keyName: '初始动画时长',
    setters: ['number'],
    default: 1000
  },
  animationEasing: {
    keyId: 'animationEasing',
    keyName: '动画效果',
    setters: ['select'],
    optionalValue: [
      { label: 'linear', value: 'linear' },
      { label: 'quadraticIn', value: 'quadraticIn' },
      { label: 'quadraticOut', value: 'quadraticOut' },
      { label: 'quadraticInOut', value: 'quadraticInOut' },
    ],
    default: 'cubicOut'
  },
  animationDelay: {
    keyId: 'animationDelay',
    keyName: '动画延迟',
    setters: ['number', 'function'],
    default: 0
  },
  animationDurationUpdate: {
    keyId: 'animationDurationUpdate',
    tips: '数据更新的动画时长',
    keyName: '数据动画时长',
    setters: ['number', 'function'],
    default: 300
  },
  animationEasingUpdate: {
    keyId: 'animationEasingUpdate',
    tips: '数据更新的动画效果',
    keyName: '数据动画效果',
    setters: ['select'],
    optionalValue: [
      { label: 'linear', value: 'linear' },
      { label: 'quadraticIn', value: 'quadraticIn' },
      { label: 'quadraticOut', value: 'quadraticOut' },
      { label: 'quadraticInOut', value: 'quadraticInOut' },
    ],
    default: 'cubicInOut'
  },
  animationDelayUpdate: {
    keyId: 'animationDelayUpdate',
    tips: '数据更新动画的延迟效果',
    keyName: '数据动画延迟',
    setters: ['number'],
    default: 0
  },
  zlevel: {
    keyId: 'zlevel',
    keyName: '图层层级',
    setters: ['number'],
    default: 0
  },
  z: {
    keyId: 'z',
    keyName: '图形层级',
    setters: ['number'],
    default: 0
  },
  center: {
    keyId: 'center',
    keyName: '中心坐标',
    tips: '第一项是横坐标，第二项是纵坐标',
    setters: ['array'],
    default: ['50%', '50%']
  },
  left: {
    keyId: 'left',
    keyName: '左侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '左侧对齐', value: 'left' },
      { label: '中心对齐', value: 'center' },
      { label: '右侧对齐', value: 'right' },
    ],
    default: 'auto'
  },
  clockwise: {
    keyId: 'clockwise',
    keyName: '顺时针排布',
    setters: ['switch'],
    default: true,
  },
  startAngle: {
    keyId: 'startAngle',
    keyName: '初始角度',
    setters: ['number', 'slider'],
    default: 90,
  },
  top: {
    keyId: 'top',
    keyName: '上侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: '自动对齐', value: 'auto' },
      { label: '顶部对齐', value: 'top' },
      { label: '中心对齐', value: 'middle' },
      { label: '底部对齐', value: 'bottom' },
    ],
    default: 'auto'
  },
  right: {
    keyId: 'right',
    keyName: '右侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 'auto'
  },
  bottom: {
    keyId: 'bottom',
    keyName: '下侧距离',
    setters: ['select', 'number'],
    optionalValue: [
      { label: 'auto', value: 'auto' }
    ],
    default: 'auto'
  },
  // 坐标轴相关设置
  min: {
    keyId: 'min',
    keyName: '坐标轴最小刻度',
    tips: '不设置时会自动计算最小值保证坐标轴刻度的均匀分布',
    setters: ['number', 'select', 'function'],
    optionalValue: [
      { label: '数据最小值', value: 'dataMin' }
    ],
    default: undefined
  },
  max: {
    keyId: 'max',
    keyName: '坐标轴最大刻度',
    tips: '不设置时会自动计算最大值保证坐标轴刻度的均匀分布',
    setters: ['number', 'select', 'function'],
    default: undefined
  },
  scale: {
    keyId: 'scale',
    keyName: '包含零刻度',
    tips: '只在数值轴中有效',
    setters: ['switch'],
    default: undefined
  },
  splitNumber: {
    keyId: 'splitNumber',
    keyName: '分割段数',
    tips: '表示大致分割段数，类目轴无效',
    setters: ['number'],
    default: 5
  },
  minInterval: {
    keyId: 'minInterval',
    keyName: '坐标轴最小间隔',
    tips: '可以设置成 1 保证坐标轴分割刻度显示成整数',
    setters: ['number'],
    default: undefined
  },
  maxInterval: {
    keyId: 'maxInterval',
    keyName: '坐标轴最大间隔',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  interval: {
    keyId: 'interval',
    keyName: '强制设置分隔',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  logBase: {
    keyId: 'logBase',
    keyName: '对数轴的底数',
    tips: '设置成 3600 * 24 * 1000 保证坐标轴分割刻度最大为一天，数值轴和有效',
    setters: ['number'],
    default: undefined
  },
  silent: {
    keyId: 'silent',
    keyName: '静默模式',
    tips: '图形是否不响应和触发鼠标事件',
    setters: ['switch'],
    default: false
  },
  triggerEvent: {
    keyId: 'triggerEvent',
    keyName: '标签事件响应',
    tips: '坐标轴的标签是否响应和触发鼠标事件，默认不响应。',
    setters: ['switch'],
    default: false
  },
  colorBy: {
    keyId: 'colorBy',
    keyName: '取色策略',
    setters: ['select'],
    optionalValue: [
      { label: '按照系列分配', value: 'series' },
      { label: '按照数据分配', value: 'data' },
    ],
    default: 'series',
  },
  coordinateSystem: {
    keyId: 'coordinateSystem',
    keyName: '采用坐标系',
    setters: ['select'],
    optionalValue: [
      { label: '直角（二维）坐标系', value: 'cartesian2d' },
      { label: '极坐标系', value: 'polar' },
    ],
    default: 'cartesian2d',
  },
  showSymbol: {
    keyId: 'showSymbol',
    keyName: '显示标记',
    tips: '设置为 false 时，将仅会在 tooltip（提示）触发时展示',
    setters: ['switch'],
    default: true,
  },
  symbol: {
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
  symbolSize: {
    keyId: 'symbolSize',
    keyName: '标记大小',
    tips: '可以用数组表示宽和高，例如 [20, 10] 表示标记宽为20，高为10',
    setters: ['number', 'array'],
    default: 4,
  },
  symbolRotate: {
    keyId: 'symbolRotate',
    keyName: '标记旋转角度',
    setters: ['number', 'function'],
    default: 0,
  },
  symbolKeepAspect: {
    keyId: 'symbolKeepAspect',
    keyName: '保持长宽比',
    setters: ['switch'],
    default: 0,
  },
  symbolOffset: {
    keyId: 'symbolOffset',
    keyName: '标记偏移',
    setters: ['array'],
    default: [0, 0],
  },
  showAllSymbol: {
    keyId: 'showAllSymbol',
    keyName: '标记偏移',
    setters: ['select'],
    optionalValue: [
      { label: '自适应', value: 'auto' },
      { label: '显示所有图形', value: true },
      { label: '随主轴标签间隔隐藏', value: false },
    ],
    default: 'auto',
  },
  legendHoverLink: {
    keyId: 'legendHoverLink',
    keyName: '联动图例（legend）高亮',
    setters: ['switch'],
    default: true,
  },
  stack: {
    keyId: 'stack',
    keyName: '堆叠名称',
    tips: '相同的堆叠名称，数据可以堆叠',
    setters: ['input'],
    default: '',
  },
  stackStrategy: {
    keyId: 'stackStrategy',
    keyName: '堆叠策略',
    setters: ['select'],
    optionalValue: [
      { label: '相同符号（同为正或负）', value: 'samesign' },
      { label: '堆叠所有值', value: 'all' },
      { label: '堆叠正值', value: 'positive' },
      { label: '堆叠负值', value: 'samesign' },
    ],
    default: 'samesign',
  },
  sampling: {
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
  cursor: {
    keyId: 'cursor',
    keyName: '指针悬浮样式',
    tips: '鼠标指针悬浮时的样式，同 CSS 的手势相同',
    setters: ['select', 'input'],
    optionalValue: [
      { label: '手势', value: 'pointer' },
      { label: '指针', value: 'none' },
    ],
    default: 'pointer',
  },
  clip: {
    keyId: 'clip',
    keyName: '裁剪',
    tips: '裁剪超出坐标系部分的图形',
    // 散点图/带有涟漪特效动画的散点（气泡）图：忽略中心点超出坐标系的图形，但是不裁剪单个图形
    // 柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子
    // 折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理
    // 路径图：裁掉所有超出坐标系的部分
    // K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形
    // 自定义系列：裁掉所有超出坐标系的部分
    setters: ['switch'],
    default: true,
  },
  triggerLineEvent: {
    keyId: 'triggerLineEvent',
    keyName: '裁剪',
    tips: '裁剪超出坐标系部分的图形',
    setters: ['switch'],
    default: true,
  },
  step: {
    keyId: 'step',
    keyName: '阶梯线图',
    optionalValue: [
      { label: '起始', value: 'start' },
      { label: '中心', value: 'middle' },
      { label: '结尾', value: 'end' },
    ],
    setters: ['select'],
    default: false,
  },
  selectedMode: {
    keyId: 'selectedMode',
    keyName: '选中模式',
    optionalValue: [
      { label: '关闭', value: false },
      { label: '单选', value: 'single' },
      { label: '多选', value: 'multiple' },
      { label: '系列', value: 'series' },
    ],
    setters: ['select'],
    default: '',
  },
  large: {
    keyId: 'large',
    keyName: '大数据量优化',
    tips: '在数据图形特别多而出现卡顿时候可以开启（优化后不能自定义设置单个数据项的样式）',
    setters: ['switch'],
    default: false,
  },
  largeThreshold: {
    keyId: 'largeThreshold',
    keyName: '大量数据阈值',
    tips: '开启绘制优化的阈值',
    setters: ['number'],
    default: 400,
  },
  progressive: {
    keyId: 'progressive',
    keyName: '渐进式渲染',
    tips: '渐进式渲染时每一帧绘制图形数量，设为 0 时不启用',
    setters: ['number'],
    default: 5000,
  },
  progressiveThreshold: {
    keyId: 'progressiveThreshold',
    keyName: '启用渐进式渲染的阈值',
    tips: '单个系列的图形数量超过该阈值时启用渐进式渲染',
    setters: ['number'],
    default: 3000,
  },
  progressiveChunkMode: {
    keyId: 'progressiveChunkMode',
    keyName: '启用渐进式渲染的阈值',
    tips: '取模分片（视觉上均匀得渲染），数据顺序分片（渲染过程不自然）',
    optionalValue: [
      { label: '数据顺序分片', value: 'sequential' },
      { label: '取模分片', value: 'mod' },
    ],
    setters: ['number'],
    default: 5000,
  },
  dimensions: {
    keyId: 'dimensions',
    keyName: '维度信息',
    tips: '定义 series.data 或者（数据集）dataset.source 的每个维度的信息。',
    // https://echarts.apache.org/zh/option.html#series-line.dimensions
    setters: ['array'],
    default: '',
  },
  encode: {
    keyId: 'encode',
    keyName: '编码格式',
    tips: '定义 data 的哪个维度被编码成什么。',
    setters: ['array'],
    default: '',
  },
  seriesLayoutBy: {
    keyId: 'seriesLayoutBy',
    keyName: '数据集对应列',
    tips: '指定了数据集（dataset）时，用行还是列对应到系列上',
    setters: ['select'],
    optionalValue: [
      { label: '列', value: 'column' },
      { label: '行', value: 'row' },
    ],
    default: '',
  },
  datasetIndex: {
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
  dataGroupId: {
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
  geoIndex: {
    keyId: 'geoIndex',
    keyName: '地理坐标系id',
    tips: '使用的地理坐标系的 ID',
    setters: ['number'],
    default: 0
  },
  calendarIndex: {
    keyId: 'calendarIndex',
    keyName: '日丽坐标系id',
    tips: '使用的日历坐标系的 ID',
    setters: ['number'],
    default: 0
  },

}

export default commonProperty