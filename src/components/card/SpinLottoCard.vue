<template>
  <div class="card-face card-face-spin lotto-content">
    <h2>Winning Numbers</h2>
    <h3>{{ game.spinLotto.date }}</h3>
    <SpinNumbers />
    <GetMore />
  </div>
</template>

<script setup>
import GetMore from "./GetMore.vue";
import SpinNumbers from "./SpinNumbers.vue";
import { useLottoData } from "../../use/useLottoData";

/*
  DATA 
*/

const { game } = useLottoData();
</script>

<style>
.card .card-face-spin {
  background-image: var(--spin-lotto-down);
}

.card.show .card-face-spin {
  background-image: var(--spin-lotto-down);
}
</style>
