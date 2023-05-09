<script setup lang="ts">
import useUserStore from '@/store/modules/user'

defineProps<{ msg: string }>()


const userStore = useUserStore()
userStore.changeUserName({
  userName: 'admin',
  userId: 123
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>userStore: {{ userStore.userInfo.userName }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
