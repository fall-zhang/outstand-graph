// 简单类型，同 form 表单
type ChartSettersSimple = 'input' | 'textarea' | 'color' | 'switch' | 'slider' | 'select' | 'number'

// 复杂类型
// function，会提供并且创建一个函数进行书写
// json 会使用 JSON.parse 进行解析的复杂数据
type ChartSettersComplex = 'function' | 'json'

type Recurrence = 'array' | 'object'

// 嵌套类型，组件嵌套组件
// 以 children 的 keyId 作为 key 的对象构成


type OptionalSelect = Array<{ label: string, value: string }>
interface EchartsOption {
  keyId: string, // ehcarts 中的属性名称
  keyName: string, // 当前内容高度
  setters: Array<ChartSettersSimple | ChartSettersComplex | Recurrence>, // 多个设置方式，如果是数值，可以采用 slider，滑块
  optionalValue?: OptionalSelect, // 提供 select 或者级联选择调取，可选值
  tips?: string, // 提供的详情介绍
  default?: unknown, // 默认内容同 echarts 提供的内容
  children?: Array<EchartsOption>, // 子属性节点
  // 当某些属性启动时，可以使用
  // optionEnable: ['!xAxis.max', 'xAxis.min']
}

// 示例
// {
//   keyId: "show", // ehcarts 中的属性名称
//   keyName: "高度", // 当前内容高度
//   setters: ['input'], // 多个设置方式，如果是数值，可以采用 slider，滑块
//   optionalVal: [], // 提供 select 或者级联选择调取，可选值
//   tips: "", // 提供的详情介绍
//   default: "", // 默认内容同 echarts 提供的内容
//   children: [], // 子属性节点
// }

export {
  EchartsOption
}

