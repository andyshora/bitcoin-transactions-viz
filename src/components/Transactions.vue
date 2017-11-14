<template>
  <div class='transactions'>
    <p>Connected: {{socket.isConnected}}</p>
    <p>Subscribed: {{socket.isSubscribed}}</p>
    <button v-on:click='subscribe'>Subscribe</button>
    <button v-on:click='unsubscribe'>Unsubscribe</button>
    <section class='transactions__meta' v-if='socket.message'>
      <transaction-shape :data='socket.message.x'></transaction-shape>
      <textarea>Message: {{socket.message}}</textarea>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TransactionShape from './TransactionShape';

export default {
  components: {
    'transaction-shape': TransactionShape
  },
  computed: {
    ...mapGetters([
      'socket',
      'CONSTANTS'
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
  .transactions textarea {
    width: 100%;
    height: 500px;
    display: none;
  }
  .transactions__meta {
    text-align: left;
  }
</style>
