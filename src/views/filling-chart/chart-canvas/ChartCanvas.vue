<template>
  <!-- 可以自定义容器的大小，允许用户拖拽以查看表现效果 -->
  <div style="height: 600px;width: 860px;">
    <!-- {{ chartId }} -->
    <div ref="chart-zoom" style="height: 100%;width: 100%;"></div>
  </div>
</template>

<script>
import { deepClone } from '@/utils/utils'
import { init } from 'echarts'
export default {
  name: 'ChartCanvas',
  props: {
    chartId: {
      require: true,
      default: '',
      type: String
    },
    option: {
      require: true,
      default: () => ({}),
      type: Object
    }
  },
  data() {
    return {
      currentChart: null
    }
  },
  computed: {},
  watch: {
    chartId(newVal) {
      // console.log(newVal);
      if (this.currentChart) {
        this.currentChart.setOption(this.option)
      }
    }
  },
  mounted() {
    this.currentChart = init(this.$refs['chart-zoom'])
    const chartOption = deepClone(this.option)
    // console.log(chartOption);
    this.currentChart.setOption(chartOption)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss"></style>
