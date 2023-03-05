
<template>
  <HeadTool ref="headTool" />
  <div class="graph-container" :class="setting.showPort ? '' : 'hidePort'">
    <div ref="antZoneLeft" class="graph-adder"></div>
    <div ref="antGraphDOM" class="graph-editor"></div>
    <RightProperty :cell="selectCell"></RightProperty>
  </div>
</template>
<script lang="ts" setup>
import HeadTool from './head-panel/head-tool.vue'
import RightProperty from './right-property/right-property.vue'
import { Addon, Edge, Graph, Shape } from '@antv/x6'
import type { Cell, Node } from '@antv/x6'
import basicShapes from './shape/basicShape'
import { GateWay, CheckOut } from './shape/bpmnShape'
import { startShape } from './shape/flowShape'
import './shape/bpmnShape'
import graphData from './testData/bpmnData.json'
import './registerComponents.ts'
// 引入自定义组件文件
const setting = reactive({
  showPort: true, // 显示连接
})
const headTool = ref(null)
const graph = ref<Graph>()
provide('graph', graph)
const antZoneLeft = ref<HTMLElement>()
const antGraphDOM = ref<HTMLElement>()
onMounted(() => {
  // 图形编辑区域
  initGraphZone()
  // 左侧组件拖拽区域
  initGraphAdder()
  // 事件注册区域
  registerEvents()
})
const selectCell = ref<Edge | Node>()
function initGraphZone() {
  graph.value = new Graph({
    container: antGraphDOM.value,
    panning: true,
    clipboard: true,
    grid: true,
    snapline: {
      enabled: true,
    },
    history: {
      enabled: true
    },
    mousewheel: {
      enabled: true,
      modifiers: [],
      minScale: 0.4,
      maxScale: 3,
    },
    resizing: true,
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
    // search: true,
    // placeholder: '按照名称搜索',
    target: graph.value,
    stencilGraphWidth: 200,
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
        // collapsed: true,
        graphWidth: 200,
        graphHeight: 300
      },
      {
        name: 'specialShape',
        collapsed: true,
        title: '特定组件',
        graphWidth: 200,
        graphHeight: 300
      }
    ]
  })
  const bpmn = graph.value?.createNode({
    shape: 'activity',
    'width': 100,
    'height': 60,
    'label': '领导审批'
  })
  stencil.load(basicShapes, 'basicShape')
  stencil.load([GateWay, bpmn!], 'bpmnShape')
  stencil.load([startShape], 'specialShape')
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
    selectCell.value = edge
    console.log(edge)
    // if (degeInfo.source.cell === degeInfo.target.cell && graph.value) {
    //   graph.value.removeNode(degeInfo)
    // }
  })
  graphEvent.on('node:click', ({ node }) => {
    selectCell.value = node
  })
  graphEvent.on('cell:mouseleave', ({ cell }) => {
    cell.removeTools()
  })
  graphEvent.on('cell:mouseenter', ({ cell }) => {
    if (cell.isNode()) {
      cell.addTools([
        {
          name: 'button-remove',
          args: {
            x: '100%',
            y: 0,
            offset: { x: -10, y: 10 },
          },
        },
      ])
    } else {
      // cell.addTools(['vertices', 'segments'])
      cell.addTools(['vertices', 'segments'])
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
    z-index: 2;
    height: 100%;
    position: relative;
    width: 260px;
    background-color: #f5f5f5;
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