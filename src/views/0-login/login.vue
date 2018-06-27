<template>
  <div @click="click">login</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'login',
  data() {
    return {
      name: 'login',
      numer: 0,
      username: '',
      password: ''
    }
  },
  methods: {
    click() {
      this.name = 'username'
    }
  }
})
</script>
