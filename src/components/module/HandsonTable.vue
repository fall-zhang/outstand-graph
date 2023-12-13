<template>
  <div ref="container" class="hand-table"></div>
  <!-- <el-button @mouseover="getSelected">获取</el-button> -->
</template>

<script setup lang="ts">
import Handsontable from 'handsontable'
import 'handsontable/dist/handsontable.full.min.css'

const container = ref()
const tableRef = shallowRef()
onMounted(() => {
  tableRef.value = new Handsontable(container.value, {
    data: [
      ['years', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]
    ],
    rowHeaders: true,
    colHeaders: true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation' // for non-commercial use only
  })
  console.log(tableRef.value)
})
function getSelected() {
  const selected = tableRef.value.getSelected()
  console.log(selected)
}
</script>

<style scoped lang="scss">
.hand-table {
  height: 800px;
  // width: 1360px;
}
</style>
