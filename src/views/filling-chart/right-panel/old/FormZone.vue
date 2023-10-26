<template>
  <!-- type 类型为 array 或者 object 时，调用 FormZone -->
  <div class="form-zone">
    <!-- 因为要根据自身 type 属性进行联动，所以 series 属性需要特殊处理，且 series 必须为数组 -->
    <div v-if="formOption.keyId === 'series'">
      <div v-for="(singleData, index) in currentData" :key="singleData.id">
        <!-- {{ getValue(currentData.type) }} -->
        <FormItem v-for="item in rightSeries[singleData.type]" :key="item.keyId" :formOption="item"
          :receiveValue="singleData[item.keyId]" @change="(option, newVal) => onChangeFormValue(index, option, newVal)">
        </FormItem>
        <el-button text size="small" @click="onRemoveConfig(index)">删除</el-button>
      </div>
      <el-dropdown :show-timeout="400" :hide-timeout="400" split-button size="small" @command="onSpecifyAdd"
        @click="() => onSpecifyAdd()">
        添加
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="柱状图">柱状图</el-dropdown-item>
            <el-dropdown-item command="折线图">折线图</el-dropdown-item>
            <el-dropdown-item command="饼图">饼图</el-dropdown-item>
            <el-dropdown-item command="矩形树图">矩形树图</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <template v-else>
      <el-collapse v-if="Array.isArray(currentData)">
        <el-collapse-item v-for="(singleData, index) in currentData" :key="singleData.id" :title="formOption.keyName"
          class="collapse-item">
          <FormItem v-for=" item in formOption.children " :key="item.keyId" :formOption="item"
            :receiveValue="singleData[item.keyId]" @change="(option, newVal) => onChangeFormValue(index, option, newVal)">
          </FormItem>
          <el-button type="text" size="small" @click="onRemoveConfig(index)">删除</el-button>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-else :title="formOption.keyName">
        <el-collapse-item class="collapse-item">
          <template #title>
            <div>{{ formOption.keyName }}&nbsp;</div>
            <el-tooltip v-if="formOption.tips" placement="top">
              <el-icon>
                <QuestionFilled />
              </el-icon>
              <template #content>
                <div v-html="formOption.tips"></div>
              </template>
            </el-tooltip>
          </template>
          <FormItem v-for="singleOption in formOption.children" :key="singleOption.keyId" :formOption="singleOption"
            :receiveValue="currentData[singleOption.keyId]"
            @change="(option, newVal) => onChangeFormValue(-1, option, newVal)">
          </FormItem>
        </el-collapse-item>
      </el-collapse>
      <div v-if="formOption.setters[0] === 'array'">
        <el-button text style="width: 100%;" size="small" icon="el-icon-plus" @click="() => onAddMoreConfig()">添加
          {{ formOption.keyName }}</el-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
// 可以实现添加多个内容
import { defineComponent } from 'vue'
import { v4 as uuid } from 'uuid'
import { deepClone } from '@/utils/utils'
import { Help as QuestionFilled } from '@icon-park/vue-next'
// import { defineAsyncComponent } from 'vue'
import rightSeries from '../right-series'
import FormItem from './FormItem.vue'
// import LinkCell from './link-cell/link-cell.vue';
export default defineComponent({
  name: 'FormZone',
  components: {
    QuestionFilled,
    FormItem
  },
  props: {
    receiveValue: {
      require: false,
      type: Object,
      default: () => ({})
    },
    formOption: {
      require: true,
      type: Object,
      default: () => ({
        type: 'input',
        optional: []
      })
    },
  },
  emits: ['change'],
  data() {
    const currentData: any = []
    return {
      currentData,
      rightSeries
    }
  },
  computed: {},
  watch: {},
  created() {
    const cloneData = deepClone(this.receiveValue)
    // this.currentData = cloneData.map(item => {
    //   if (!item.id) item.id = uuid()
    //   return item
    // })
    this.currentData = cloneData as []
    // console.log(this.currentData);
  },
  methods: {
    onChangeFormValue(index: number, option: any, newVal: any) {
      if (index < 0) {
        this.currentData[option.keyId] = newVal
      }
      // console.log('新的配置', option)
      // console.log(newVal)
      // console.log(option)
      if (Array.isArray(this.currentData)) {
        this.currentData.at(index)[option.keyId] = newVal
      } else {
        // this.$set(this.currentData, option.keyId, newVal)
        this.currentData[option.keyId] = newVal
        this.$forceUpdate()
      }
      // console.log(this.currentData)
      // this.option[option.keyId] = newVal
      // console.log('接受', option);
      this.$emit('change', this.formOption, deepClone(this.currentData))
    },
    onRemoveConfig(index: number) {
      // console.log(this.currentData);
      // console.log(this.currentData.length);
      if (this.currentData.length === 2) {
        const cut = this.currentData.slice(index, index + 1)
        this.currentData = cut[0]
        // console.log(cut);
      } else {
        this.currentData.splice(index, 1)
      }
      this.$emit('change', this.formOption, deepClone(this.currentData))
    },
    onSpecifyAdd(command?: string) {
      let chartType = ''
      switch (command) {
        case '柱状图': chartType = 'bar'
          break
        case '折线图': chartType = 'line'
          break
        case '饼图': chartType = 'pie'
          break
        case '矩形树图': chartType = 'treeMap'
          break
        default:
          // console.error('未知类型');
          chartType = 'bar'
          break
      }
      // console.log(chartType);
      const currentId = uuid()
      this.currentData.push({
        id: currentId,
        type: chartType
      })
    },
    onAddMoreConfig() {
      const currentId = uuid()
      if (!Array.isArray(this.currentData)) {
        this.currentData = [this.currentData]
      }
      this.currentData.push({
        id: currentId,
        type: ''
      })
    }
  }
})
</script>

<style scoped lang="scss">
.collapse-item {
  :deep(.el-collapse-item__content) {
    // margin-left: 10px;
    padding: 4px 8px;
    // border-left: 1px solid #3a3a3a;
    border-radius: 4px;
    background-color: #3c3c3c1a;

    .el-collapse-item__content {
      background-color: #3c3c3c3c;
    }
  }
}
</style>
