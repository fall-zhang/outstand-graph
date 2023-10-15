<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3>{{ currentPath.at(-1)?.keyName || "Echarts 属性" }}</h3>
      <div>
        <a @click="onChangeOption"> {{ currentPath.at(-1)?.keyName || "Echarts 属性" }} </a>
        <a v-show="currentPath.length > 1" @click="onChangeOption">
          / 当前的
        </a>
      </div>
    </div>
    <ul class="cell-group">
      <li class="cell-item link-cell">
        按钮，箭头
        <el-icon>
          <ArrowRight />
        </el-icon>
      </li>
      <!-- 标题文字大于六个，将会换行 -->
      <li class="cell-item basic-cell">
        <div class="basic-label">{{ '钮，箭头钮箭' }}
          <el-tooltip placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <el-input size="small" @input="onChangeInput" />
      </li>
      <li class="cell-item complex-cell">
        <div class="complex-label">{{ '钮，箭头钮箭' }}
          <el-tooltip placement="top">
            <template #content>
              <div style="width: 280px;">{{ "这里面有一些信息，可能有些长，但是你必须展示出来这里面有一些信息，可能有些长，但是你必须展示出来" }}</div>
            </template>
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <el-input size="small" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" @input="onChangeInput" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, QuestionFilled } from '@element-plus/icons-vue'
import FormPageItem from './PanelPageItem.vue'
import formOption from './right-property'

import { ref } from 'vue'
// const prop = defineProps({
//   subTitle: {
//     default: '这是小标题',
//     type: String
//   }
// })
console.log(formOption)
const currentPath = ref([{
  keyName: '横轴',
  keyId: 'xAxis'
}])
const currentOptionList = ref<Array<any>>([])
watch(currentPath, () => {
  let newVal: unknown = formOption
  currentPath.value.forEach(path => {
    formOption.forEach(option => {
      if (path.keyId === option.keyId) {
        console.log(option)
        newVal = option
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
</script>

<style scoped lang="scss">
.right-panel {
  // border-left: 1px solid #ccc;
  background-color: white;
  // z-index: 2000;
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

  &.basic-cell {
    height: 26px;

    .basic-label {
      min-width: 110px;
    }
  }

  &.complex-cell {
    display: block;
    min-width: 110px;
    height: auto;

    .complex-label {
      margin-bottom: 4px;
    }
  }
}

:deep(.el-textarea__inner) {
  max-height: 120px;
}
</style>
