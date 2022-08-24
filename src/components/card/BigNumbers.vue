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
ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
li {
  margin: 0 4px 0 4px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  width: 40px;
  height: 40px;
  border: white 3px solid;
  border-radius: 70px 70px;
  background: #dd621d;
  background: radial-gradient(circle, rgb(8, 179, 59) 0%, rgb(1, 82, 20) 100%);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 3px 3px 7px 2px rgba(0, 0, 0, 0.58);
  box-shadow: 3px 3px 7px 2px rgba(0, 0, 0, 0.4);
}
</style>
