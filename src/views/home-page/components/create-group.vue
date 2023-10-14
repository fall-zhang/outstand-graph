<template>
  <div class="fun-main">
    <div class="add-item">
      <MindmapMapIcon class="menu-icon left" />
      <span class="add-text">新建导图</span>
      <IconPlus class="menu-icon"></IconPlus>
    </div>
    <div class="add-item">
      <IconKagiMap class="menu-icon left" />
      <span class="add-text">图表生成</span>
      <IconPlus class="menu-icon"></IconPlus>
    </div>
    <div class="add-item">
      <ChartHistogram class="menu-icon left" />
      <span class="add-text">创建图表</span>
      <IconPlus class="menu-icon"></IconPlus>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus as IconPlus, MindmapMap as MindmapMapIcon, ChartHistogram, KagiMap as IconKagiMap } from '@icon-park/vue-next'
</script>

<style lang="scss" scoped>
.add-item {
  height: 64px;
  margin-right: 24px;
  box-sizing: border-box;
  padding: 0 20px;
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--gary-1);

  &:hover {
    background-color: var(--gary-1);
    transition: .5s;
  }

  cursor: pointer;
}

.fun-main {
  display: flex;
  align-items: center;
  padding: 28px;
}

.add-text {
  flex: 1;
  font-size: 16px;
  line-height: 16px;
}

.menu-icon {
  width: 24px;
  font-size: 24px;
  display: flex;
  align-items: center;

  &.left {
    margin-right: 10px;
  }
}
</style>
