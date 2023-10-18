<template>
  <el-tabs type="border-card">
    <el-tab-pane label="图表属性">
      <PropertyPagePanel :receiveValue="chartOption" @change="onChangeSimpleValue" />
    </el-tab-pane>
    <!-- <el-tab-pane label="数据属性">
      <FormZone :receiveValue="option.series" :formOption="{ keyId: 'series' }" @change="onChangeSimpleValue"></FormZone>
    </el-tab-pane>
    <el-tab-pane label="配置代码">
      <FormJSON v-model="option" type="textarea" style="height:600px"></FormJSON>
    </el-tab-pane> -->
  </el-tabs>
</template>

<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import PropertyPagePanel from './PropertyPagePanel.vue'

defineProps({
  chartOption: {
    require: false,
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['change'])
function onChangeSimpleValue(option: any) {
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
