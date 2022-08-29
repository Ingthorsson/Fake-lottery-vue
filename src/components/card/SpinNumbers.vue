<template>
  <ul>
    <li v-for="num in game.spinLotto.draw" :key="num">{{ num }}</li>
  </ul>
</template>

<script setup>
import { useLottoData } from "../../use/useLottoData";

/*
  DATA 
*/

const { game } = useLottoData();
</script>

<style scoped>
li {
  background: radial-gradient(circle, rgb(234, 54, 222) 0%, rgb(144, 1, 146) 100%);
}
</style>
