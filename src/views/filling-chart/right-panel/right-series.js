import seriesBar from './charts-config/series-bar.js'
import seriesLine from './charts-config/series-line.js'
import seriesPie from './charts-config/series-pie.js'

// series 比较特殊，是根据对象中的 Type 属性来确定当前数据的内容
// 所以，series 必须通过对象提供完整的属性
export default {
  bar: seriesBar,
  line: seriesLine,
  pie: seriesPie
}

