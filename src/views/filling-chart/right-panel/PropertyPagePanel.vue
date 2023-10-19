<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3>{{ currentPath.at(-1)?.keyName || "Echarts 属性" }}</h3>
      <div>
        <a @click="onChangeOption('')">属性</a>
        <a @click="onChangeOption(item.keyId)" v-for="item in currentPath" :key="item.keyId">
          / {{ item.keyName }}
        </a>
      </div>
    </div>
    <ul class="cell-group">
      <template v-for="option in currentOptionList" :key="option.keyId">
        <li v-if="option.children" class="cell-item link-cell" @click="onJumpToSetting(option)">
          {{ option.keyName }}
          <IconRight class="g-icon-center" size="18px" />
        </li>
        <FormItem v-else :receiveValue="currentForm[option.keyId]" @change="(value) => onFormValueChange(value, option)"
          :form-option="option" />
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FormItem from './FormItem.vue'
import { Right as IconRight } from '@icon-park/vue-next'
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

const cloneData = ref(deepClone(prop.receiveValue))
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {

  let newVal: unknown = formOptionList
  let newForm: any = prop.receiveValue

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
          newForm = newForm[path.keyId]
          // throw new Error('键值不匹配')
        }
      }
    })
  })
  currentOptionList.value = newVal as []
  currentForm.value = newForm
  console.log(currentForm.value)
}, {
  immediate: true
})
function onChangeOption(str: string) {
  if (str === '') {
    currentPath.value = []
  }
}

function onFormValueChange(value: any, option: any) {
  let resss: any = null
  if (currentPath.value.length > 1) {
    resss = currentPath.value.reduce(item => cloneData.value[item.keyId])
  } else {
    resss = cloneData.value[currentPath.value[0].keyId]
  }
  resss[option?.keyId] = value
  emit('change', cloneData.value)
}

function onJumpToSetting(setting: { keyId: string, keyName: string }) {
  // console.log(setting);
  currentPath.value = currentPath.value.concat({
    keyId: setting.keyId,
    keyName: setting.keyName
  })
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
