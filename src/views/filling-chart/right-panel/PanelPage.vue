<!-- 根据当前配置来展示配置内容 -->
<template>
  <div class="right-panel">
    <div class="panel-title">
      <h3>当前的属性</h3>
      <div>
        <a class="links" href="#" @click="onChangeOption">上一个</a>
        <a class="links" href="#" @click="onChangeOption">/当前的</a>
        <a class="links" href="#" @click="onChangeOption">/编辑的</a>
      </div>
    </div>
    <ul class="cell-group">
      <li class="cell-item link-cell">
        按钮，箭头
        <el-icon>
          <ArrowRight />
        </el-icon>
      </li>
      <!-- 标题文字小于六个，将会换行 -->
      <li class="cell-item basic-cell">
        <div class="basic-label">{{ '钮，箭头钮箭' }}
          <el-tooltip placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <el-input size="small" @input="onChangeInput" />
      </li>
      <li class="cell-item complex-cell">
        <div class="complex-label">{{ '钮，箭头钮箭' }}
          <el-tooltip placement="top" content="这里面有一些信息，可能有些长，但是你必须展示出来">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <el-input size="small" type="textarea" @input="onChangeInput" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ArrowRight, QuestionFilled } from '@element-plus/icons-vue'
import FormPageItem from './PanelPageItem.vue'
import { ref } from 'vue'
defineProps({
  title: {
    default: '这是标题',
    type: String
  },
  subTitle: {
    default: '这是小标题',
    type: String
  }
})
const currentPath = ref([])
const popupVisible = ref(false)
function onChangeInput() {
  popupVisible.value = false
}
function onChangeOption() {

}
</script>

<style scoped lang="scss">
.right-panel {
  border-left: 1px solid #ccc;
  background-color: white;
  // z-index: 2000;
  height: 100vh;
  overflow: auto;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);

  .panel-title {
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: 600;
    }

    .links {
      text-decoration: none;
    }
  }
}

.cell-group {
  user-select: none;
}

.cell-item {
  padding: 4px 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 1.2s;

  &:hover {
    background-color: rgba(194, 212, 211, 0.15);
  }

  &.link-cell {
    cursor: pointer;
    height: 40px;
    min-width: 110px;
  }

  &.basic-cell {
    height: 26px;

    .basic-label {
      min-width: 110px;
    }
  }

  &.complex-cell {
    display: block;
    min-width: 110px;
    height: auto;
  }
}
</style>
