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
          {{ setting.smartConnect ? "快速连接" : '取消连接' }}</el-checkbox>
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

}
function onDownload() {
  (graph.value as Graph).toPNG(
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