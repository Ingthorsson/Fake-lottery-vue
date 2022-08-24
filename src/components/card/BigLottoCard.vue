<template>
  <div class="card-face card-face-big lotto-content">
    <h2>Winning Numbers</h2>
    <h3>{{ game.bigLotto.bigDate }}</h3>
    <BigNumbers />
    <GetMore />
  </div>
</template>

<script setup>
import GetMore from "./GetMore.vue";
import BigNumbers from "./BigNumbers.vue";
import { useLottoData } from "../../use/useLottoData";

/*
  DATA 
*/

const { game } = useLottoData();

console.log(game);
</script>

<style>
.card .card-face-big {
  background-image: var(--big-lotto-down);
}

.card.show .card-face-big {
  background-image: var(--big-lotto-down);
}
</style>
