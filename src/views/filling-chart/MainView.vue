<template>
  <div style="display: flex;height: 100%;">
    <LeftZone class="left-panel"></LeftZone>
    <div class="main-graph">
      <!-- chartOption 的消费者，不参与任何修改 chartOption -->
      <HeaderTools :option="chartOption" @back="onChangeHistory" @next="onChangeHistory"></HeaderTools>
      <ChartCanvas :option="chartOption" :chartId="chartId"></ChartCanvas>
    </div>
    <!-- 负责修改 chartOption -->
    <RightPanel :key="currentKey" class="right-panel" :chartOption="chartOption" @change="onChangeOption"></RightPanel>
  </div>
  <!-- <el-button size="small" @click="onChangeData"> 切换 </el-button> -->
</template>

<script lang="ts">
// import ChartCanvas from './chart-canvas/ChartCanvas.vue'
// import RightPanel from './right-panel/PanelPage.vue'
import RightPanel from './right-panel/RightPanel.vue'
import HeaderTools from './header-tools/HeaderTools.vue'
import LeftZone from './left-zone/LeftZone.vue'
import { v4 as uuid } from 'uuid'
// import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const ChartCanvas = defineAsyncComponent(() => import('./chart-canvas/ChartCanvas.vue'))
export default {
  name: 'MainView',
  components: {
    ChartCanvas,
    RightPanel,
    HeaderTools,
    LeftZone
  },
  provide() {
    return {
      chartOption: this.chartOption,
    }
  },
  data() {
    return {
      chartId: '',
      currentKey: uuid(),
      chartOption: {
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
      },
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.chartId = this.$route.params.id
    }
  },
  methods: {
    onChangeData() {
      const id = uuid()
      this.currentKey = id
      this.chartId = id
      this.chartOption = {
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
      }
      console.log(this.currentKey)
      console.log(this.chartOption)
    },
    // id 用来判断内容是否修改了，option表示
    onChangeOption(id, option) {
      // console.log('最新的更改为', option)
      // console.log(this.chartId, 'dfdfsafsdfasdf');
      this.chartId = id
      this.chartOption = option
    },
    onChangeHistory(newVal) {
      // console.log('历史已生效', newVal)
      const newId = uuid()
      this.chartId = newId
      this.currentKey = newId
      this.chartOption = newVal
    }
  }
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
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
}
</style>
