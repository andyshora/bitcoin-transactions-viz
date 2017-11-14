<template>
  <div class='transactions'>
    <p>Connected: {{socket.isConnected}}</p>
    <p>Subscribed: {{socket.isSubscribed}}</p>
    <p>Message: {{socket.message}}</p>
    <button v-on:click='subscribe'>Subscribe</button>
    <button v-on:click='unsubscribe'>Unsubscribe</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {},
  computed: {
    ...mapGetters([
      'socket'
    ])
  },
  methods: {
    ...mapActions([
      'subscribe',
      'unsubscribe'
    ])
  }
}
</script>

<style scoped>
.transactions {}
</style>
