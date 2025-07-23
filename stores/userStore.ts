
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as { id: number; name: string }[],
  }),
  actions: {
    async fetchUsers() {
      const { data } = await useFetch('/api/users')
      this.users = data.value || []
    },
    async addUser(name: string) {
      await $fetch('/api/users', {
        method: 'POST',
        body: { name }
      })
      await this.fetchUsers()
    }
  }
})
