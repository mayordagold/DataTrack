<template>
  <div class="max-w-md mx-auto mt-10">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">DataTrack</h1>
      <p class="text-gray-600">Manage your records efficiently</p>
    </div>
    <h2 class="text-2xl font-bold mb-4 text-center">DataTrack - Register</h2>
    <form @submit.prevent="register" class="space-y-4">
      <input v-model="fullName" placeholder="Full Name" class="w-full border p-2 rounded" required />
      <input v-model="email" placeholder="Email" class="w-full border p-2 rounded" required />
      <input v-model="password" placeholder="Password" type="password" class="w-full border p-2 rounded" required />
      <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Register</button>
    </form>
    <p class="mt-4 text-center">
      Already have an account? <router-link to="/login" class="text-blue-600">Login</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { API } from '../config/api'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')

const register = async () => {
  try {
    await API.post('/auth/register', { fullName: fullName.value, email: email.value, password: password.value })
    alert('Registration successful! Please login.')
    router.push('/login')
  } catch (err) {
    alert('Registration failed')
  }
}
</script>