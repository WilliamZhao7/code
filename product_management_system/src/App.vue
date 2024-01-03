<script setup lang="ts">

import { Plus } from '@element-plus/icons-vue'
for (let i = 0; i < 9; i++) {
  console.log(i);
}


</script>

<template>
  <div>
    <h1>HelloWorld</h1>
    <el-button type="warning" :icon="Plus">点我~</el-button>
  </div>
</template>

<style scoped></style>
