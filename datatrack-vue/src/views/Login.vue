<template>
  <div class="max-w-md mx-auto mt-10">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">DataTrack</h1>
      <p class="text-gray-600">Manage your records efficiently</p>
    </div>
    <h2 class="text-2xl font-bold mb-4 text-center">DataTrack - Login</h2>
    <form @submit.prevent="login" class="space-y-4">
      <input v-model="email" placeholder="Email" class="w-full border p-2 rounded" required />
      <input v-model="password" placeholder="Password" type="password" class="w-full border p-2 rounded" required />
      <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
    </form>
    <p class="mt-4 text-center">
      Don't have an account? <router-link to="/register" class="text-blue-600">Register</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { API } from '../config/api'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    const res = await API.post('/auth/login', { email: email.value, password: password.value })
    localStorage.setItem('token', res.data.token)
    router.push('/')
  } catch (err) {
    alert('Login failed')
  }
}
</script>
