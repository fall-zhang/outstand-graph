<template>
  <div class="center">
    展示和设置宽高
    <el-input-number v-model="graphAttr.width" size="small" :step="10" :min="0"></el-input-number>
    <el-input-number v-model="graphAttr.height" size="small" :step="10" :min="0"></el-input-number>
    <el-button @click="onNextStep">前进</el-button>
    <el-button @click="onBackStep">后退</el-button>
    <!-- <el-button type="primary" size="small" @click="onGenCode">出码</el-button> -->
    <!-- 添加一个配置暂存，点解可以快速存储当前内容到一个配置内，如果再次点击可以应用 -->
    <!-- 导入 echarts 配置后，进行解析，并且应用当前配置 -->
    <GenCodeDialog></GenCodeDialog>
  </div>
</template>

<script lang="ts">
import GenCodeDialog from './copmponents/GenCodeDialog.vue'
import history from '@/utils/history'
// import {} from '@element-plus/icons-vue'
export default {
  name: 'HeaderTools',
  components: {
    GenCodeDialog
  },
  props: {
    option: {
      require: true,
      type: Object
    }
  },
  emits: ['back', 'next'],
  data() {
    return {
      codeGenShow: true,
      graphAttr: {
        width: 690,
        height: 500
      },
      codeView: null
    }
  },
  watch: {
    option(newVal, oldVal) {
      history.saveStep(newVal)
    }
  },
  mounted() {
    if (this.option) {
      history.saveStep(this.option)
    }
  },
  methods: {
    onNextStep() {
      this.$emit('back', history.nextStep())
    },
    onBackStep() {
      this.$emit('next', history.preStep())
    }
  }
}
</script>

<style scoped lang="scss">
.center {
  height: 36px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dddadd;
}
</style>
