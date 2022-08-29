<template>
  <ul>
    <li v-for="num in game.bigLotto.bigDraw" :key="num">{{ num }}</li>
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
  background: radial-gradient(circle, rgb(8, 179, 59) 0%, rgb(1, 82, 20) 100%);
}
</style>
