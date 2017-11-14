<template>
  <div class='transactions'>
    <p>Connected: {{socket.isConnected}}</p>
    <p>Subscribed: {{socket.isSubscribed}}</p>
    <button v-on:click='subscribe'>Subscribe</button>
    <button v-on:click='unsubscribe'>Unsubscribe</button>
    <section class='transaction__shapes' v-if='socket.message'>
      <transaction-shape v-for='t in transactions' key='t.hash' :data='t'></transaction-shape>
    </section>
    <textarea>Message: {{socket.message}}</textarea>
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
      'CONSTANTS',
      'socket',
      'transactions'
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
  .transaction__shapes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }
</style>
