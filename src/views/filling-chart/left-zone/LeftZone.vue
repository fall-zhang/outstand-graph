<template>
  <AdjustmentContainer>
    <ul class="cell-menu">
      <li class="cell-item" @click="onSelectMenu(menuInfo)">这是一个菜单</li>
      <li class="cell-item">这是一个菜单</li>
    </ul>
  </AdjustmentContainer>
</template>
<script setup lang="ts">
import AdjustmentContainer from '@/layout/adjustment-container/AdjustmentContainer.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
function onSelectMenu(menuInfo) {
  router.push('/charts/' + menuInfo.id)
}
</script>
<style lang="scss" scoped>
.cell-item {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 8px 6px 14px;
  user-select: none;
  cursor: pointer;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
}
</style>