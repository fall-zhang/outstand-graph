<template>
  <PageLayout>
    <template #header-icon>
      <BachelorDegreeIcon />
    </template>
    <main class="fun-main">
      <div class="add-item">
        <MindmapMapIcon class="menu-icon left" />
        <span class="add-text">新建导图</span>
        <IconPlus class="menu-icon"></IconPlus>
      </div>
    </main>
  </PageLayout>
</template>

<script lang="ts" setup>
import { Plus as IconPlus, MindmapMap as MindmapMapIcon } from '@icon-park/vue-next'
import BachelorDegreeIcon from '@/components/icons/BachelorDegree.vue'
import { PageLayout } from '@/layout'
</script>

<style lang="scss" scoped>
.add-item {
  height: 64px;
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
  padding: 16px;
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
