<template src = './Kumpo.html'> </template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        users: {}
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          console.log(res.data)
          this.users = res.data
        })
        .catch(err => console.log('Erroras:', err))
    }
  }
</script>

