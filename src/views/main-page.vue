<template>
  <PageLayout title="云飞脑图" no-side>
    <template #header-icon>
      <BachelorDegreeIcon />
    </template>
    <HeadTool ref="headTool" />
    <div class="graph-container" :class="setting.showPort ? '' : 'hidePort'">
      <div ref="antZoneLeft" class="graph-adder"></div>
      <div ref="antGraphDOM" class="graph-editor"></div>
      <div class="graph-right-zone">
        <RightProperty class="graph-adder" :cell="selectCell"></RightProperty>
        <div ref="antGraphMiniMap" class="graph-minimap"></div>
      </div>
    </div>
  </PageLayout>
</template>
<script lang="ts" setup>
import BachelorDegreeIcon from '@/components/icons/BachelorDegree.vue'
import { PageLayout } from '@/layout'
import HeadTool from './head-panel/head-tool.vue'
import RightProperty from './right-property/right-property.vue'
import { Edge, Graph } from '@antv/x6'
import { Stencil } from '@antv/x6-plugin-stencil'
import type { Cell, Node } from '@antv/x6'
import basicShapes from './shape/basicShape'
import { History } from '@antv/x6-plugin-history'
import { Transform } from '@antv/x6-plugin-transform'
import { Selection } from '@antv/x6-plugin-selection'
import { GateWay, CheckOut } from './shape/bpmnShape'
import { startShape } from './shape/flowShape'
import { useMagicKeys } from '@vueuse/core'

import graphData from './testData/bpmnData.json'
import './registerComponents'
// 引入自定义组件文件
const setting = reactive<any>({
  showPort: true // 显示连接
})
const { space } = useMagicKeys()
// 按下 ctrl 时
watch(space, () => {
  if (space) {
    console.log('开启')
    graph.value?.enablePanning()
  }
})
const headTool = ref(null)
const graph = ref<Graph>()
provide('graph', graph)
const antZoneLeft = ref<HTMLElement>()
const antGraphDOM = ref<HTMLElement>()
const antGraphMiniMap = ref<HTMLElement>()
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
    grid: true,
    mousewheel: {
      enabled: true,
      modifiers: [],
      minScale: 0.4,
      maxScale: 3
    },
    connecting: {
      snap: true
    }
  })
  graph.value.use(
    new History({
      enabled: true,
      // ignoreChange: true,
      // eslint-disable-next-line
      // ignoreAdd: true,
      // ignoreRemove: true,
      beforeAddCommand(event: string, args: any) {
        // console.log(event)
        // console.log(args)
        // 能读取到 key 但会报错
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
        if (args && args.key === 'tools') {
          return false
        }
        return true
      }
    })
  )
  graph.value.use(
    new Transform({
      resizing: true
    })
  )
  graph.value.use(
    new Selection({
      enabled: false,
      showNodeSelectionBox: true,
      multiple: false
    })
  )
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

/** 左侧菜单对象 */
function initGraphAdder() {
  const stencil = new Stencil({
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
    width: 100,
    height: 60,
    label: '领导审批'
  })
  stencil.load(basicShapes, 'basicShape')
  stencil.load([GateWay, bpmn!], 'bpmnShape')
  stencil.load([startShape], 'specialShape')
  // stencil
  if (antZoneLeft.value) {
    antZoneLeft.value.appendChild(stencil.container)
  }
}
// 注册图像上的事件
function registerEvents() {
  if (!graph.value) {
    throw new Error('未定义 graph')
  }
  const graphEvent = graph.value
  registerGraphEvent(graphEvent)
}

function registerGraphEvent(graph: Graph) {
  graph.on('cell:selected', () => {
    graph.getSelectedCells()
  })
  graph.on('edge:mouseup', ({ edge }: Record<string, any>) => {
    selectCell.value = edge
    console.log(edge)
  })
  graph.on('node:click', ({ node }: Record<string, any>) => {
    node.removeTools()
    selectCell.value = node
  })
  graph.on('cell:mouseleave', ({ cell }: Record<string, any>) => {
    cell.removeTools()
  })
  graph.on('cell:mouseenter', ({ cell }: Record<string, any>) => {
    if (cell.isNode()) {
      cell.addTools([
        {
          name: 'button-remove',
          args: {
            x: '100%',
            y: 0,
            offset: { x: -10, y: 10 }
          }
        }
      ])
    } else {
      // cell.addTools(['vertices', 'segments'])
      cell.addTools(['vertices', 'segments'])
    }
  })
}

</script>

<script lang="ts">
export default {
  name: 'AntV6Chart'
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
  position: relative;

  .graph-minimap {
    height: 90px;
    width: 100%;
    z-index: 10;
    bottom: 20px;
  }

  .graph-right-zone {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

  }

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
