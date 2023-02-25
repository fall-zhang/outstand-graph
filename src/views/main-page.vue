<!-- 用户可进行的操作：单机，双击，鼠标滚轮 -->
  <!-- 图形类型：边，节点，节点上的port -->
  <!-- 删除功能：点击图像后，左上角展示一个按钮，添加 -->
  <!-- 双击：弹出确认框，提供选择（不再弹出） -->
  <!-- 点击图像后，展示图像的功能然后删除点击图像后，左上角展示一个按钮，添加 -->
  <!-- 添加图例功能，帮助用户使用 -->
  <!-- 配置滚轮缩放还是，ctrl 缩放 -->
  <!-- 配置直接可以拖动，还是长按空格可拖动 -->
  <!-- 使用快速连接后，点击第一个节点，再点击第二个节点直接连接 -->
<template>
  <HeadTool ref="headTool" />
  <div class="graph-container" :class="setting.showPort ? '' : 'hidePort'">
    <div ref="antZoneLeft" class="graph-adder"></div>
    <div ref="antGraphDOM" class="graph-editor"></div>
    <RightProperty></RightProperty>
  </div>
</template>
<script lang="ts" setup>
import HeadTool from './head-panel/head-tool.vue'
import RightProperty from './right-property/right-property.vue'
import { Addon, Graph, Shape } from '@antv/x6'
import type { Cell } from '@antv/x6'
import { getBasicCircle } from './shape/basicShape'
import './shape/bpmnShape'
import graphData from './testData/bpmnData.json'
import './registerComponents.ts'
// 引入自定义组件文件
defineEmits(['selectCell'])
const setting = reactive({
  showPort: true, // 显示连接
  dragGraph: true, // 移动画布
  showGrid: true, // 展示网格
  smartConnect: false, // 智能连接
  canZoom: true,
  history: true,
  deleteEdgeConfirm: true
})
const headTool = ref(null)
const graph = ref<Graph>()
provide('graph', graph)
const antZoneLeft = ref<HTMLElement>()
const antGraphDOM = ref<HTMLElement>()
onMounted(() => {
  // 图形编辑区域
  initGraphZone()
  initGraphAdder()
  registerEvents()
})
function initGraphZone() {
  graph.value = new Graph({
    container: antGraphDOM.value,
    panning: true,
    history: {
      enabled: true,
      // undo: ['ctrl', 'z'],
      // redo: ['ctrl', 'y'],
    },
    mousewheel: {
      enabled: true,
      modifiers: []
    },
    connecting: {
      snap: true
    },
    selecting: {
      enabled: false,
      showNodeSelectionBox: true,
      multiple: false
    }
  })
  // graph.value.fromJSON(graphData)
  const cells: Cell[] = []
  graphData.forEach(item => {
    if (item.shape === 'bpmn-edge') {
      cells.push(graph.value!.createEdge(item))
    } else {
      cells.push(graph.value!.createNode(item))
    }
  })
  graph.value.resetCells(cells)
}
//  左侧菜单对象
function initGraphAdder() {
  const stencil = new Addon.Stencil({
    search: true,
    target: graph.value,
    stencilGraphWidth: 200,
    stencilGraphHeight: 800,
    groups: [
      {
        name: 'basicShape',
        title: '基本组件',
        graphWidth: 200,
        graphHeight: 300
      },
      {
        name: 'bpmnShape',
        title: 'bpmn组件',
        graphWidth: 200,
        graphHeight: 300
      },
      {
        name: 'specialShape',
        title: '特定组件',
        graphWidth: 200,
        graphHeight: 300
      }
    ]
  })
  stencil.load([getBasicCircle()], 'basicShape')
  stencil.load([new Shape.Circle({
    inherit: 'circle',
    'width': 40,
    'height': 40,
    attrs: {
      body: {
        strokeWidth: 2,
        stroke: '#5F95FF',
        fill: '#FFF',
      }
    }
  })], 'specialShape')
  stencil.load([], 'bpmnShape')
  // stencil
  if (antZoneLeft.value) {
    antZoneLeft.value.appendChild(stencil.container)
  }
}
function registerEvents() {
  if (!graph.value) {
    throw new Error('未定义 graph')
  }
  const graphEvent = graph.value
  graphEvent.on('edge:mouseup', ({ edge }) => {
    const degeInfo = edge.getData()
    console.log(degeInfo)
    if (degeInfo.source.cell === degeInfo.target.cell && graph.value) {
      graph.value.removeNode(degeInfo)
    }
  })
}


</script>

<style scoped lang="scss">
@keyframes ant-line {
  to {
    stroke-dashoffset: -1000;
  }
}

.graph-container {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 6px;
  // height: 84vh;
  width: 100vw;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  // justify-content: flex-start;

  .graph-adder {
    height: 100%;
    position: relative;
    width: 260px;
    background-color: pink;
  }

  .graph-editor {
    flex-grow: 1;
  }
}

.hidePort {
  :deep(.x6-port) {
    display: none;
  }
}
</style>
<script lang="ts">
export default {
  name: 'AntV6Chart'
}
</script>