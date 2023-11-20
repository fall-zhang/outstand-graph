<template>
  <el-tooltip placement="top">
    <IconHelp theme="filled" class="g-icon-center cursor" @click="onClickHelp(option)" />
    <template #content>
      <div v-html="tip"></div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { Help as IconHelp } from '@icon-park/vue-next'
const prop = defineProps({
  tip: {
    require: false,
    default: '',
    type: String
  },
  path: {
    require: false,
    default: () => ([]),
    type: Array
  },
})

function onClickHelp(option: unknown) {
  console.log(option)
  let path = ''
  prop.path.forEach(item => {
    path += item.keyId
  })
  // console.log(path)
  toRaw(prop.path)
  open('https://echarts.apache.org/zh/option.html#' + path)
}

</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
