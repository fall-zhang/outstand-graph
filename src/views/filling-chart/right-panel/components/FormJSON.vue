<!-- 改内容负责将数组，对象，等复杂数据传入进来，然后转化为 JSON 进行编辑，编辑后通过原类型传输回去 -->

<template>
  <el-input v-model="jsonValue" size="small" type="textarea" @input="onChangeJSONValue" />
</template>

<script setup lang="ts">
import { ref, shallowRef, toRaw, onMounted } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])
const prop = defineProps({
  modelValue: {
    type: String,
    default: '',
    require: true
  }
})
const jsonValue = shallowRef('')
const boundValue = ref('')
let timberFun: number | null = null
// const
const originValue = toRaw(prop.modelValue)
onMounted(() => {
  // console.log(JSON.stringify(originValue))
  jsonValue.value = JSON.stringify(originValue)
  // console.log("🚀 ~ file: FormJSON.vue:22 ~ jsonValue.value:", jsonValue.value)
})
function onChangeJSONValue() {
  if (timberFun) {
    clearTimeout(timberFun)
  }
  timberFun = setTimeout(parseValue, 500)
}

function parseValue() {
  let parseValue = {}
  try {
    parseValue = JSON.parse(jsonValue.value)
  } catch (e) {
    console.warn('JSON 未能转换成功', e)
  }
  emit('update:modelValue', parseValue)
  emit('change', parseValue)
}
</script>

<style scoped lang="scss">
.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}
</style>
