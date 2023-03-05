<template>
  <div v-bind="$attrs" class="graph-adder">
    <h2>属性</h2>
    {{ cell?.getAttrs() }}
    <el-form ref="form" label-width="80px" class="property-form" size="small">
      <el-form-item label="ID">
        <el-input style="width:80%"></el-input>
      </el-form-item>
      <el-form-item label="字体大小">
        <el-input-number style="width:100px"></el-input-number> px
      </el-form-item>
      <el-form-item label="内容文本">
        <el-input style="width:80%"></el-input>
        <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
      </el-form-item>
      <el-form-item label="边框粗细">
        <el-input-number style="width:100px"></el-input-number> px
      </el-form-item>
      <el-form-item label="边框颜色">
        <el-input type="color" style="width:80px"></el-input>
      </el-form-item>
      <el-form-item label="填充色">
        <el-input type="color" style="width:80px"></el-input>
      </el-form-item>
      <el-form-item label="fontSize">
        <el-input style="width:80%"></el-input>
      </el-form-item>
      <el-form-item label="fontSize">
        <el-input style="width:80%"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-button size="small" type="primary">保存</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item> -->
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

<style lang="scss" scoped>
.graph-adder {
  z-index: 2;

  h2 {
    margin: 0;
    padding: 10px 12px;
    font-size: 18px;
    background-color: #c2c2c2;
    color: hsla(0, 0%, 14%, 0.92);
  }

  .property-form {
    padding: 10px 0;
  }
}
</style>
