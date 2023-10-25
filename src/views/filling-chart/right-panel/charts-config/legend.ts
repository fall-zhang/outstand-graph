// 图例可以为多个
import { textStyle } from './dictionary/commonOption'
import setting from './dictionary/commonProperty.js'
import type { EchartsOption } from '../chart-config.d.ts'
const legend: EchartsOption[] = [
  {
    keyId: 'type',
    keyName: '图例的类型',
    setters: ['select'],
    optionalValue: [
      { label: '普通图例', value: 'plain' },
      { label: '可滚动翻页图例', value: 'scroll' }
    ],
    default: 'plain',
  },
  // {
  //   keyId: "id",
  //   keyName: "图例的类型",
  //   setters: ['input'],
  //   default: 'plain',
  // },
  setting.show,
  // {
  //   keyId: "zlevel",
  //   keyName: "canvas 分层",
  //   setters: ['number'],
  //   default: 2,
  // },
  // ...positionConfig,
  setting.top,
  setting.right,
  setting.bottom,
  setting.left,
  setting.width,
  setting.height,
  {
    keyId: 'orient',
    keyName: '图例布局方向',
    setters: ['select'],
    optionalValue: [
      { label: '水平', value: 'horizontal' },
      { label: '垂直', value: 'vertical' }
    ],
    default: 'horizontal',
  },
  {
    keyId: 'align',
    keyName: '图例文本布局',
    setters: ['select'],
    optionalValue: [
      { label: '自动', value: 'auto' },
      { label: '居左', value: 'left' },
      { label: '居右', value: 'right' },
    ],
    default: 'horizontal',
  },
  {
    keyId: 'padding',
    keyName: '内边距',
    setters: ['slider', 'json', 'number'],
    default: 5,
  },
  {
    keyId: 'itemGap',
    keyName: '图例间距',
    setters: ['slider', 'number'],
    default: 10,
  },
  {
    keyId: 'itemWidth',
    keyName: '标记的宽度',
    setters: ['slider', 'number'],
    default: 25,
  },
  {
    keyId: 'itemHeight',
    keyName: '标记的高度',
    setters: ['slider', 'number'],
    default: 14
  },
  {
    keyId: 'itemStyle',
    tips: '属性的取值为 inherit 时，表示继承系列（series）中的属性值。',
    keyName: '图例样式',
    setters: ['object'],
    default: 14,
    children: [
      {
        keyId: 'color',
        keyName: '颜色',
        setters: ['color', 'input'],
        default: 'inherit'
      },
      {
        keyId: 'border',
        keyName: '边框颜色',
        setters: ['color', 'input'],
        default: 'inherit'
      },
      {
        keyId: 'borderWidht',
        keyName: '边框宽度',
        setters: ['slider', 'input', 'number'],
        default: 0
      },
      {
        keyId: 'borderType',
        keyName: '描边类型',
        tips: '可以设置为数组，实现更灵活的虚线',
        setters: ['select', 'json'],
        optionalValue: [
          { label: '实线', value: 'solid' },
          { label: '虚线', value: 'dashed' },
          { label: '点', value: 'dotted' },
        ],
        default: 'inherit'
      },
      {
        keyId: 'borderDashOffset',
        keyName: '虚线偏移',
        setters: ['select', 'number'],
        optionalValue: [
          { label: '继承', value: 'inherit' },
        ],
        default: 'inherit'
      },
      {
        keyId: 'borderCap',
        keyName: '虚线角类型',
        tips: '线段两侧的结束方式',
        setters: ['select'],
        optionalValue: [
          { label: '方形', value: 'butt' },
          { label: '圆形', value: 'round' },
          { label: '额外宽度方形', value: 'square' },
          { label: '继承（inherit）', value: 'inherit' }
        ],
        default: 'inherit'
      },
      // {
      //   keyId: "borderJoin",
      //   keyName: "拐角类型",
      //   tips: '线段如果存在拐角，拐角的展示方式',
      //   setters: ['select'],
      //   optionalValue: [
      //     { label: '延长线拐角', value: 'bevel' },
      //     { label: '圆形拐角', value: 'round' },
      //     { label: '切割形拐角', value: 'miter' },
      //     { label: '继承（inherit）', value: 'inherit' }
      //   ],
      //   default: 'inherit'
      // },
      // {
      //   keyId: "borderMiterLimit",
      //   keyName: "拐角限制",
      //   tips: '只有当 borderJoin 为切割型拐角（miter） 时， borderMiterLimit 才有效。',
      //   setters: ['number'],
      //   default: 'inherit'
      // },
      {
        keyId: 'shadowColor',
        keyName: '阴影颜色',
        setters: ['input', 'color'],
        default: 0
      },
      {
        keyId: 'shadowBlur',
        keyName: '阴影虚化',
        setters: ['slider', 'number'],
        default: 0
      },
      {
        keyId: 'shadowOffsetX',
        keyName: '阴影X轴偏移',
        setters: ['number', 'slider'],
        default: 0
      },
      setting.shadowOffsetY,
      setting.opacity,
      // {
      //   keyId: "decal",
      //   keyName: "图形的贴花图案",
      //   setters: ['json'],
      //   default: 0
      // },
    ]
  },
  {
    keyId: 'lineStyle',
    tips: '图例为线段时生效。属性为 inherit，表示继承系列（series）中的设置。',
    keyName: '图例样式：线',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'color',
        keyName: '线段颜色',
        setters: ['number', 'slider'],
        default: 0
      },
      setting.width,
      {
        keyId: 'type',
        keyName: '线段类型',
        setters: ['select', 'json'],
        optionalValue: [
          { label: '实线', value: 'solid' },
          { label: '虚线', value: 'dashed' },
          { label: '点', value: 'dotted' },
        ],
        default: 0
      },
      setting.dashOffset,
      {
        keyId: 'cap',
        keyName: '虚线类型',
        tips: '线段两侧的结束方式',
        setters: ['select'],
        optionalValue: [
          { label: '方形', value: 'butt' },
          { label: '圆形', value: 'round' },
          { label: '额外宽度方形', value: 'square' },
          { label: '继承（inherit）', value: 'inherit' }
        ],
        default: 'inherit'
      },
      // {
      //   keyId: "join",
      //   keyName: "拐角类型",
      //   tips: '线段如果存在拐角，拐角的展示方式',
      //   setters: ['select'],
      //   optionalValue: [
      //     { label: '延长线拐角', value: 'bevel' },
      //     { label: '圆形拐角', value: 'round' },
      //     { label: '切割形拐角', value: 'miter' },
      //     { label: '继承（inherit）', value: 'inherit' }
      //   ],
      //   default: 'inherit'
      // },
      // {
      //   keyId: "miterLimit",
      //   keyName: "拐角限制",
      //   tips: '只有当 borderJoin 为切割型拐角（miter） 时， borderMiterLimit 才有效。',
      //   setters: ['number'],
      //   default: 'inherit'
      // },
      setting.shadowColor,
      setting.shadowBlur,
      setting.shadowOffsetX,
      setting.shadowOffsetY,
      setting.opacity,
    ]
  }, {
    keyId: 'symbolRotate',
    keyName: '图形旋转角度',
    setters: ['number', 'input', 'slider'],
    default: 0
  }, {
    keyId: 'formatter',
    tips: '格式化图例文本，示例：集合{name}',
    keyName: '格式化文本',
    setters: ['input', 'function'],
    default: null
  }, {
    keyId: 'selectedMode',
    tips: '能否点击修改图标状态',
    keyName: '允许点击',
    setters: ['switch', 'select'],
    optionalValue: [
      { label: '多选', value: 'multiple' },
      { label: '单选', value: 'single' },
    ],
    default: true
  }, {
    keyId: 'inactiveColor',
    tips: '图例关闭后的颜色',
    keyName: '关闭颜色',
    setters: ['color', 'input'],
    default: '#ccc'
  }, {
    keyId: 'inactiveBorderColor',
    tips: '图例关闭后的描边颜色',
    keyName: '关闭描边颜色',
    setters: ['color', 'input'],
    default: '#ccc'
  }, {
    keyId: 'inactiveBorderWidth',
    tips: '图例关闭后的描边颜色',
    keyName: '关闭描边宽度',
    setters: ['slider', 'number', 'input'],
    default: 0
  }, {
    keyId: 'selected',
    tips: '默认选中列表，选中项的值应该为 true',
    keyName: '默认选中列表',
    setters: ['json'],
    default: {}
  },
  {
    keyId: 'textStyle',
    keyName: '文本样式',
    setters: ['object'],
    default: {},
    children: textStyle.children
  },
  {
    keyId: 'tooltip',
    tips: '图例提示，默认同 tooltip',
    keyName: '图例提示',
    setters: ['object'],
    default: {},
  },
  {
    keyId: 'icon',
    tips: '可以为 DataURI，或者通过 image://url 添加图片链接，path://path 添加矢量路径',
    keyName: '图例提示',
    setters: ['select'],
    optionalValue: [
      { label: '圆形', value: 'circle' },
      { label: '矩形', value: 'rect' },
      { label: '圆角矩形', value: 'roundRect' },
      { label: '三角形', value: 'triangle' },
      { label: '钻石形', value: 'diamond' },
      { label: '别针', value: 'pin' },
      { label: '箭头', value: 'arrow' },
      { label: '无', value: 'none' },
    ],
    default: 'roundRect',
  },
  {
    keyId: 'data',
    tips: '可以一项一项地设置 lengend',
    keyName: '图例内容',
    setters: ['json'],
    default: {},
    // children: [
    //   {
    //     keyId: 'name'
    //   },
    //   {
    //     keyId: 'icon'
    //   },
    //   {
    //     keyId: 'itemStyle'
    //   },
    //   {
    //     keyId: 'lineStyle'
    //   },
    //   {
    //     keyId: 'symbolRotate'
    //   },
    //   {
    //     keyId: 'textStyle'
    //   },
    // ],
  },
  setting.backgroundColor,
  setting.borderColor,
  setting.borderRadius,
  setting.shadowBlur,
  setting.shadowColor,
  setting.shadowOffsetX,
  setting.shadowOffsetY,
  {
    // 一般也不会使用 setOption 更改定位，因为太过于笨重
    keyId: 'scrollDataIndex',
    keyName: '默认滚动位置',
    setters: ['number'],
    default: 0
  },
  {
    keyId: 'pageButtonGap',
    tips: '图例控制块和图例项之间的间隔',
    keyName: '图例间隔',
    setters: ['number', 'slider'],
    default: 5
  },
  {
    keyId: 'pageButtonItemGap',
    tips: '控制按钮和翻页功能之间的间距',
    keyName: '按钮间隔',
    setters: ['number', 'slider'],
    default: 5
  },
  {
    keyId: 'pageButtonPosition',
    tips: '图例为 滚动（scroll） 时有效',
    keyName: '滚动按钮间隔',
    optionalValue: [
      { label: '控制块在左或上', value: 'start' },
      { label: '控制块在右或下', value: 'end' }
    ],
    setters: ['number', 'slider'],
    default: 5
  },
  {
    keyId: 'pageFormatter',
    tips: '默认为{current}/{total}，括号内表示要渲染的当前页码和总页码',
    keyName: '页格式',
    setters: ['input'],
    default: '{current}/{total}'
  },
  {
    keyId: 'pageIcons',
    tips: '配置前后翻页的 icon 图标',
    keyName: '翻页图标',
    setters: ['json'],
    default: {
      horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
      vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']
    }
  },
  {
    keyId: 'pageIconColor',
    tips: '配置前后翻页的 icon 图标',
    keyName: '翻页图标颜色',
    setters: ['color', 'input'],
    default: '#2f4554'
  },
  {
    keyId: 'pageIconInactiveColor',
    tips: '无法继续翻页时的颜色',
    keyName: '无法翻页颜色',
    setters: ['color', 'input'],
    default: '#aaa'
  },
  {
    keyId: 'pageIconSize',
    keyName: '翻页图标字号',
    setters: ['slider', 'number', 'json'],
    default: 15
  },
  {
    keyId: 'pageTextStyle',
    keyName: '图例字体样式',
    setters: ['json'],
    default: {}
  },
  {
    keyId: 'animation',
    keyName: '启用翻页动画',
    setters: ['switch'],
    default: true
  },
  {
    keyId: 'animationDurationUpdate',
    keyName: '翻页动画时长',
    setters: ['number'],
    default: 800
  },
  // 待完善
  // {
  //   keyId: "emphasis",
  //   keyName: "强调",
  //   setters: ['number'],
  //   default: 800，
  //   children:[]
  // },
  {
    keyId: 'selector',
    tips: `支持全选和反选功能，需要手动开启<a href="https://echarts.apache.org/zh/option.html#legend.selector">详情</a>`,
    keyName: '开启选择反选',
    setters: ['switch'],
    default: false
  },
  // {
  //   keyId: "selectorLabel",
  //   tips: `需要开启选择器功能`,
  //   keyName: "选择器文本",
  //   setters: ['json'],
  //   default: false
  // },
  {
    keyId: 'selectorPosition',
    keyName: '选择功能位置',
    setters: ['select'],
    optionalValue: [
      { label: '自动', value: 'auto' },
      { label: '开始', value: 'start' },
      { label: '结束', value: 'end' },
    ],
    default: 'auto'
  },
  {
    keyId: 'selectorItemGap',
    keyName: '选择按钮间隔',
    setters: ['slider', 'number'],
    default: 7
  },
  {
    keyId: 'selectorButtonGap',
    keyName: '图例按钮间隔',
    setters: ['slider', 'number'],
    default: 10
  },
]

export default legend