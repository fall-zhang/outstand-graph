/**
 * 提示信息
 * 只在全局进行设置
 */
import { textStyle } from './dictionary/commonOption.js'
import setting from './dictionary/commonProperty.js'
import type { EchartsOption } from '../chart-config.d.ts'
const tooltip: EchartsOption[] = [
  {
    keyId: 'show',
    keyName: '展示提示',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'trigger',
    keyName: '触发时机',
    setters: ['switch'],
    default: 'line',
    optionalValue: [
      { label: '数据项触发（散点/饼图）', value: 'item' },
      { label: '坐标轴触发', value: 'axis' },
      { label: '不触发', value: 'none' },
    ],
  },
  {
    keyId: 'axisPointer',
    keyName: '触发时机',
    setters: ['object'],
    default: {},
    children: [{
      keyId: 'type',
      keyName: '指示器类型',
      setters: ['select'],
      default: 'line',
      optionalValue: [
        { label: '直线指示器', value: 'line' },
        { label: '阴影指示器', value: 'shadow' },
        { label: '无指示器', value: 'none' },
        { label: '十字指示器', value: 'cross' },
      ],
    }, {
      keyId: 'axis',
      keyName: '指示器坐标轴',
      setters: ['select'],
      default: 'line',
      optionalValue: [
        { label: 'x 坐标轴', value: 'x' },
        { label: 'y 坐标轴', value: 'y' },
        { label: 'radius', value: 'radius' },
        { label: 'angle', value: 'angle' },
      ],
    }, {
      keyId: 'snap',
      keyName: '自动吸附',
      setters: ['switch'],
      default: false,
    }, {
      keyId: 'label',
      keyName: '指示器文本',
      setters: ['switch'],
      default: {},
      children: [{
        keyId: 'show',
        keyName: '是否展示',
        setters: ['switch'],
        default: false,
      }],
    }, {
      keyId: 'lineStyle',
      keyName: '触发时机',
      setters: ['switch'],
      default: {},
      children: [{
        keyId: 'show',
        keyName: '是否展示',
        setters: ['switch'],
        default: false,
      }],
    }, {
      keyId: 'shadowStyle',
      keyName: '阴影',
      setters: ['switch'],
      default: {},
      children: [{
        keyId: 'show',
        keyName: '是否展示',
        setters: ['switch'],
        default: false,
      }],
    }, {
      keyId: 'crossStyle',
      keyName: '触发时机',
      setters: ['switch'],
      default: {},
      children: [{
        keyId: 'show',
        keyName: '是否展示',
        setters: ['switch'],
        default: false,
      }],
    },
    setting.animation,
    setting.animationThreshold,
    setting.animationDuration,
    setting.animationEasing,
    setting.animationDelay,
    setting.animationDurationUpdate,
    setting.animationEasingUpdate,
    setting.animationDelayUpdate,
    ],
  },
  {
    keyId: 'showContent',
    keyName: '显示框浮层',
    setters: ['switch'],
    tips: '只需 tooltip 触发事件或显示 axisPointer 而不需要显示内容时可配置该项为 false',
    default: true,
  },
  {
    keyId: 'alwaysShowContent',
    keyName: '一直显示内容',
    setters: ['switch'],
    tips: '在移出可触发提示框区域后是否展示',
    default: false,
  },
  {
    keyId: 'triggerOn',
    keyName: '触发时机',
    setters: ['select'],
    optionalValue: [
      { label: '鼠标移动', value: 'mousemove' },
      { label: '鼠标点击', value: 'click' },
      { label: '鼠标移动和点击', value: 'mousemove|click' },
      { label: '移动和点击不触发', value: 'none' },
    ],
    default: 'mousemove|click',
  },
  {
    keyId: 'showDelay',
    keyName: '显示的延迟',
    tips: '浮层显示的延迟，单位为 ms',
    setters: ['number'],
    default: 100,
  },
  {
    keyId: 'hideDelay',
    keyName: '隐藏的延迟',
    tips: '浮层隐藏的延迟，单位为 ms',
    setters: ['number'],
    default: 100,
  },
  {
    keyId: 'enterable',
    keyName: '鼠标可进入浮层',
    tips: '默认为 false，如需详情内交互，如添加链接，按钮，可设置为 true',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'renderMode',
    keyName: '渲染类型',
    tips: '默认为 false，如需详情内交互，如添加链接，按钮，可设置为 true',
    setters: ['select'],
    optionalValue: [
      { label: 'HTML', value: 'html' },
      { label: '富文本', value: 'richText' },
    ],
    default: 'html',
  },
  {
    keyId: 'confine',
    keyName: '限制渲染范围',
    tips: '将弹窗范围限制在图表区域内',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'appendToBody',
    keyName: '渲染到 body',
    tips: '将 tooltip 的 DOM 节点作为 HTML 的 <body> 的子节点。 renderMode（渲染类型） 为 html 时生效。',
    setters: ['switch'],
    default: false,
  },
  {
    keyId: 'className',
    keyName: '类名',
    tips: '指定 tooltip 的类名，renderMode（渲染类型） 为 html 时生效。',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'transitionDuration',
    keyName: '动画过度时间',
    tips: '提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。',
    setters: ['number'],
    default: 0.4,
  },
  {
    keyId: 'position',
    keyName: '动画过度时间',
    tips: '只在 trigger 为 item 的时候有效。可以为数组，调整 [x,y] 位置',
    setters: ['json', 'select'],
    optionalValue: [
      { label: '鼠标所在图形中心', value: 'inside' },
      { label: '鼠标所在图形上侧', value: 'top' },
      { label: '鼠标所在图形左侧', value: 'left' },
      { label: '鼠标所在图形右侧', value: 'right' },
      { label: '鼠标所在图形底侧', value: 'bottom' },
    ],
    default: '',
  },
  {
    keyId: 'formatter',
    keyName: '浮窗格式',
    tips: ' {a}, {b}, {c}, {d}, {e}，分别表示系列名，数据名，数据值等。',
    // https://echarts.apache.org/zh/option.html#tooltip.formatter
    // 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
    // 散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
    // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
    // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
    setters: ['json', 'select'],
    default: '',
  },
  {
    keyId: 'valueFormatter',
    keyName: '浮窗格式',
    tips: '值显示部分的格式化回调函数。',
    // 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
    // 散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
    // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
    // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
    setters: ['json', 'select'],
    default: '',
  },
  {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: 'rgba(50,50,50,0.7)',
  },
  setting.borderColor,
  setting.borderWidth,
  {
    keyId: 'padding',
    keyName: '背景颜色',
    setters: ['number', 'json'],
    default: 5,
  },
  textStyle,
  {
    keyId: 'extraCssText',
    keyName: '额外附加样式',
    setters: ['input'],
    default: '',
  },
  {
    keyId: 'seriesAsc',
    keyName: '排列顺序',
    setters: ['select'],
    optionalValue: [
      { label: '系列声明，升序排列', value: 'seriesAsc' },
      { label: '系列声明，降序排列', value: 'seriesDesc' },
      { label: '数据值，升序排列', value: 'valueAsc' },
      { label: '数据值，降序排列', value: 'valueDesc' },
    ],
    default: 'seriesAsc',
  }
]

export default tooltip