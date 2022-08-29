<template>
  <ul>
    <li v-for="num in game.luckyLotto.draw" :key="num">{{ num }}</li>
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
  background: radial-gradient(circle, rgb(54, 111, 234) 0%, rgb(1, 45, 146) 100%);
}
</style>
