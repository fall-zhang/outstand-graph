<template>
  <el-button type="primary" size="small" @click="onGenCode">出码</el-button>

  <el-dialog v-model="codeGenShow" title="代码生成" width="68%" top="48px" @opened="onOpened">
    <el-tabs @tab-click="onSelectTab">
      <el-tab-pane label="Vue2"></el-tab-pane>
      <el-tab-pane label="Vue3"></el-tab-pane>
      <el-tab-pane label="Vue3 setup"></el-tab-pane>
    </el-tabs>
    <div ref="codeView" style="height: 460px;width:860px;" class="code-container"></div>
  </el-dialog>
</template>

<script setup>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import { onMounted, ref, provide, inject, shallowRef } from 'vue'
import { genVue2Code, genVue3Code, genVue3SetupCode } from '../tools/genVueCode'
const codeGenShow = ref(false)
const codeView = ref(null)
const monacoEditor = shallowRef(null)
const chartOption = inject('chartOption')

function onGenCode() {
  codeGenShow.value = true
}
function onOpened() {
  if (!codeView.value) return
  monacoEditor.value = monaco.editor.create(codeView.value, {
    theme: 'vs-dark',
    value: 'const a = 995',
    language: 'javascript',
    roundedSelection: true,
    scrollBeyondLastLine: true
  })
}
onMounted(() => {
  console.log(chartOption)
})
function onSelectTab(label) {
  if (label.props.label === 'Vue2') {
    const code = genVue2Code(chartOption)
    monacoEditor.value.getModel().setValue(code)
  } else if (label.props.label === 'Vue3') {
    const code = genVue3Code(chartOption)
    monacoEditor.value.getModel().setValue(code)
  } else if (label.props.label === 'Vue3 setup') {
    const code = genVue3SetupCode(chartOption)
    monacoEditor.value.getModel().setValue(code)
  }
  console.log()
}
function onValueChange() {
  // 更新值
  monacoEditor.value.getModel().getValue()
  monacoEditor.value.getModel().setValue()
}
</script>

<style scoped lang="scss"></style>

<style lang="scss">
.code-container {
  .mtk1 {
    color: #8cdcfe;
  }
}

::v-deep .el-dialog {
  .el-dialog__body {
    overflow-y: auto;
  }
}
</style>
