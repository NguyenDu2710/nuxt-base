
<template>
  <div class="p-4">
    <h1 class="text-xl font-bold">Danh sách người dùng</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>

    <input v-model="newUser" placeholder="Tên mới" class="border p-1 mt-4" />
    <button @click="addUser" class="bg-blue-500 text-white px-3 py-1 ml-2">
      Thêm
    </button>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const newUser = ref('')

onMounted(() => {
  userStore.fetchUsers()
})

const addUser = async () => {
  if (newUser.value.trim()) {
    await userStore.addUser(newUser.value)
    newUser.value = ''
  }
}
</script>
