<!-- 改内容负责将数组，对象，等复杂数据传入进来，然后转化为 JSON 进行编辑，编辑后通过原类型传输回去 -->

<template>
  <div>
    <el-input v-model="jsonValue" size="small" type="textarea" @input="onChangeJSONValue" />
  </div>
</template>

<script setup>
import { ref, shallowRef, toRaw, onMounted } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])
const prop = defineProps({
  modelValue: {
    require: true
  }
})
const jsonValue = shallowRef('')
const boundValue = ref('')
let timberFun = null
// const
const originValue = toRaw(prop.modelValue)
JSON.stringify(originValue)
onMounted(() => {
  // console.log(JSON.stringify(originValue))
  jsonValue.value = JSON.stringify(originValue)
  // console.log("🚀 ~ file: FormJSON.vue:22 ~ jsonValue.value:", jsonValue.value)
})
function onChangeJSONValue() {
  clearTimeout(timberFun)
  timberFun = setTimeout(parseValue, 500)
}

function parseValue() {
  try {
    boundValue.value = JSON.parse(jsonValue.value)
  } catch (e) {
    console.warn('JSON 未能转换成功', e)
    boundValue.value = {}
  }
  console.log('更新值', boundValue)
  emit('update:modelValue', boundValue)
  emit('change', boundValue)
}
</script>

<style scoped lang="scss">
.el-textarea {
  :deep(.el-textarea__inner) {
    max-height: 102px;
  }
}
</style>
