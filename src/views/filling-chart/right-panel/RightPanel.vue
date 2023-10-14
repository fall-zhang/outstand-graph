<template>
  <el-tabs type="border-card">
    <el-tab-pane label="图表属性（新）">
      <PanelPage :formOption="formOption" />
      <!-- <FormItem v-for="item in rightProperty" :key="item.keyId" :formOption="item" :receiveValue="option[item.keyId]"
        @change="onChangeSimpleValue">
      </FormItem> -->
    </el-tab-pane>
    <el-tab-pane label="图表属性">
      <FormItem v-for="item in rightProperty" :key="item.keyId" :formOption="item" :receiveValue="option[item.keyId]"
        @change="onChangeSimpleValue">
      </FormItem>
    </el-tab-pane>
    <el-tab-pane label="数据属性">
      <FormZone :receiveValue="option.series" :formOption="{ keyId: 'series' }" @change="onChangeSimpleValue"></FormZone>
    </el-tab-pane>
    <el-tab-pane label="配置代码">
      <FormJSON v-model="option" type="textarea" style="height:600px"></FormJSON>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { v4 as uuid } from 'uuid'
import { toRaw } from 'vue'
import rightProperty from './right-property.js'
import { deepClone } from '@/utils/utils'
import FormJSON from './components/FormJSON.vue'
import FormItem from './FormItem.vue'
import FormZone from './FormZone.vue'
import PanelPage from './PanelPage.vue'
// import app from '@/main.js'
// console.log(app);
// app.component('FormZone', FormZone)
// app.component('FormItem', FormItem)
console.log(rightProperty)
export default {
  name: 'RightPanel',
  components: {
    FormJSON,
    FormItem,
    PanelPage,
    FormZone
  },
  props: {
    chartOption: {
      require: false,
      type: Object,
      default: () => ({})
    }
  },
  emits: ['change'],
  data() {
    return {
      option: {},
      rightProperty
    }
  },
  created() {
    this.option = deepClone(toRaw(this.chartOption))
    this.dataProperty = JSON.stringify(this.option.series[0].data)
  },
  methods: {
    onChangeSimpleValue(option, newVal) {
      // console.log('新的配置', option)
      this.option[option.keyId] = newVal
      // 开发计划：移除 series.data 中的 id，避免二次渲染错误
      this.$emit('change', uuid(), deepClone(this.option))
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.el-tabs__content) {
  padding: 0;
  margin-left: 16px;
  padding-right: 16px;
  height: calc(100% - 38px);
  overflow: auto;
  transform: translate(0, 0);
}
</style>
