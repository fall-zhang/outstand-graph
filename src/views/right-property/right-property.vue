<template>
  <div class="graph-adder">
    <el-form ref="form" label-width="60px">
      <el-form-item label="ID">
        <el-input size="small" style="width:80%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary">保存</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import graphEvent from '@/store/graph-event'
// import { Node } from '@antv/x6'
import type { Node, Edge } from '@antv/x6'
const props = defineProps<{
  cell?: Node | Edge
}>()
const nodeInfo = ref()
graphEvent.on('select-node', (node: Node) => {
  nodeInfo.value = node
})
watch(props, (newVal, oldVal) => {
  if (props.cell) {

  }
})
</script>

<style lang="scss" scoped></style>
