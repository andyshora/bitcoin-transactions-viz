<template>
  <transition name='bounce'>
    <div class='transaction-shape'>
      <p>version: {{data.ver}}</p>
      <p>size: {{data.size}}</p>
      <p>hash: {{data.hash}}</p>
      <p>vin_sz: {{data.vin_sz}}</p>
      <p>{{data.inputs.map(item => item.prev_out.value * CONSTANTS.SATOSHI_VALUE).join(',')}}</p>
      <p>vout_sz: {{data.vout_sz}}</p>
      <p>{{data.out.map(item => item.value * CONSTANTS.SATOSHI_VALUE).join(',')}}</p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'CONSTANTS'
    ])
  },
  methods: {},
  props: ['data']
}
</script>

<style scoped>
.transaction-shape {
  padding: 10px;
  display: inline-block;
}
.bounce-enter-active {
  animation: bounce .6s;
}
.bounce-leave-active {
  animation: bounce .6s reverse;
}
.bounce2-enter-active {
  animation: bounce 2s;
}
.bounce2-leave-active {
  animation: bounce 2s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
