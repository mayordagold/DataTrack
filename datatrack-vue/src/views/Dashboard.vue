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
import { API } from '../config/api'

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
      try {
        const res = await API.get('/records', {
          headers: { Authorization: `Bearer ${this.token}` }
        })
        this.records = res.data
      } catch (err) {
        console.error(err)
      }
    },
    async deleteRecord(id) {
      await API.delete(`/records/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
      this.fetchRecords()
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  },
  mounted() {
    if (!this.token) this.$router.push('/login')
    else this.fetchRecords()
  }
}
</script>

<style scoped>
/* optional styles */
</style>
