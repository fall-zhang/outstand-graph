
// {
//   keyId: "show", // ehcarts 中的属性名称
//   keyName: "高度", // 当前内容高度
//   setters: ['input'], // 多个设置方式，如果是数值，可以采用 slider，滑块
//   optionalVal: [], // 提供 select 或者级联选择调取，可选值
//   tips: "", // 提供的详情介绍
//   default: "", // 默认内容同 echarts 提供的内容
//   children: [], // 子属性节点
// }

// setters 可设置的类型：
// 简单类型，同 form 表单
// input
// textarea
// color
// switch
// slider
// 复杂类型
// function，会提供并且创建一个函数进行书写
// json 会使用 JSON.parse 进行解析的复杂数据
// 嵌套类型，组件嵌套组件
// object 以 children 的 keyId 作为 key 的对象
// array 数组（以 children 的 keyId 作为 key 的对象构成）
import xAxisConfig from './charts-config/xAxis.js'
import titleConfig from './charts-config/title.js'
import yAxisConfig from './charts-config/yAxis.js'
import legendConfig from './charts-config/legend.js'
import { textStyle } from './charts-config/dictionary/common-option.js'
export default [
  {
    keyId: 'xAxis',
    keyName: '横轴',
    setters: ['array'],
    default: {},
    children: xAxisConfig
  },
  {
    keyId: 'title',
    keyName: '标题',
    setters: ['array'],
    default: {},
    children: titleConfig
  },
  {
    keyId: 'yAxis',
    keyName: '纵轴',
    setters: ['array'],
    default: {},
    children: yAxisConfig
  },
  {
    keyId: 'legend',
    tips: '需要数据提供名称（name）属性',
    keyName: '图例',
    setters: ['array'],
    default: {},
    children: legendConfig
  },
  // {
  //   keyId: "darkMode",
  //   keyName: "黑暗模式",
  //   setters: ['switch'],
  //   default: false
  // },
  {
    keyId: 'color',
    keyName: '颜色列表',
    tips: '不同的 series 拥有不同的颜色',
    setters: ['json'],
    default: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  },
  {
    keyId: 'backgroundColor',
    keyName: '背景颜色',
    setters: ['color', 'input'],
    default: ''
  },
  textStyle,
  {
    keyId: 'animation',
    keyName: '动画',
    setters: ['switch'],
    default: true
  }
]
