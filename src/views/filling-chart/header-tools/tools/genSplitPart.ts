
export const genJSCode = (option: any) => {
  const chartOption = JSON.stringify(option)
  return `
  import { init } from 'echarts';
  const currentChart = init(this.$refs['chart-zoom'])

  const option = ${chartOption}
  currentChart.setOption(option)
`
}

export const genTemplateCode = (option: any) => {
  return `
  <template>
  <div style="height: 600px;width: 860px;">
    <div ref="chart-zoom" style="height: 100%;width: 100%;"></div>
  </div>
</template>
`
}