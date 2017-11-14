<template>
  <transition name='bounce'>
    <div class='transaction-shape' :style='{backgroundImage:`url(${pattern})`}' >
      <div class='transaction-shape__value'>${{numForDisplay}}</div>
    </div>
  </transition>
</template>

<script>
import Trianglify from 'trianglify';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'CONSTANTS'
    ]),
    totalOutput() {
      return this.data.out.reduce((prevVal, item) => (
        prevVal + (item.value * this.CONSTANTS.SATOSHI_VALUE * this.CONSTANTS.BTC_TO_DOLLARS)
      ), 0);
    },
    numForDisplay() {
      return this.totalOutput
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    pattern() {
      const squareGem = [
        [30, 30],
        [50, 25],
        [70, 30],
        [40, 40],
        [60, 40],
        [25, 50],
        [75, 50],
        [60, 60],
        [40, 60],
        [30, 70],
        [50, 75],
        [70, 70]
      ];

      const simpleDiamond = [
        [25, 0],
        [50, 0],
        [75, 0],
        [0, 20],
        [33.3, 20],
        [66.6, 20],
        [100, 20],
        [50, 100]
      ];

      const complexDiamond = [
        [12.5, 0],
        [25, 0],
        [37.5, 0],
        [50, 0],
        [62.5, 0],
        [75, 0],
        [87.5, 0],
        [1, 20],
        [16.75, 20],
        [33.3, 20],
        [49.8, 20],
        [66.6, 20],
        [83.1, 20],
        [100, 20],
        [50, 98]
      ];

      let points = squareGem;

      if (this.totalOutput > 10000) {
        points = simpleDiamond;
      } else if (this.totalOutput > 100000) {
        points = complexDiamond;
      }

      const pattern = Trianglify({
        width: 100,
        height: 100,
        seed: this.data.hash,
        cell_size: 10,
        points
      });
      return pattern.png();
    }
  },
  props: ['data']
}
</script>

<style scoped>
.transaction-shape {
  position: relative;
  margin: 10px;
  display: inline-block;
  font-size: 10px;
  width: 100px;
  height: 100px;
  background-size: 100px 100px;
  overflow: hidden;
}
.transaction-shape__value {
  position: absolute;
  top: 40%;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 12px;
}
.bounce-enter-active {
  animation: bounce .6s;
}
.bounce-leave-active {
  animation: bounce .6s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
