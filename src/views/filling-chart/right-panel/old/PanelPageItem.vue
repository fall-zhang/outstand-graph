<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="form-item">
    <!-- 简单类型的数据处理 -->
    <div v-if="basicSetterType.includes(currentSetter)" class="basic-container">
      <div class="basic-label">{{ formOption.keyName }}
        <el-tooltip v-if="formOption.tips" :content="formOption.tips" placement="top">
          <el-icon>
            <QuestionFilled />
          </el-icon>
        </el-tooltip>
      </div>
      <div class="basic-form-item">
        <el-input v-if="currentSetter == 'input'" v-model="formValue" type="text" size="small"
          @input="onChangeInput"></el-input>
        <div v-else-if="currentSetter == 'color'">
          <el-input v-model="formValue" style="width: 68px;" size="small" type="color" @change="onChangeValue"></el-input>
          {{ formValue || '未选择颜色' }}
        </div>
        <el-input-number v-else-if="currentSetter == 'number'" v-model="formValue" size="small"
          @change="onChangeValue"></el-input-number>
        <el-switch v-else-if="currentSetter == 'switch'" v-model="formValue" size="small"
          @change="onChangeValue"></el-switch>
        <el-slider v-else-if="currentSetter == 'slider'" v-model="formValue" size="small" style="width: 100px;" :min="0"
          :max="60" @change="onChangeValue"></el-slider>
        <el-select v-else-if="currentSetter == 'select'" v-model="formValue" size="small" :min="0" :max="20"
          @change="onChangeValue">
          <el-option v-for="optionItem in formOption.optionalValue" v-bind="optionItem"
            :key="optionItem.value"></el-option>
        </el-select>
      </div>
      <div v-if="allSetters.length > 1" class="toggle-icon" :class="setterIndex % 2 == 0 ? 'reverse' : ''"
        @click="onChangeSetter">
        <el-icon>
          <Refresh />
        </el-icon>
      </div>
      <!-- 自定义组件类型的数据处理 -->
    </div>
    <!-- 复杂数据处理，标题会独占一行 -->
    <template v-else-if="complexSetterType.includes(currentSetter)">
      <el-input v-if="currentSetter == 'textarea'" v-model="formValue" size="small" type="textarea"
        style="max-height: 72px;" @input="onChangeInput"></el-input>
      <FormJSON v-else-if="currentSetter == 'json'" v-model="formValue" class="complex-container"
        @change="onChangeComplexValue">
      </FormJSON>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  title: string
  subTitle: string
  formOption: any
}>()
const formValue = ref<any>({})
const currentSetter = ref('')
const allSetters = ref('')
const basicSetterType = ref(['dd', 'aa'])
const complexSetterType = ref(['dd', 'aa'])
const setterIndex = ref(0)
function onChangeComplexValue() {

}
function onChangeInput() {

}
function onChangeSetter() {

}
function onChangeValue() {

}
</script>

<style scoped lang="scss">
.right-panel {
  // border-left: 1px solid #ccc;
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

    .links {}
  }
}

.cell-group {
  user-select: none;
}

.cell-item {
  padding: 4px 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 1.2s;

  &:hover {
    background-color: rgba(194, 212, 211, 0.15);
  }

  &.link-cell {
    cursor: pointer;
    height: 40px;
    min-width: 110px;
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
  }
}
</style>
