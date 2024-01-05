
<template>
  <div>
    <h1>HelloWorld</h1>
    <el-button type="warning" :icon="Plus">点我~</el-button>

    <!-- <svg>
      <use xlink:href="#icon-home"></use>
    </svg> -->

    <svg-icon name="home" color="red"></svg-icon>

  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import request from '@/utils/request'
import { onMounted } from 'vue';

onMounted(() => {
  request({
    url: 'api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111000'
    }

  }).then(res => console.log(res))

})
// import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
