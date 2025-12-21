<template>
  <form class="grid grid-cols-1 md:grid-cols-4 gap-4" @submit.prevent="submit">
    <input v-model="form.title" placeholder="Title" class="border p-2 rounded" required />
    <input v-model="form.category" placeholder="Category" class="border p-2 rounded" />
    <input v-model.number="form.amount" placeholder="Amount" type="number" class="border p-2 rounded" />
    <input v-model="form.description" placeholder="Description" class="border p-2 rounded" />
    <button class="bg-blue-600 text-white px-4 py-2 rounded md:col-span-4">Add</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'

const emit = defineEmits(['created'])
const form = reactive({ title: '', category: '', description: '', amount: null })
const token = localStorage.getItem('token')
const api = axios.create({ baseURL: 'http://localhost:5000/api' })

async function submit() {
  await api.post('/records', form, { headers: { Authorization: `Bearer ${token}` } })
  Object.assign(form, { title: '', category: '', description: '', amount: null })
  emit('created')
}
</script>
