<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang='ts' setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style lang='scss'>
@import "./styles/base";
@import "./styles/ui";

.notification-popper-class {
  padding: 0 !important;
}
</style>