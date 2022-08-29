<template>
  <div class="card-face card-face-lucky lotto-content">
    <h2>Winning Numbers</h2>
    <h3>{{ game.luckyLotto.date }}</h3>
    <LuckyNumbers />
    <div class="buttons">
      <button @click="showModal = true">Prize Details</button>
      <button>Win Checker</button>
    </div>

    <teleport to="body">
      <div class="modal" v-if="showModal">
        <div class="modalView">
          <h1>Prize Details</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias alias,
            voluptates, adipisci non distinctio earum odio doloribus corporis aliquam vel
            quam illo quo dolorum amet recusandae reprehenderit eum totam magnam.
          </p>
          <button @click="showModal = false">Hide Modal</button>
        </div>
      </div>
    </teleport>

    <GetMore />
  </div>
</template>

<script setup>
import GetMore from "./GetMore.vue";
import LuckyNumbers from "./LuckyNumbers.vue";
import { useLottoData } from "../../use/useLottoData";
import { ref } from "vue";

/*
  DATA 
*/

const { game } = useLottoData();

/* 
modals
*/
const showModal = ref(false);
</script>

<style>
.modal {
  color: white;
  background: rgb(65, 65, 65, 0.5);
  padding: 1rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.modalView {
  margin: 20%;
  border: solid 0.2rem white;
  border-radius: 0.8rem;
  padding: 4rem 50px;
  background-color: black;
  box-shadow: 3px 3px 14px 2px rgba(0, 0, 0, 0.4);
}
.card .card-face-lucky {
  background-image: var(--lucky-lotto-down);
}

.card.show .card-face-lucky {
  background-image: var(--lucky-lotto-down);
}
</style>
