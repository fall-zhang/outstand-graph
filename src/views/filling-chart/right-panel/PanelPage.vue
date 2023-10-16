<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3>{{ currentPath.at(-1)?.keyName || "Echarts 属性" }}</h3>
      <div>
        <a @click="onChangeOption">
          {{ currentPath.at(0)?.keyName || "Echarts 属性" }} </a>
        <a v-show="currentPath.length > 0" @click="onChangeOption" v-for="item in currentPath.slice(1) "
          :key="item.keyId">
          / {{ item.keyName }}
        </a>
      </div>
    </div>
    <ul class="cell-group">
      <template v-for="option in currentOptionList" :key="option.keyId">
        <li v-if="option.children" class="cell-item link-cell" @click="onJumpToSetting">
          {{ option.keyName }}
          <IconRight class="g-icon-center" size="18px" />
        </li>
        <FormItem v-else :receive-value="cloneData[option.keyId]" :form-option="option" />
        <!-- 标题文字大于六个，将会换行 -->
        <!-- <template v-if="simpleFormSet.has(item.type)">
          <li class="cell-item basic-cell">
            <div class="basic-label">{{ '钮，箭头钮箭' }}
              <el-tooltip placement="top">
                <IconHelp class="g-icon-center" theme="filled" />
              </el-tooltip>
            </div>
            <el-input size="small" @input="onChangeInput" />
          </li>
        </template>
        <li v-else class="cell-item complex-cell">
          <div class="complex-label">
            {{ '钮，箭头钮箭' }}
            <el-tooltip placement="top">
              <template #content>
                <div style="width: 280px;">{{ "这里面有一些信息，可能有些长，但是你必须展示出来这里面有一些信息，可能有些长，但是你必须展示出来" }}</div>
              </template>
              <IconHelp class="g-icon-center" theme="filled" />
            </el-tooltip>
          </div>
          <el-input size="small" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" @input="onChangeInput" />
        </li> -->
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FormItem from './FormItem.vue'
import { Right as IconRight, Help as IconHelp } from '@icon-park/vue-next'
import formOption from './right-property'

import { ref } from 'vue'
import { deepClone } from '@/utils/utils'
const prop = defineProps({
  receiveValue: {
    require: true,
    type: Object,
    default: () => ({})
  }
  // subTitle: {
  //   default: '这是小标题',
  //   type: String
  // }
})
console.log(formOption)
const currentPath = ref([{
  keyName: '横轴',
  keyId: 'xAxis'
}])
const cloneData = ref(deepClone(toRaw(prop.receiveValue)))
const simpleFormSet = ref(new Set(['input', 'textarea', 'color', 'switch', 'slider']))
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {
  let newVal: unknown = formOption
  currentPath.value.forEach(path => {
    if (!Array.isArray(newVal)) {
      return
    }
    newVal.forEach(option => {
      if (path.keyId === option.keyId && option.children) {
        newVal = option.children
      }
    })
  })
  currentOptionList.value = newVal as []
}, {
  immediate: true
})
const popupVisible = ref(false)
function onChangeInput() {
  popupVisible.value = false
}
function onChangeOption() {

}
function onJumpToSetting(setting: unknown) {
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
  padding: 4px 16px;
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
