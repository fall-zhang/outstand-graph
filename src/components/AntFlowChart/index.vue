<template>
  <!-- 用户可进行的操作：单机，双击，鼠标滚轮 -->
  <!-- 图形类型：边，节点，节点上的port -->
  <!-- 删除功能：点击图像后，左上角展示一个按钮，添加 -->
  <!-- 双击：弹出确认框，提供选择（不再弹出） -->
  <!-- 点击图像后，展示图像的功能然后删除点击图像后，左上角展示一个按钮，添加 -->
  <!-- 添加图例功能，帮助用户使用 -->
  <!-- 配置滚轮缩放还是，ctrl 缩放 -->
  <!-- 配置直接可以拖动，还是长按空格可拖动 -->
  <!-- 使用快速连接后，点击第一个节点，再点击第二个节点直接连接 -->
  <div>
    <div class="tool-bar">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-button type="primary">
            画布设置
            <down theme="outline" size="24" fill="#333" />
          </el-button>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-checkbox v-model="setting.showPort">连接功能</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-checkbox v-model="setting.dragGraph" @change="onToggleDrag">拖拽画布</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-checkbox v-model="setting.showGrid" @change="onToggleGrid">显示网格</el-checkbox>
            </el-dropdown-item>
            <el-dropdown-item disabled>滚轮缩放</el-dropdown-item>
            <el-dropdown-item divided>恢复默认</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div style="margin-right: 10px;">
        <el-button size="small" type="primary" @click="onDownload">保存</el-button>
        <el-button size="small" type="primary">导入</el-button>
        <el-button size="small" type="primary">撤销</el-button>
        <el-button size="small" type="primary">重做</el-button>
      </div>
      <div style="border-left:1px solid #aaa;padding-left: 10px;">
        <el-checkbox v-model="setting.smartConnect" @change="onSmartConnect">
          {{setting.smartConnect?"快速连接":'取消连接'}}</el-checkbox>
        <el-checkbox v-model="setting.canZoom" @change="onToggleZoom">缩放功能</el-checkbox>
      </div>
    </div>
    <div class="graph-container" :class="setting.showPort ? '' : 'hidePort'">
      <div ref="antZoneLeft" class="graph-adder"></div>
      <div ref="antGraphDOM" class="graph-editor"></div>
      <div ref="antZoneLeft2" class="graph-adder">
        <div style="height: 80%">
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
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DataUri, Addon, Graph } from '@antv/x6'
import type { Shape } from '@antv/x6'
import { getSpecialCircle } from './shape/specialGraph.js'
// import moment from 'dayjs'
import graphData from './graphData.js'
import './registerComponents.ts'
// 引入自定义组件文件
defineEmits(['selectCell'])
const setting = reactive({
  showPort: true, // 显示连接
  dragGraph: true, // 移动画布
  showGrid: false, // 展示网格
  smartConnect: false, // 智能连接
  canZoom: true,
  deleteEdgeConfirm: true
})
const graph = ref<Graph>()

const antZoneLeft = ref<HTMLElement>()
const antGraphDOM = ref<HTMLElement>()
onMounted(() => {
  console.log(antGraphDOM)
  // 图形编辑区域
  initGraphZone()
  initGraphAdder()
  registerEvents()
})
function initGraphZone() {
  graph.value = new Graph({
    container: antGraphDOM.value,
    panning: true,
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
  graph.value.fromJSON(graphData)
}
function initGraphAdder() {
  //  创建对象
  const stencil = new Addon.Stencil({
    search: false,
    // collapsable: true,
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
        name: 'specialShape',
        title: '特定组件',
        graphWidth: 200,
        graphHeight: 300
      }
    ]
  })
  // const r1 = getBasicRect()
  const circle = getSpecialCircle()
  stencil.load([circle], 'specialShape')
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
function onSmartConnect() {
  if (!graph.value) {
    return
  }
  if (setting.smartConnect) {
    graph.value.enableMultipleSelection()
  } else {
    graph.value.disableMultipleSelection()
  }
  // 只要改变状态，就清空快速连接的内容
}
function onToggleZoom() {
  connectRect('d', 'fd')
  addConnect('dd', 'ff')
  // graph.value.toJSON()
}
function onDownload() {
  graph.value.toPNG(
    (dataUri) => {
      // 下载
      DataUri.downloadDataUri(dataUri, 'chart.png')
    },
    {
      padding: {
        top: 20,
        right: 30,
        bottom: 40,
        left: 50
      }
    }
  )
}

function onToggleDrag() {
  // console.log(this.setting.dragGraph)
  if (!graph.value) {
    throw Error('获取不到 graph')
  }
  if (setting.dragGraph) {
    graph.value.enablePanning()
    graph.value.disableRubberband()
    graph.value.disableSelection()
  } else {
    graph.value.disablePanning()
    graph.value.enableSelection()
    graph.value.enableRubberband()
  }
}
function onToggleGrid() {
  if (!graph.value) {
    return
  }
  if (setting.showGrid) {
    graph.value.showGrid()
  } else {
    graph.value.hideGrid()
  }
}
// 重新移动链接两个 rect
function connectRect(rect1: any, rect2: any) {
  const { graph } = this
  let rect1Ports = {}
  // let rect2Ports = {}
  let connectMap = {
    'top-1': { relative: 'left-4', target: 'right-4', x: -200, y: -200 },
    'top-2': { relative: 'top-3', target: 'bottom-3', x: 0, y: -200 },
    'top-3': { relative: 'top-2', target: 'bottom-2', x: 0, y: -200 },
    'top-4': { relative: 'right-1', target: 'left-1', x: 200, y: -200 },
    'right-1': { relative: 'top-4', target: 'bottom-4', x: 200, y: -200 },
    'right-2': { relative: 'right-3', target: 'left-3', x: 200, y: 0 },
    'right-3': { relative: 'right-2', target: 'left-2', x: 200, y: 0 },
    'right-4': { relative: 'bottom-1', target: 'top-1', x: 200, y: 200 },
    'bottom-1': { relative: 'right-4', target: 'left-4', x: 200, y: 200 },
    'bottom-2': { relative: 'bottom-3', target: 'top-3', x: 0, y: 200 },
    'bottom-3': { relative: 'bottom-2', target: 'top-2', x: 0, y: 200 },
    'bottom-4': { relative: 'left-1', target: 'right-1', x: -200, y: 200 },
    'left-1': { relative: 'bottom-4', target: 'top-4', x: -200, y: 200 },
    'left-2': { relative: 'left-3', target: 'right-3', x: -200, y: 0 },
    'left-3': { relative: 'left-2', target: 'right-2', x: -200, y: 0 },
    'left-4': { relative: 'bottom-1', target: 'right-1', x: -200, y: -200 }
  }
  const { x: rect1X, y: rect1Y } = rect1.position()
  // const result = graph.findViewsInArea(rect1X, rect1Y)
  Object.keys(connectMap).forEach((port) => {
    rect1Ports[port] = true
  })
  Object.entries(connectMap).find(([key, value]) => {
    const result = graph.findViewsInArea(
      rect1X + value.x,
      rect1Y + value.y,
      60,
      60
    )
    if (result.length > 0) {
      delete rect1Ports[key]
    }
  })
  // const allEdges = graph.getEdges()
  // allEdges.forEach((edge) => {
  //   const target = edge.getTarget()
  //   const source = edge.getSource()
  //   if (target.cell == rect1.id && rect1Ports[target.port]) {
  //     let relativePorts = connectMap[target.port].relative
  //     delete rect1Ports[target.port]
  //     delete rect1Ports[relativePorts]
  //   }
  //   if (source.cell == rect1.id && rect1Ports[source.port]) {
  //     let relativePorts = connectMap[source.port].relative
  //     delete rect1Ports[source.port]
  //     delete rect1Ports[relativePorts]
  //   }
  // })
  // console.log('剩余未使用节点', rect1Ports)
  let connectPortSource = Object.keys(rect1Ports).find((item) => item)
  if (!connectPortSource) {
    console.error('没有额外节点提供连接')
    graph.removeNode(rect2)
    return
  }
  let connectTarget = connectMap[connectPortSource]
  // console.log(connectPortSource)
  // console.log(connectTarget)
  // console.log(rect2.position())
  let { x: locateX, y: locateY } = rect2.position()
  rect2.position(locateX + connectTarget.x, locateY + connectTarget.y)
  // console.log(locateX + connectTarget.x)
  // console.log(rect2.position())
  graph.addEdge({
    shape: 'edge', // 指定使用何种图形，默认值为 'edge'
    source: { cell: rect1, port: connectPortSource },
    target: { cell: rect2, port: connectTarget.target }
  })
  // 对两个 rect 进行连接默认上、右、下、左，如果都已经有内容，则，右上，右下，左下，左上
}
function onConnectRelativeRect() {
  if (!graph.value) {
    throw new Error('未获取到 graph')
  }
  const selectNodes = graph.value.getSelectedCells().filter((item) => item.isNode())
  // console.log(selectNodes)
  for (let i = 0; i < selectNodes.length; i++) {
    console.log('执行了', i)
    if (i + 1 === selectNodes.length) {
      addConnect(selectNodes.at(i), selectNodes.at(0))
    } else {
      addConnect(selectNodes[i], selectNodes[i + 1])
    }
  }
  const update = (edge) => {
    const edgeView = graph.findViewByCell(edge)
    console.log('update')
    edgeView.update()
  }
  selectNodes.forEach((edge) => {
    edge.on('change:position', update(edge))
  })
}
function addConnect(rect1: Shape.Rect, rect2) {
  const { graph } = this
  const rect1Ports = {
    left: 'left-3',
    top: 'top-3',
    bottom: 'bottom-2',
    right: 'right-3',
    'right-top': 'top-4',
    'left-top': 'top-1',
    'right-bottom': 'bottom-1',
    'left-bottom': 'left-1'
  }
  const connectMap = {
    'top-1': { relative: 'left-4', target: 'right-4', x: -200, y: -200 },
    'top-2': { relative: 'top-3', target: 'bottom-3', x: 0, y: -200 },
    'top-3': { relative: 'top-2', target: 'bottom-2', x: 0, y: -200 },
    'top-4': { relative: 'right-1', target: 'left-1', x: 200, y: -200 },
    'right-1': { relative: 'top-4', target: 'bottom-4', x: 200, y: -200 },
    'right-2': { relative: 'right-3', target: 'left-3', x: 200, y: 0 },
    'right-3': { relative: 'right-2', target: 'left-2', x: 200, y: 0 },
    'right-4': { relative: 'bottom-1', target: 'top-1', x: 200, y: 200 },
    'bottom-1': { relative: 'right-4', target: 'left-4', x: 200, y: 200 },
    'bottom-2': { relative: 'bottom-3', target: 'top-3', x: 0, y: 200 },
    'bottom-3': { relative: 'bottom-2', target: 'top-2', x: 0, y: 200 },
    'bottom-4': { relative: 'left-1', target: 'right-1', x: -200, y: 200 },
    'left-1': { relative: 'bottom-4', target: 'top-4', x: -200, y: 200 },
    'left-2': { relative: 'left-3', target: 'right-3', x: -200, y: 0 },
    'left-3': { relative: 'left-2', target: 'right-2', x: -200, y: 0 },
    'left-4': { relative: 'bottom-1', target: 'right-1', x: -200, y: -200 }
  }
  // 得出节点二在节点一的哪个位置，然后根据位置，选择对应的节点进行添加
  const { x: rect1X, y: rect1Y } = rect1.position()
  const { x: rect2X, y: rect2Y } = rect2.position()
  let position = []
  // rect1 在 rect2 的哪个方向
  if (rect1X - rect2X > 30) {
    position.push('left')
  } else if (rect1X - rect2X < -30) {
    position.push('right')
  }
  if (rect1Y - rect2Y > 30) {
    position.push('top')
  } else if (rect1Y - rect2Y < -30) {
    position.push('bottom')
  }
  position = position.join('-')
  console.log(position)
  let connectPortSource = rect1Ports[position]
  if (!connectPortSource) {
    console.error('没有额外节点提供连接')
    return
  }
  let connectTarget = connectMap[connectPortSource]
  graph.addEdge({
    shape: 'edge', // 指定使用何种图形，默认值为 'edge'
    source: { cell: rect1, port: connectPortSource },
    target: { cell: rect2, port: connectTarget.target },
    router: {
      name: 'manhattan',
      args: {
        startDirections: position.split('-'),
        endDirections: position.split('-')
      }
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

.tool-bar {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.graph-container {
  border: 1px solid #ccc;
  border-radius: 6px;
  height: 84vh;
  width: calc(100% - 40px);
  overflow: hidden;
  background-color: #fff;
  display: flex;
  // justify-content: flex-start;
  margin: 20px;

  .graph-adder {
    height: 84vh;
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