<template>
  <PageLayout title="控制中心">
    <template #header-icon>
      <BachelorDegreeIcon />
    </template>
    <template #aside>
      <RecentlyFiles />
    </template>
    <main>
      <CreateGroup />
      <div class="select">
        <div>全部</div>
        <div>图表</div>
        <div>视图</div>
        <div>收藏</div>
      </div>
    </main>
  </PageLayout>
</template>

<script lang="ts" setup>
import BachelorDegreeIcon from '@/components/icons/BachelorDegree.vue'
import CreateGroup from './components/create-group.vue'
import RecentlyFiles from './components/recently-files'
import { PageLayout } from '@/layout'

</script>

<style lang="scss" scoped></style>
