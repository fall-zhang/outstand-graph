<template>
  <PageLayout no-side>
    <template #header-icon>
      <IconReturn @click="onClickBack" style="cursor: pointer;" />
    </template>
    <div style="display: flex;overflow: hidden;">
      <div class="main-graph">
        <HeaderTools :option="chartOption" @back="onChangeHistory" @next="onChangeHistory"></HeaderTools>
        <ChartCanvas :option="chartOption" :chartId="chartId"></ChartCanvas>
      </div>
      <!-- 负责修改 chartOption -->
      <RightPanel :key="currentKey" class="right-panel" :chartOption="chartOption" @change="onChangeOption"></RightPanel>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import ChartCanvas from './chart-canvas/ChartCanvas.vue'
import RightPanel from './right-panel/RightPanel.vue'
import HeaderTools from './header-tools/HeaderTools.vue'
import { Return as IconReturn } from '@icon-park/vue-next'
import { PageLayout } from '@/layout'
import { v4 as uuid } from 'uuid'
const router = useRouter()

const onClickBack = () => router.go(-1)

const currentKey = ref(uuid())
let chartOption = ref({
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

// id 用来判断内容是否修改了，option表示
function onChangeOption(id: string, option: any) {
  chartOption.value = option
  chartId.value = id
}
function onChangeHistory(newVal: any) {
  const newId = uuid()
  chartId.value = newId
  currentKey.value = newId
  // chartOption = reactive(newVal)
}
</script>
<script lang="ts">
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
  overflow: hidden;
}
</style>
