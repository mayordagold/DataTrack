<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 p-6">
    <div v-if="$route.name !== 'Login'" class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">DataTrack Dashboard</h1>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        @click="logout"
      >
        Logout
      </button>
    </div>
    <router-view />
    <footer class="mt-10 text-center text-gray-500 text-sm">
      <p>&copy; 2025 DataTrack. Designed by Olumayowa Oginni.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Logout function
const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
