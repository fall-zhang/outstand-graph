<template>
  <div class="chartFileGroup" ref="outContainer" :style="{ gridTemplateColumns: 'repeat(' + rowCount + ',1fr)' }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const prop = defineProps({
  max: {
    require: true,
    type: Number,
    default: 260
  },
  width: {
    require: true,
    type: Number,
    default: 260
  }
})
const outContainer = ref()
const rowCount = ref()
function resizeContainer() {
  const out = outContainer.value.getBoundingClientRect()
  let columnCount = Math.floor(Number(out.width) / prop.width)
  if (columnCount === 0) {
    rowCount.value = 1
  } else {
    rowCount.value = columnCount

  }
}
onMounted(() => {
  window.addEventListener('resize', resizeContainer)
  resizeContainer()
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeContainer)
})

</script>
<style lang="scss" scoped>
.chartFileGroup {
  display: grid;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 20px;
  box-sizing: border-box;

  .chartItem {
    display: flex;
    border-radius: 8px;
    // height: 180px;
    flex: 1;
    box-sizing: border-box;
    min-width: 280px;
    // max-height: 260px;
    border: 1px solid var(--gray-1);
    box-shadow: var(--box-shadow-2);
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;

    >.headText {
      padding: 8px 8px 0;
    }

    >.itemImg {
      display: flex;
      padding: 12px 0;
      max-width: 100%;
      max-height: 100%;
      flex: 1;
    }

    >.itemText {
      border-top: 1px solid var(--gray-1);
      display: flex;
      padding: 8px 18px 12px;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.option {
  width: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 6px;

  .star {
    display: flex;
    padding: 4px;
    align-items: center;
    transition: 0.2s;

    &:hover {
      color: orange;
    }
  }

  .more {
    font-size: 18px;
    display: flex;
    padding: 4px;
    align-items: center;
    border-radius: 4px;

    &:hover {
      background-color: var(--gray-1);
    }

  }
}
</style>