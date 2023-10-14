<template>
  <div style="height: 100%;">
    <div style="display: flex;height: 98%;">
      <LeftZone class="left-panel"></LeftZone>
      <div class="main-graph">
        <!-- chartOption 的消费者，不参与任何修改 chartOption -->
        <HeaderTools :option="chartOption" @back="onChangeHistory" @next="onChangeHistory"></HeaderTools>
        <ChartCanvas :option="chartOption" :chartId="chartId"></ChartCanvas>
      </div>
      <!-- 负责修改 chartOption -->
      <RightPanel :key="currentKey" class="right-panel" :chartOption="chartOption" @change="onChangeOption"></RightPanel>
    </div>
    <el-button size="small" @click="onChangeData"> 切换 </el-button>
  </div>
</template>

<script setup>
import ChartCanvas from './chart-canvas/ChartCanvas.vue'
import RightPanel from './right-panel/RightPanel.vue'
import HeaderTools from './header-tools/HeaderTools.vue'
import LeftZone from './left-zone/LeftZone.vue'
import { v4 as uuid } from 'uuid'
import { provide, reactive, ref } from 'vue'


const currentKey = ref(uuid())
let chartOption = reactive({
  xAxis: {
    show: true,
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
provide('chartOption', chartOption)
const chartId = ref('')

function onChangeData() {
  const id = uuid()
  currentKey.value = id
  chartId.value = id
  chartOption = reactive({
    title: {
      text: '廉颇老矣'
    },
    xAxis: {
      show: true,
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'bar'
      }
    ]
  })
  // console.log(currentKey)
  // console.log(chartOption)
}
// id 用来判断内容是否修改了，option表示
function onChangeOption(id, option) {
  console.log('最新的更改为', option)
  // console.log(this.chartId, 'dfdfsafsdfasdf');
  // chartId.value = id
  // chartOption.value = option
}
function onChangeHistory(newVal) {
  console.log('历史已生效', newVal)
  const newId = uuid()
  chartId.value = newId
  currentKey.value = newId
  chartOption = reactive(newVal)
}
</script>
<script>
export default {
  name: 'MainView',
}
</script>
<style scoped lang="scss">
.left-panel {
  flex-shrink: 0;
  flex-grow: 0;
}

.main-graph {
  flex-grow: 1;
  flex-shrink: 1;
}

.right-panel {
  flex-basis: 360px;
  width: 360px;
  height: 100%;
}
</style>
