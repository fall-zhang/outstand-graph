<template>
  <el-tabs type="border-card">
    <el-tab-pane label="图表属性">
      <PropertyPagePanel :receiveValue="chartOption" @change="onChangeSimpleValue" />
    </el-tab-pane>
    <!-- <el-tab-pane label="图表类型">
      <SerisePagePanel :receiveValue="chartOption">
      </SerisePagePanel>
    </el-tab-pane> -->
    <!-- <el-tab-pane label="配置代码">
      <FormJSON v-model="option" type="textarea" style="height:600px"></FormJSON>
    </el-tab-pane> -->
  </el-tabs>
</template>

<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import PropertyPagePanel from './PropertyPagePanel.vue'
import SerisePagePanel from './SerisePagePanel.vue'

defineProps({
  chartOption: {
    require: false,
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['change'])
function onChangeSimpleValue(option: any) {
  console.log('最新的配置：🚀 ~ file: RightPanel.vue:28 ~ onChangeSimpleValue ~ option:', option)
  // 开发计划：移除 series.data 中的 id，避免二次渲染错误
  emit('change', uuid(), option)
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__content) {
  padding: 0;
  margin-left: 0;
  // padding-right: 16px;
  height: calc(100% - 38px);
  // overflow: auto;
  transform: translate(0, 0);
}
</style>
