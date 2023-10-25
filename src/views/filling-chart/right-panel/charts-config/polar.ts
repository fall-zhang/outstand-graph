import type { EchartsOption } from '../chart-config.d.ts'
import setting from './dictionary/commonProperty'

const polar: EchartsOption[] = [
  {
    keyId: 'id',
    keyName: 'ID',
    setters: ['input'],
    default: ''
  },
  setting.zlevel,
  setting.z,
  {
    keyId: 'center',
    keyName: '极坐标中心',
    setters: ['array'],
    default: ['50%', '50%']
  },
  {
    keyId: 'radius',
    keyName: '极坐标系的半径',
    setters: ['slider', 'input', 'array'],
    default: ['50%', '50%']
  },
  // {
  //   keyId: 'tooltip',
  //   keyName: '提示信息',
  //   setters: ['object'],
  //   default: {}
  // },
]

export default polar