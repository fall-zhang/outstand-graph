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
      <li class="cell-item complex-cell" style="justify-content: space-between;display: flex;">
        <el-select v-model="currentSeriesType" size="small" :min="0" :max="20">
          <el-option label="柱状图" value="bar"> </el-option>
        </el-select>
        <el-button type="primary" size="small">添加</el-button>
      </li>
      <!-- 首页，当前所拥有的图表和数据配置 -->
      <li class="cell-item link-cell" v-for="(series, index) in currentForm" :key="series.id"
        @click="onSelectSeries(index)">
        <span style="display: flex;">
          {{ '折线图' }}{{ series.name || '' }}
          <IconHelp theme="filled" class="g-icon-center" />
        </span>
        <IconRight class="g-icon-center" size="18px" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FormItem from './components/FormItem.vue'
import { Right as IconRight, Return as IconReturn, Help as IconHelp, Plus as IconPlus } from '@icon-park/vue-next'
import formOptionList from './right-property'

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
const emit = defineEmits(['change'])
const currentForm = ref<any>()

const currentPath = ref<any[]>([])
const receiveForm = reactive(deepClone(prop.receiveValue))
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {
  let newVal: unknown = formOptionList
  let newForm: any = receiveForm
  // currentPath.value.forEach(path => {
  //   if (!Array.isArray(newVal)) {
  //     return
  //   }
  //   newVal.forEach(option => {
  //     if (path.keyId === option.keyId && option.children) {
  //       newVal = option.children
  //       if (newForm[path.keyId]) {
  //         newForm = newForm[path.keyId]
  //       } else {
  //         newForm[path.keyId] = {}
  //         newForm = newForm[path.keyId]
  //       }
  //     }
  //   })
  // })
  currentOptionList.value = newVal as []
  currentForm.value = newForm.series
}, {
  immediate: true,
  deep: true
})
function onChangeOption(index: number) {
  if (index < 0) {
    currentPath.value = []
  } else {
    currentPath.value = currentPath.value.slice(0, index + 1)
  }
}

function onClickBack() {
  console.log(currentPath.value.length)

  if (currentPath.value.length === 0) {
    // 暂无处理
    currentForm.value = receiveForm.series
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

function onSelectSeries(index: number) {
  currentForm.value = receiveForm.series[index]
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
