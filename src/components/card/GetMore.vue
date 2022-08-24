<template>
  <div>GET MORE {{ game.getMore }}</div>
</template>

<script setup>
import { useLottoData } from "../../use/useLottoData";

/*
  DATA 
*/

const { game } = useLottoData();
</script>

<style scoped>
div {
  font-weight: 700;
  margin-top: 15px;
  background-color: black;
  width: fit-content;
  padding: 7px 15px;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.58);
  box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.4);
}
</style>
