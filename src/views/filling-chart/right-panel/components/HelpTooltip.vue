<template>
  <el-tooltip placement="top">
    <!-- <div > -->
    <IconHelp theme="filled" class="g-icon-center cursor" @click.stop="onClickHelp" />
    <!-- </div> -->
    <template #content>
      <div v-html="tip" style="width: 320px;"></div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { Help as IconHelp } from '@icon-park/vue-next'
import { stringify } from 'uuid'
const prop = defineProps<{
  path: Record<string, any>[]
  tip?: string
}>()

function onClickHelp() {
  let path = ''
  console.log(prop)

  prop.path.forEach(item => {
    if (item) path += item.keyId
  })
  // console.log(path)
  toRaw(prop.path)
  // open('https://echarts.apache.org/zh/option.html#' + path)
}

</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
