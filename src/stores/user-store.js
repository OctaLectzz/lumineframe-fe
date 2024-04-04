import { defineStore } from 'pinia'
import { server } from 'src/boot/axios'

const token = localStorage.getItem('token')
const headers = {
  Authorization: `Bearer ${token}`
}

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    avatar: null,
    first_name: null,
    last_name: null,
    name: null,
    email: null,
    password: null,
    repassword: null,
    role: null,
    gender: null,
    phone: null,
    url: null,
    address: null,
    status: null,
    photos: null,
    likes: null
  }),
  getters: {},
  actions: {
    async all() {
      return await server.get('api/user', { headers })
    },

    async show(id) {
      return await server.get(`api/user/${id}`, { headers })
    },

    async create(data) {
      return await server.post('api/user', data, { headers })
    },

    async edit(data) {
      return await server.put(`api/user/${data.id}`, data, { headers })
    },

    async delete(data) {
      return await server.delete(`api/user/${data}`, { headers })
    }
  },
  persist: true
})