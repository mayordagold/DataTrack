<template>
  <div>
    <h1>DataTrack - Dashboard</h1>
    <button @click="logout">Logout</button>
    <RecordForm :token="token" @refresh="fetchRecords"/>
    <RecordTable :records="records" @delete="deleteRecord"/>
  </div>
</template>

<script>
import RecordForm from '../components/RecordForm.vue'
import RecordTable from '../components/RecordTable.vue'

export default {
  components: { RecordForm, RecordTable },
  data() {
    return {
      records: [],
      token: localStorage.getItem('token')
    }
  },
  methods: {
    async fetchRecords() {
      const res = await fetch('http://localhost:5000/api/records', {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      this.records = await res.json()
    },
    async deleteRecord(id) {
      await fetch(`http://localhost:5000/api/records/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${this.token}` }
      })
      this.fetchRecords()
    },
    logout() {
      localStorage.removeItem('token')
      window.location.href = '/' // redirect to login or home
    }
  },
  mounted() {
    if (!this.token) window.location.href = '/'
    else this.fetchRecords()
  }
}
</script>

<style scoped>
/* optional styles */
</style>
