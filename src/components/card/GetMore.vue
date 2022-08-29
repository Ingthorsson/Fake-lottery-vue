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
  font-size: 1.45rem;
  font-weight: 700;
  margin-top: 1.5rem;
  background-color: black;
  width: fit-content;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0.2rem 0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.58);
  box-shadow: 0.2rem 0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.4);
}
</style>
