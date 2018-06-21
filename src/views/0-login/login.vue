<template>
  <div @click="click">login</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  nmae: 'login',
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
