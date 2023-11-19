<template>
  <div>
    <div ref="codeView" style="height: 460px;width:860px;" class="code-container"></div>
  </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import type { editor } from 'monaco-editor/esm/vs/editor/editor.api'
// import type { Ele } from 'vue'
const monacoEditor = shallowRef<editor.IStandaloneCodeEditor>()
const codeView = ref(null)
const monacoModel = shallowRef<editor.ITextModel | null>()
onMounted(() => {
  if (!codeView.value) return
  monacoEditor.value = monaco.editor.create(codeView.value, {
    theme: 'vs-dark',
    value: '',
    language: 'javascript',
    roundedSelection: true,
    scrollBeyondLastLine: true
  })
  monacoModel.value = monacoEditor.value.getModel()
})

function getEditCode() {
  return monacoModel.value
}
function setEditCode() {
  return monacoModel.value
}

defineExpose({
  getEditCode,
  setEditCode
})
</script>

<style scoped lang="scss"></style>
