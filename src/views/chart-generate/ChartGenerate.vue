<!-- 通过导入 excel 或者其它类型的数据，将数据选中，挂载到图表上 -->
<template>
  <PageLayout no-side>
    <template #header-icon>
      <IconReturn @click="onClickBack" style="cursor: pointer;" />
    </template>
    <div style="display: flex;overflow: hidden;">

    </div>
  </PageLayout>
</template>

<script lang="ts" setup>
import { PageLayout } from '@/layout'
const router = useRouter()
const onClickBack = () => router.go(-1)
</script>

<style lang="scss" scoped></style>
