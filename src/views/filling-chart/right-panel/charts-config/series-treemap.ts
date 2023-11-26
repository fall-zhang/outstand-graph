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
    keyId: 'data',
    keyName: '数据配置',
    tips: '传入数据格式为数组，children 为子项，name 为描述文字，itemStyle 定义样式',
    setters: ['json', 'object'],
    children: [
      {
        keyId: 'visualDimension',
        keyName: '视觉映射',
        setters: ['number'],
        default: 1
      }
    ],
    default: [
      {
        value: 1212,
        children: [
          {
            value: 2323,    // value字段的值，对应到面积大小。
            // 也可以是数组，如 [2323, 43, 55]，则数组第一项对应到面积大小。
            // 数组其他项可以用于额外的视觉映射，详情参见 series-treemp.levels。
            id: 'someid-1', // id 不是必须设置的。
            // 但是如果想使用 API 来改变某个节点，需要用 id 来定位。
            name: 'description of this node', // 显示在矩形中的描述文字。
            label: {        // 此节点特殊的 label 定义（如果需要的话）。
              // label的格式参见 series-treemap.label。
            },
            itemStyle: {    // 此节点特殊的 itemStyle 定义（如果需要的话）。label的格式参见 series-treemap.itemStyle。
            }
          },
          {
            value: 4545,
            id: 'someid-2',
            name: 'description of this node',
            children: [
              {
                value: 5656,
                id: 'someid-3',
                name: 'description of this node',
                children: []
              },
            ]
          }
        ]
      },
      {
        value: [23, 59, 12]
        // 如果没有children，可以不写
      },
    ],
  },
  setting.left,
  setting.top,
  setting.right,
  setting.bottom,
  setting.width,
  setting.height,
  {
    keyId: 'squareRaito',
    keyName: '矩形长宽比率',
    tips: '布局计算时会尽量向这个比率靠近，默认为黄金比',
    setters: ['input', 'number'],
    default: `0.5 * (1 + Math.sqrt(5))`,
  },
  {
    keyId: 'leafDepth',
    keyName: '默认层级',
    tips: '默认展示多少层，其它层通过下钻（drill down）进入。',
    setters: ['number', 'slider'],
    default: 0,
  },
  {
    keyId: 'drillDownIcon',
    keyName: '下钻标志符',
    tips: '节点可以下钻时的提示符',
    setters: ['input'],
    default: '▶',
  },
  {
    keyId: 'roam',
    keyName: '移动和缩放',
    setters: ['select'],
    optionalValue: [
      { label: '仅缩放', value: 'scale' },
      { label: '仅平移', value: 'move' },
      { label: '开启', value: true },
      { label: '禁用', value: false },
    ],
    default: true,
  },
  {
    keyId: 'nodeClick',
    keyName: '点击行为',
    setters: ['select'],
    optionalValue: [
      { label: '缩放到节点', value: 'zoomToNode' },
      { label: '链接跳转', value: 'link' },
      { label: '无反应', value: false },
    ],
    default: 'zoomToNode',
  },
  {
    keyId: 'zoomToNodeRatio',
    keyName: '点击放大比例',
    setters: ['number'],
    default: 0.32 * 0.32,
  },
  {
    keyId: 'visualDimension',
    keyName: '视觉映射',
    tips: '对数据其他维度进行视觉映射',
    setters: ['number'],
    default: 0,
  },
  {
    keyId: 'visualMin',
    keyName: '层级最小值',
    tips: '手动控制了 visual mapping 的值域（当 colorMappingBy 为 value 时有意义）',
    setters: ['number', 'json'],
    default: '',
  },
  {
    keyId: 'visualMax',
    keyName: '层级最大值',
    setters: ['number'],
    default: '',
  },
  {
    keyId: 'colorAlpha',
    keyName: '透明度范围',
    tips: '默认的颜色透明度选取范围（0 ~ 1）可以为：[0.3, 1]',
    setters: ['number', 'json'],
    default: 0,
  },
  {
    keyId: 'colorSaturation',
    keyName: '饱和度范围',
    tips: '默认的节点的颜色饱和度范围（0 ~ 1）可以为：[0.3, 1]',
    setters: ['number', 'json'],
    default: 0,
  },
  {
    keyId: 'colorMappingBy',
    keyName: '选择颜色方式',
    tips: '默认的节点的颜色饱和度范围（0 ~ 1）可以为：[0.3, 1]',
    setters: ['select', 'json'],
    optionalValue: [
      { label: '节点的值', value: 'value' },
      { label: '节点的序号', value: 'index' },
      { label: '节点的 id', value: 'id' },
    ],
    default: 0,
  },
  {
    keyId: 'visibleMin',
    keyName: '小节点隐藏',
    tips: '小于这个数值（单位：px平方），这个节点就不显示',
    setters: ['number', 'json'],
    default: 10,
  },
  {
    keyId: 'visibleMin',
    keyName: '子节点隐藏',
    tips: '小于这个数值（单位：px平方），这个节点就不显示',
    setters: ['number', 'json'],
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
    keyId: 'upperLabel',
    keyName: '父节点标签',
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
    keyId: 'itemStyle',
    keyName: '树形图总样式',
    tips: '样式',
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
  {
    keyId: 'breadcrumb',
    keyName: '面包屑导航',
    tips: '面包屑，显示当前节点的路径',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '是否展示',
        setters: ['switch'],
        default: false
      }
    ],
    default: true,
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
    keyId: 'levels',
    keyName: '多层配置',
    setters: ['object', 'function'],
    children: [
      {
        keyId: 'visualDimension',
        keyName: '视觉映射',
        setters: ['number'],
        default: 1
      }
    ],
    default: {},
  },
  setting.silent,
  setting.animationDuration,
  setting.animationEasing,
  setting.animationDelay,
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