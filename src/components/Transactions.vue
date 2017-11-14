<template>
  <div class='transactions'>
    <section class='transactions__controls'>
      <button v-on:click='subscribe' :disabled='socket.isSubscribed'>Start</button>
      <button v-on:click='unsubscribe' :disabled='!socket.isSubscribed'>Stop</button>
    </section>
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
.transactions__controls {
  position: fixed;
  background: rgba(255, 255, 255, 0.5);
  top: 0;
  right: 0;
  padding: 10px;
}
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
