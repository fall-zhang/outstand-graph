<!--
作者：张博飞
用作：单个 form
-->
<!-- type 类型为 array 或者 object 时，调用 FormZone -->
<template>
  {{ currentSetter }}
  <div class="form-item">
    <!-- 简单类型的数据处理 -->
    <template v-if="basicSetterType.includes(currentSetter)">
      <div class="basic-label">{{ formOption.keyName }}
        <el-tooltip v-if="formOption.tips" :content="formOption.tips" placement="top">
          <IconHelp theme="filled" class="g-icon-center" />
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
        <IconRefresh class="g-icon-center" />
      </div>
      <!-- 自定义组件类型的数据处理 -->
    </template>
    <!-- 复杂数据处理，标题会独占一行 -->
    <div v-else class="default-container">
      <div style="display: flex;align-items: center;">
        {{ formOption.keyName }}
        <el-tooltip v-if="formOption.tips" placement="top">
          <IconHelp theme="filled" class="g-icon-center" />
          <template #content>
            <div v-html="formOption.tips"></div>
          </template>
        </el-tooltip>
      </div>
      <div v-if="allSetters.length > 1" class="toggle-icon" :class="setterIndex % 2 == 0 ? 'reverse' : ''"
        @click="onChangeSetter">
        <IconRefresh class="g-icon-center" />
      </div>
      <template>
        <el-input v-if="currentSetter == 'textarea'" v-model="formValue" size="small" type="textarea"
          style="max-height: 72px;" @input="onChangeInput"></el-input>
        <FormJSON v-else-if="currentSetter == 'json'" v-model="formValue" class="complex-container"
          @change="onChangeComplexValue">
        </FormJSON>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deepClone } from '@/utils/utils'
import FormJSON from './components/FormJSON.vue'
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
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['change'])
const formValue = ref<any>('')
const setterIndex = ref<number>(0)
const currentSetter = ref<string>('')
const allSetters = ref([])
const timberFun = ref<number>()
const basicSetterType = ref(['input', 'color', 'switch', 'slider', 'number', 'select'])
const complexSetterType = ref(['json', 'textarea'])
onBeforeMount(() => {
  // console.log('传输过来的 id', formOption.keyId);
  const state = import.meta.env || {}
  if (state.DEV === true) {
    // 开发时打开，用于捕获默认值的错误
    catchError()
  }
  formValue.value = deepClone(toRaw(prop.receiveValue))
  // 赋值为初始值，如果有对象
  if (formValue.value === undefined) {
    if (typeof prop.formOption.default === 'object' && prop.formOption.children) {
      formValue.value = {}
    } else {
      formValue.value = prop.formOption.default
    }
  }
  // console.log(formValue.value);
  allSetters.value = prop.formOption.setters
  // console.log(prop.formOption.keyId, allSetters.value);
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
  // console.log('当前的值为', formValue.value)
  // console.log('当前的属性', prop.formOption)
  emit('change', prop.formOption, formValue.value)
}
function onChangeComplexValue() {
  emit('change', prop.formOption, formValue.value)
}
function onChangeZone(option: any, value: any) {
  // console.log(JSON.stringify(formValue.value, null, 2));
  formValue.value = value
  // console.log(JSON.stringify(formValue.value, null, 2));
  // console.log(option, value);
  emit('change', prop.formOption, formValue.value)
}
function onChangeSetter() {
  // console.log('pico');
  setterIndex.value++
  if (setterIndex.value >= allSetters.value.length) setterIndex.value = 0
  currentSetter.value = allSetters.value[setterIndex.value]
  // console.log(currentSetter);
}
</script>
<style lang="scss" scoped>
.form-item {
  padding: 4px 16px;
  display: flex;
  align-items: center;
  height: 26px;
  margin-bottom: 12px;

  .basic-form-item {
    flex: 1;
  }

  .basic-label {
    display: flex;
    width: 100px;
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
  // width: 20px;
  padding: 0 6px;
  cursor: pointer;
  transition: 0.6s;

  &.reverse {
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