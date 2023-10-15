<template>
  <el-tabs type="border-card">
    <el-tab-pane label="图表属性">
      <PanelPage />
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
// import { toRaw } from 'vue'
import rightProperty from './right-property'
import { deepClone } from '@/utils/utils'
// import FormJSON from './components/FormJSON.vue'
// import FormItem from './FormItem.vue'
// import FormZone from './FormZone.vue'
import PanelPage from './PanelPage.vue'
// import app from '@/main.js'
// console.log(app);
// app.component('FormZone', FormZone)
// app.component('FormItem', FormItem)
// console.log(rightProperty)

defineProps({
  chartOption: {
    require: false,
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['change'])
const option = reactive<any>({})
// const formOption = reactive<any>({})
const dataProperty = reactive({})
// const rightProperty = reactive({})
onBeforeMount(() => {
  // this.option = deepClone(toRaw(this.chartOption)) as any
  // this.dataProperty = JSON.stringify(this.option.series[0].data)
})
function onChangeSimpleValue(option: any, newVal: object) {
  // console.log('新的配置', option)
  option[option.keyId] = newVal
  // 开发计划：移除 series.data 中的 id，避免二次渲染错误
  emit('change', uuid(), deepClone(option))
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__content) {
  padding: 0;
  margin-left: 0;
  padding-right: 16px;
  height: calc(100% - 38px);
  overflow: auto;
  transform: translate(0, 0);
}
</style>
