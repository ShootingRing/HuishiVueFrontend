<script setup>

import {nextTick, provide, ref} from "vue";

  const isRouterAlive = ref(true)
  const reload = () => {
    isRouterAlive.value = false
    nextTick(() => {
      isRouterAlive.value = true
    })
  }
  provide('reload', reload)
</script>

<template>
  <!-- 路由占位符 -->
  <router-view v-if="isRouterAlive"></router-view>
</template>

<style scoped>
</style>
