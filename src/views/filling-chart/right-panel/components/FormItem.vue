<!--
作者：张博飞
用作：单个 form
-->
<!-- type 类型为 array 或者 object 时，调用 FormZone -->
<template>
  <!-- 单行内容使用 on-line -->
  <div class="form-item" :class="basicSetterType.includes(currentSetter) && formOption.keyName.length < 7 && 'on-line'">
    <div class="basic-label">{{ formOption.keyName }}
      <el-tooltip v-if="formOption.tips" placement="top">
        <IconHelp theme="filled" class="g-icon-center" />
        <template #content>
          <div v-html="formOption.tips"></div>
        </template>
      </el-tooltip>
    </div>
    <!-- 简单类型的数据处理 -->
    <div v-if="basicSetterType.includes(currentSetter)" class="basic-form-item">
      <el-input v-if="currentSetter == 'input'" v-model="formValue" type="text" size="small"
        @input="onChangeInput"></el-input>
      <div v-else-if="currentSetter == 'color'">
        <el-input v-model="formValue" style="width: 68px;" size="small" type="color" @change="onChangeValue"></el-input>
        <!-- {{ formValue || '未选择颜色' }} -->
      </div>
      <el-input-number v-else-if="currentSetter == 'number'" v-model="formValue" size="small"
        @change="onChangeValue"></el-input-number>
      <el-switch v-else-if="currentSetter == 'switch'" v-model="formValue" size="small"
        @change="onChangeValue"></el-switch>
      <el-slider v-else-if="currentSetter == 'slider'" v-model="formValue" size="small"
        style="width: 100px;margin-left: 8px;" :min="0" :max="60" @change="onChangeValue"></el-slider>
      <el-select v-else-if="currentSetter == 'select'" v-model="formValue" size="small" :min="0" :max="20"
        @change="onChangeValue">
        <el-option v-for="optionItem in formOption.optionalValue" v-bind="optionItem" :key="optionItem.value"></el-option>
      </el-select>
    </div>
    <!-- 切换按钮 -->
    <template v-if="allSetters.length > 1">
      <div style="flex: 1;"></div>
      <div class="toggle-icon" @click="onChangeSetter">
        <IconRefresh class="g-icon-center" :class="setterIndex % 2 == 0 ? 'reverse' : ''" />
      </div>
    </template>
    <!-- 复杂数据处理，标题会独占一行 -->
  </div>
  <div v-if="!basicSetterType.includes(currentSetter)" class="default-container">
    <el-input v-if="currentSetter === 'textarea'" v-model="formValue" size="small" type="textarea"
      style="max-height: 72px;" @input="onChangeInput"></el-input>
    <FormJSON v-else-if="currentSetter === 'json'" v-model="formValue" class="complex-container"
      @change="onChangeComplexValue">
    </FormJSON>
    <FormJSON v-else-if="currentSetter === 'function'" v-model="formValue" class="complex-container"
      @change="onChangeComplexValue">
    </FormJSON>
  </div>
</template>

<script lang="ts" setup>
import { deepClone } from '@/utils/utils'
import FormJSON from './FormItemJSON.vue'
import { Refresh as IconRefresh, Help as IconHelp } from '@icon-park/vue-next'
const prop = defineProps({
  formOption: {
    type: Object,
    default: () => ({
      type: 'input',
      optional: []
    })
  },
  receiveValue: {
    require: true,
    type: [Object, Number, String, Array, Boolean],
    default: null
  }
})

const emit = defineEmits(['change'])
const formValue = ref<any>()
const setterIndex = ref<number>(0)
const currentSetter = ref<string>('')
const allSetters = ref([])
const timberFun = ref<number>()
const basicSetterType = ref(['input', 'color', 'switch', 'slider', 'number', 'select'])
const complexSetterType = ref(['json', 'textarea'])
onBeforeMount(() => {
  const devState = import.meta.env.DEV
  if (devState === true) {
    // 开发时打开，用于捕获默认值的错误
    catchError()
  }
  formValue.value = deepClone(prop.receiveValue)
  // console.log(prop.receiveValue);
  // 赋值为初始值，如果有对象
  if (formValue.value === null) {
    if (typeof prop.formOption.default === 'object' && prop.formOption.children) {
      formValue.value = {}
    } else {
      formValue.value = prop.formOption.default
    }
  }
  allSetters.value = prop.formOption.setters
  currentSetter.value = allSetters.value[0]
  setterIndex.value = 0
})

function catchError() {
  const defaultSetter = prop.formOption.setters[0]
  const defaultVal = prop.formOption.default
  if (defaultSetter === 'slider') {
    if (typeof defaultVal === 'string') {
      console.error('该配置出现错误', prop.formOption)
    }
  }
}
function onChangeInput() {
  clearTimeout(timberFun.value)
  timberFun.value = setTimeout(onChangeValue, 500)
}
// 简单数据类型时的处理方法
function onChangeValue() {
  // console.log('当前的值为', typeof formValue.value)
  emit('change', formValue.value, prop.formOption)
}
function onChangeComplexValue() {
  emit('change', formValue.value, prop.formOption)
}
function onChangeSetter() {
  setterIndex.value++
  if (setterIndex.value >= allSetters.value.length) setterIndex.value = 0
  currentSetter.value = allSetters.value[setterIndex.value]
}
</script>
<style lang="scss" scoped>
.form-item {
  padding: 6px 24px;
  display: flex;
  align-items: center;

  &.on-line {
    height: 26px;
    border-bottom: 1px solid #aeaeae67;
  }

  .basic-form-item {
    flex: 1;
  }

  .basic-label {
    display: flex;
    width: 110px;
  }
}

.basic-container {


  .lang-label {
    display: flex;
    justify-content: space-between;
  }
}

.default-container {
  // display: flex;
  // justify-content: space-between;
}

.toggle-icon {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 6px;
  cursor: pointer;
  transition: 0.6s;

  >.reverse {
    transform-origin: center center;
    transform: rotate(0.5turn);
  }
}

.complex-container {
  margin-bottom: 8px;
}

.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}

:deep(.el-textarea__inner) {
  max-height: 120px;
}
</style>