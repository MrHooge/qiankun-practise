<template>
  <div id="microApp"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { start } from 'qiankun';


onMounted(()=>{
  if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
})
</script>

<style scoped>

</style>