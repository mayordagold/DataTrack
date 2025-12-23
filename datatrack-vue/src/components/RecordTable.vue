<template>
  <table class="min-w-full border">
    <thead>
      <tr class="bg-gray-100">
        <th class="p-2 border">Title</th>
        <th class="p-2 border">Category</th>
        <th class="p-2 border">Amount</th>
        <th class="p-2 border">Description</th>
        <th class="p-2 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in records" :key="r._id">
        <td class="p-2 border">{{ r.title }}</td>
        <td class="p-2 border">{{ r.category }}</td>
        <td class="p-2 border">{{ r.amount }}</td>
        <td class="p-2 border">{{ r.description }}</td>
        <td class="p-2 border">
          <button class="text-red-600" @click="del(r._id)">Delete</button>
        </td>
      </tr>
      <tr v-if="!records?.length">
        <td class="p-4 text-center text-gray-500" colspan="5">No records</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { API } from '../config/api'
const props = defineProps({ records: { type: Array, default: () => [] } })
const emit = defineEmits(['deleted'])
const token = localStorage.getItem('token')

async function del(id) {
  await API.delete(`/records/${id}`, { headers: { Authorization: `Bearer ${token}` } })
  emit('deleted')
}
</script>
