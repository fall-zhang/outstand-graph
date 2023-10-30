<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3 style="display: flex;justify-content: space-between">
        <IconReturn @click="onClickBack" class="g-icon-center" style="width: 40px;cursor: pointer;" />
        {{ "图表类型" }}
        <div style="width: 40px;"></div>
      </h3>
      <div>
        <a @click="onChangeOption(-1)">图表</a>
        <a @click="onChangeOption(index)" v-for="(item, index) in currentPath" :key="item.keyId">
          / {{ item.keyName }}
        </a>
      </div>
    </div>
    {{ currentForm }}
    <ul class="cell-group">
      <!-- 根配置 -->
      <template v-if="isRootConfig">
        <li class="cell-item complex-cell" style="justify-content: space-between;display: flex;">
          <el-select v-model="currentSeriesType" size="small" :min="0" :max="20">
            <el-option v-for="(value, key) in chartType" :label="value" :value="key" :key="key"> </el-option>
          </el-select>
          <el-button type="primary" size="small">添加</el-button>
        </li>
        <!-- 首页，当前所拥有的图表和数据配置 -->
        <li class="cell-item link-cell" v-for="(series, index) in currentForm" :key="series.id"
          @click="onSelectSeries(index, series.type)">
          <span style="display: flex;">
            {{ series.type }}
            {{ chartType[series.type] }}{{ series.name || '' }}
            <IconHelp theme="filled" class="g-icon-center" />
          </span>
          <IconRight class="g-icon-center" size="18px" />
        </li>
      </template>
      <template v-else>
        <template v-for="option in currentOptionList" :key="option.keyId">
          <el-popover v-if="option.children" placement="left">
            <el-button>添加</el-button>
            <template #reference>
              <li class="cell-item link-cell" @click="onJumpToSetting(option)">
                <span style="display: flex;">
                  {{ option.keyName }}
                  <el-tooltip v-if="option.tips" placement="top">
                    <IconHelp theme="filled" class="g-icon-center" />
                    <template #content>
                      <div v-html="option.tips"></div>
                    </template>
                  </el-tooltip>
                </span>
                <IconRight class="g-icon-center" size="18px" />
              </li>
            </template>
          </el-popover>
          <FormItem v-else :receiveValue="currentForm[option.keyId]" @change="(value) => onFormValueChange(value, option)"
            :form-option="option" />
        </template>
      </template>
      <!-- 属性详情渲染 -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import FormItem from './components/FormItem.vue'
import { Right as IconRight, Return as IconReturn, Help as IconHelp, Plus as IconPlus } from '@icon-park/vue-next'
import formOptionList from './right-series'

import { ref } from 'vue'
import { deepClone } from '@/utils/utils'
const currentSeriesType = ref('bar')
const prop = defineProps({
  receiveValue: {
    require: true,
    type: Object,
    default: () => ({})
  }
})
const chartType = reactive<Record<string, string>>({
  line: '折线图',
  bar: '柱状图',
  pie: '饼图',
  scatter: '散点（气泡）图',
  radar: '雷达图图',
  map: '地图',
  tree: '树图',
  sunburst: '旭日图',
  boxplot: '箱型图',
  heatmap: '热力图',
  graph: '关系图',
  sankey: '桑基图',
})
const emit = defineEmits(['change'])

const isRootConfig = ref<boolean>(true)
const currentForm = ref<any>()

const currentPath = ref<any[]>([])
const receiveForm = reactive(deepClone(prop.receiveValue))
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {
  let newVal: unknown = currentOptionList.value
  let newForm: any = receiveForm.value
  currentOptionList.value = newVal as []
  currentPath.value.forEach(path => {
    if (!Array.isArray(newVal)) {
      return
    }
    newVal.forEach(option => {
      if (path.keyId === option.keyId && option.children) {
        newVal = option.children
        if (newForm[path.keyId]) {
          newForm = newForm[path.keyId]
        } else {
          newForm[path.keyId] = {}
          // console.log("🚀 ~ file: PropertyPagePanel.vue:70 ~ watch ~ path:", path)
          newForm = newForm[path.keyId]
          // console.log('🚀 ~ file: PropertyPagePanel.vue:71 ~ watch ~ newForm:', newForm)
          // throw new Error('键值不匹配')
        }
      }
    })
  })
  currentOptionList.value = newVal as []
  currentForm.value = newForm
  currentForm.value = receiveForm.series
}, {
  immediate: true,
  deep: true
})
function onChangeOption(index: number) {
  if (index < 0) {
    currentPath.value = []
    isRootConfig.value = true
  } else {
    currentPath.value = currentPath.value.slice(0, index + 1)
  }
}

function onClickBack() {
  if (currentPath.value.length === 0) {
    currentForm.value = receiveForm.series
    isRootConfig.value = true
  } else {
    currentPath.value.pop()
  }
}
function onFormValueChange(value: any, option: any) {
  let resss: any = receiveForm
  if (currentPath.value.length > 0) {
    currentPath.value.forEach(item => {
      resss = resss[item.keyId]
    })
  } else if (currentPath.value.length === 0) {
    resss = receiveForm
  }
  // console.log(resss, value)
  resss[option?.keyId] = value
  emit('change', receiveForm)
}

function onSelectSeries(index: number, type: string) {
  isRootConfig.value = false
  currentForm.value = receiveForm.series[index]
  currentOptionList.value = formOptionList[type]
}

function onJumpToSetting(setting: { keyId: string, keyName: string }) {
  currentPath.value.push({
    keyId: setting.keyId,
    keyName: setting.keyName
  })
  // console.log(currentPath.value)
}
</script>

<style scoped lang="scss">
.right-panel {
  background-color: white;
  height: 100vh;
  overflow: auto;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);

  .panel-title {
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: 600;
    }

  }
}

.cell-group {
  user-select: none;
}

.cell-item {
  padding: 4px 24px;
  // border-bottom: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .3s;


  &.link-cell {
    cursor: pointer;
    height: 36px;
    min-width: 110px;

    &:hover {
      background-color: var(--gray-2);
    }
  }

  // &.basic-cell {
  //   height: 26px;

  //   .basic-label {
  //     min-width: 110px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: flex-start;
  //   }
  // }

  &.complex-cell {
    display: block;
    min-width: 110px;
    height: auto;

    .complex-label {
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>
