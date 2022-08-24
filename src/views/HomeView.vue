<template>
  <div ref="minRef" class="cards">
    <div ref="showHideBigRef" class="card card-big" @click="toggleShowHide('big')">
      <img
        src="https://dooj13qizhkfs.cloudfront.net/asset/big_logo.svg"
        class="card-logo img-grow"
      />
      <div class="expand"></div>
      <BigLottoCard />
    </div>

    <div ref="showHideLuckyRef" class="card card-lucky" @click="toggleShowHide('lucky')">
      <img
        src="https://dooj13qizhkfs.cloudfront.net/asset/lucky_logo.svg"
        class="card-logo img-grow"
      />
      <div class="expand"></div>
      <luckyLottoCard />
    </div>

    <div ref="showHideSpinRef" class="card card-spin" @click="toggleShowHide('spin')">
      <img
        src="https://dooj13qizhkfs.cloudfront.net/asset/big_logo.svg"
        class="card-logo img-grow"
      />
      <div class="expand"></div>
      <spinLottoCard />
    </div>
  </div>
</template>

<script setup>
/*
  IMPORTS
*/

import { ref, onMounted } from "vue";
import BigLottoCard from "../components/card/BigLottoCard.vue";
import luckyLottoCard from "../components/card/LuckyLottoCard.vue";
import spinLottoCard from "../components/card/SpinLottoCard.vue";

/*
  METHODS
*/
const minRef = ref(null);
const showHideBigRef = ref(null);
const showHideLuckyRef = ref(null);
const showHideSpinRef = ref(null);

let cardSelected = "";

const toggleShowHide = (type) => {
  let gameType = setType(type);

  if (cardSelected !== "") {
    if (cardSelected === type) {
      gameType.classList.value = `card card-${type}`;
      gameType.style.zIndex = "1";
      cardSelected = "";
      minRef.value.classList.value = "cards";
    } else {
      setType(cardSelected).classList.value = `card card-${cardSelected}`;
      gameType.classList.value = `card card-${type} show`;
      gameType.style.zIndex = "10";
      cardSelected = type;
    }
  } else {
    gameType.classList.value = `card card-${type} show`;
    gameType.style.zIndex = "10";
    cardSelected = type;
    minRef.value.classList.value = "cards showing";
  }
};

const setType = (type) => {
  let gameType;
  switch (type) {
    case "big":
      gameType = showHideBigRef.value;
      break;
    case "lucky":
      gameType = showHideLuckyRef.value;
      break;
    case "spin":
      gameType = showHideSpinRef.value;
      break;
    default:
      gameType = showHideBigRef.value;
  }
  return gameType;
};

/*
  LIFECYCLE
*/

onMounted(() => {
  console.log("Do stuff related to App Title");
});
</script>

<style>
.home {
  max-width: 1200px;
  margin: 1rem auto;
  text-align: center;
  z-index: 0;
}
.card {
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 9px 20px 9px;
  caret-color: transparent;
  border-radius: 5px 80px 20px 40px;
  transition: all 0.4s 0.4s ease-out;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}
.card-logo {
  margin: auto;
  min-width: 370px;
  height: 250px;
  padding: 30px;
}
.card-big {
  background-image: var(--big-lotto-up);
}
.card-lucky {
  background-image: var(--lucky-lotto-up);
}
.card-spin {
  background-image: var(--spin-lotto-up);
}

.expand {
  height: 20px;
}
</style>
