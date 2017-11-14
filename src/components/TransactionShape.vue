<template>
  <transition name='bounce'>
    <div class='transaction-shape'>
      <p>{{data.hash}}</p></p>
      <p>£{{totalOutput.toFixed(2)}}</p>
      <p><span v-for='n in data.vin_sz' key='n'>◀</span></p>
      <p><span v-for='n in data.vout_sz' key='n'>▶</span></p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'CONSTANTS'
    ]),
    totalOutput() {
      return this.data.out.reduce((prevVal, item) => (
        prevVal + (item.value * this.CONSTANTS.SATOSHI_VALUE * this.CONSTANTS.BTC_TO_POUNDS)
      ), 0)
    }
  },
  methods: {},
  props: ['data']
}
</script>

<style scoped>
.transaction-shape {
  padding: 5px;
  margin: 2px;
  display: inline-block;
  font-size: 10px;
  width: 100px;
  height: 100px;
  background: hotpink;
  overflow: hidden;
  border-radius: 50%;
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
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
