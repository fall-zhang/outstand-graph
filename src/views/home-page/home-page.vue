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
      <FileList></FileList>
    </main>
  </PageLayout>
</template>

<script lang="ts" setup>
import BachelorDegreeIcon from '@/components/icons/BachelorDegree.vue'
import CreateGroup from './components/create-group.vue'
import RecentlyFiles from './components/recently-files'
import FileList from './components/file-list'
import { PageLayout } from '@/layout'

</script>

<style lang="scss" scoped></style>
