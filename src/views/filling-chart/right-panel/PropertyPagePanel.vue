<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3 style="position: relative;">
        <IconReturn v-show="currentPath.length > 0" @click="onClickBack"
          style="cursor: pointer;position: absolute;left: 16px;top: 6px;" />
        {{ currentPath.at(-1)?.keyName || "Echarts 属性" }}
      </h3>
      <div>
        <a @click="onChangeOption(-1)">属性</a>
        <a @click="onChangeOption(index)" v-for="(item, index) in currentPath" :key="item.keyId">
          / {{ item.keyName }}
        </a>
      </div>
    </div>
    <ul class="cell-group">
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
    </ul>
  </div>
</template>

<script setup lang="ts">
import FormItem from './components/FormItem.vue'
import { Right as IconRight, Return as IconReturn, Help as IconHelp } from '@icon-park/vue-next'
import formOptionList from './right-property'

import { ref } from 'vue'
import { deepClone } from '@/utils/utils'
const prop = defineProps({
  receiveValue: {
    require: true,
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['change'])
const currentForm = ref()

const currentPath = ref([{
  keyName: '横轴',
  keyId: 'xAxis'
}])

const receiveForm = ref(deepClone(prop.receiveValue))
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {
  // console.log(6464)

  let newVal: unknown = formOptionList
  let newForm: any = receiveForm.value

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
  currentPath.value.pop()
}
function onFormValueChange(value: any, option: any) {
  let resss: any = receiveForm.value
  if (currentPath.value.length > 0) {
    currentPath.value.forEach(item => {
      resss = resss[item.keyId]
    })
  } else if (currentPath.value.length === 0) {
    resss = receiveForm.value
  }
  // console.log(resss, value)
  resss[option?.keyId] = value
  emit('change', receiveForm.value)
}

function onJumpToSetting(setting: { keyId: string, keyName: string }) {
  // console.log("🚀 ~ file: PropertyPagePanel.vue:101 ~ onJumpToSetting ~ setting:", setting)
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

  // &.complex-cell {
  //   display: block;
  //   min-width: 110px;
  //   height: auto;

  //   .complex-label {
  //     margin-bottom: 4px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: flex-start;
  //   }
  // }
}
</style>
