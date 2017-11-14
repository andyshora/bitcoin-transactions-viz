<template>
  <div class='transactions'>
    <p>Connected: {{socket.isConnected}}</p>
    <p>Subscribed: {{socket.isSubscribed}}</p>
    <button v-on:click='subscribe'>Subscribe</button>
    <button v-on:click='unsubscribe'>Unsubscribe</button>
    <section class='transactions__meta' v-if='socket.message'>
      <p>version: {{socket.message.x.ver}}</p>
      <p>size: {{socket.message.x.size}}</p>
      <p>hash: {{socket.message.x.hash}}</p>
      <p>vin_sz: {{socket.message.x.vin_sz}}</p>
      <p>{{socket.message.x.inputs.map(item => item.prev_out.value).join(',')}}</p>
      <p>vout_sz: {{socket.message.x.vout_sz}}</p>
      <p>{{socket.message.x.out.map(item => item.value).join(',')}}</p>

      <textarea>Message: {{socket.message}}</textarea>
    </section>
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
  .transactions textarea {
    width: 100%;
    height: 500px;
    display: none;
  }
  .transactions__meta {
    text-align: left;
  }
</style>
