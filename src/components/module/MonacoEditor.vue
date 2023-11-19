<template>
  <div style="width: 100%;height: 100%;min-height: 600px;">
    <div ref="codeView" style="height: 100%;width:100%;min-height: 600px;" class="code-container"></div>
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
  initMonaco()
})

function initMonaco() {
  if (!codeView.value || monacoEditor.value) return
  monacoEditor.value = monaco.editor.create(codeView.value, {
    theme: 'vs-dark',
    value: '',
    language: 'javascript',
    roundedSelection: true,
    scrollBeyondLastLine: true
  })
  monacoModel.value = monacoEditor.value.getModel()
}
function getEditCode() {
  return monacoModel.value?.getValue()
}
function setEditCode(newVal: string) {
  monacoModel.value?.setValue(newVal)
  return monacoModel.value
}

defineExpose({
  getEditCode,
  setEditCode,
  initMonaco
})
</script>

<style scoped lang="scss"></style>
