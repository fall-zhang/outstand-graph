/**
 * 坐标轴指示器
 * 只在全局进行设置
 */

import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'

const axisPointer: EchartsOption[] = [
  {
    keyId: 'show',
    keyName: '展示坐标指示器',
    setters: ['number', 'slider'],
    default: 90,
  },
  {
    keyId: 'type',
    keyName: '指示器类型',
    setters: ['select'],
    optionalValue: [
      { label: '线型', value: 'line' },
      { label: '阴影', value: 'shadow' },
      { label: '无', value: 'none' },
    ],
    default: 'none',
  },
  {
    keyId: 'snap',
    keyName: '自动吸附',
    tips: '坐标轴指示器是否自动吸附到点上。默认自动判断。',
    setters: ['switch'],
    default: 'none',
  },
  setting.z,
  {
    keyId: 'label',
    keyName: '文本标签',
    tips: '坐标轴指示器的文本标签。',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'show',
        keyName: '展示文本标签',
        setters: ['switch'],
        tips: '坐标轴指示器的文本标签。',
      }
    ]
  },
  {
    keyId: 'lineStyle',
    keyName: '指示线设置',
    tips: '指示器类型（type）为线型（line）时有效',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'color',
        keyName: '颜色',
        setters: ['color', 'input'],
      }
    ]
  },
  {
    keyId: 'shadowStyle',
    keyName: '指示阴影设置',
    tips: '坐标轴指示器的文本标签。',
    setters: ['object'],
    default: {},
    children: [
      {
        keyId: 'color',
        keyName: '阴影颜色',
        setters: ['color', 'input'],
      }
    ]
  },
  {
    keyId: 'triggerEmphasis',
    keyName: '系列强调功能',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'triggerTooltip',
    keyName: '触发弹窗',
    tips: '是否触发 tooltip',
    setters: ['switch'],
    default: true,
  },
  {
    keyId: 'value',
    keyName: '触发内容当前值',
    tips: '设定当前值，从而决定 axisPointer 的初始位置',
    setters: ['number'],
    default: undefined,
  },
  {
    keyId: 'status',
    keyName: '当前状态',
    setters: ['select'],
    optionalValue: [
      { label: '隐藏', value: 'hide' },
      { label: '显示', value: 'show' }
    ],
    default: undefined,
  },
  {
    keyId: 'handle',
    keyName: '拖拽手柄',
    tips: '拖拽手柄，适用于触屏的环境',
    setters: ['object'],
    children: [
      {
        keyId: 'show',
        keyName: '展示',
        setters: ['switch'],
      }
    ],
    default: {},
  },
  {
    keyId: 'link',
    keyName: '多个提示轴联动',
    tips: '联动表示轴能同步一起活动。',
    setters: ['array'],
    default: {},
  },
  {
    keyId: 'triggerOn',
    keyName: '提示框触发条件',
    tips: '默认移动和点击时触发',
    setters: ['select'],
    optionalValue: [
      { label: '鼠标移动', value: 'mousemove' },
      { label: '鼠标点击', value: 'click' },
      { label: '鼠标移动和点击', value: 'mousemove|click' },
      { label: '移动和点击不触发', value: 'none' },
    ],
    default: 'mousemove|click',
  },
]
export default axisPointer