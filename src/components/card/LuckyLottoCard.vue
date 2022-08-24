<template>
  <div class="card-face card-face-lucky lotto-content">
    <h2>Winning Numbers</h2>
    <h3>{{ game.luckyLotto.date }}</h3>
    <LuckyNumbers />
    <GetMore />
  </div>
</template>

<script setup>
import GetMore from "./GetMore.vue";
import LuckyNumbers from "./LuckyNumbers.vue";
import { useLottoData } from "../../use/useLottoData";

/*
  DATA 
*/

const { game } = useLottoData();
</script>

<style>
.card .card-face-lucky {
  background-image: var(--lucky-lotto-down);
}

.card.show .card-face-lucky {
  background-image: var(--lucky-lotto-down);
}
</style>
