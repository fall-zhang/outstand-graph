<template>
  <el-tooltip placement="top">
    <IconHelp theme="filled" class="g-icon-center cursor" />
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

</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
