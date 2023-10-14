<template>
  <el-container style="height: 100%;">
    <el-header class="header">
      <slot name="header">
        <div class="header-left">
          <slot name="header-left">
            <slot name="header-icon"></slot>
            {{ title }}
          </slot>
        </div>
        <div>
          <slot name="header-center"></slot>
        </div>
        <div>
          <slot name="header-right"></slot>
        </div>
      </slot>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" v-if="!noSide">
        <slot name="aside">
          <SideMenu></SideMenu>
        </slot>
      </el-aside>
      <el-main class="main">
        <slot>
          <router-view />
        </slot>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <slot name="footer">
        <div class="copyright">
          <span>Fall Zhang All Right Reserve</span>
        </div>
      </slot>
    </el-footer>
  </el-container>
</template>
<script lang="ts" setup>
import SideMenu from '@/layout/SideMenu.vue'
// import { defineProps } from 'vue'
defineProps<{
  title?: string,
  noSide?: boolean,
  nohead?: boolean,
}>()
// const height = '200px'
</script>
<style lang="scss">
.header {
  height: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 12px #bbb;

  .header-left {
    display: flex;
    align-items: center;
    font-weight: 550;
    align-self: center;
    // justify-self: center;
    font-size: 22px;
    text-shadow: 1px 1px 12px #ddd;

    :first-child {
      margin-right: 8px;
    }
  }

  .header-center {
    align-self: center;
    justify-self: center;
  }
}

.container {
  height: calc(100vh - 60px - 30px);

  .aside {
    background-color: #efefef;
    border-right: 1px solid #e8e8e8;
  }

  .main {
    background-color: #f8f8f8;
    --el-main-padding: 0;
    display: flex;
    flex-flow: column;
  }
}

.footer {
  height: 30px;
  line-height: 30PX;

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
