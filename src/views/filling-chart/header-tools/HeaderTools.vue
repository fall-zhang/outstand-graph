<template>
  <div class="center">
    <el-input-number v-model="graphAttr.width" size="small" :step="10" :min="0" />
    <span style="margin: 0 6px;"> × </span>
    <el-input-number v-model="graphAttr.height" size="small" :step="10" :min="0" />
    <el-button @click="onBackStep" type="primary" size="small" circle :disabled="preDisable">
      <IconBack />
    </el-button>
    <el-button @click="onNextStep" type="primary" size="small" circle :disabled="nextDisable">
      <IconNext />
    </el-button>
    <!-- <el-button type="primary" size="small" @click="onGenCode">出码</el-button> -->
    <!-- 添加一个配置暂存，点解可以快速存储当前内容到一个配置内，如果再次点击可以应用 -->
    <!-- 导入 echarts 配置后，进行解析，并且应用当前配置 -->
    <GenCodeDialog></GenCodeDialog>
  </div>
</template>

<script lang="ts" setup>
import GenCodeDialog from './copmponents/GenCodeDialog.vue'
import { Back as IconBack, Next as IconNext } from '@icon-park/vue-next'
import history from '@/hooks/useHistory'

const prop = defineProps({
  option: {
    require: true,
    default: () => ({}),
    type: Object
  }
})
const emit = defineEmits(['change'])
const graphAttr = reactive({
  width: 690,
  height: 500
})

const currentSetting = ref()
const allSetting = ref()
const nextDisable = ref(true)
const preDisable = ref(true)
watch(() => prop.option, (newVal) => {
  // console.log("🚀 ~ file: HeaderTools.vue:46 ~ watch ~ currentSetting:", currentSetting)
  if (currentSetting.value !== newVal) {
    // do something
    history.saveStep(toRaw(newVal))
  }
})
onMounted(() => {
  if (prop.option) {
    history.saveStep(toRaw(prop.option))
  }
})
function onNextStep() {
  // console.log(history.nextStep())
  history.nextStep()
  currentSetting.value = history.getCurrent()
  allSetting.value = history.getHistory()
  emit('change', currentSetting.value)
  nextDisable.value = history.isLast()
  preDisable.value = history.isFirst()
}
function onBackStep() {
  // console.log(history.nextStep())
  history.preStep()
  currentSetting.value = history.getCurrent()
  allSetting.value = history.getHistory()
  emit('change', currentSetting.value)
  nextDisable.value = history.isLast()
  preDisable.value = history.isFirst()
}
</script>

<style scoped lang="scss">
.center {
  height: 36px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dddadd;
}
</style>
