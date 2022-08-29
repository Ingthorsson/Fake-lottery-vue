import { RouterLink, RouterView } from "vue-router";

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/posts">Posts</RouterLink></li>
    </ul>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  position: relative;
  max-width: 120rem;
  padding: 0.6rem 1rem;
  margin: 0 auto 4rem auto;
  font-weight: 700;
  font-size: 2rem;
  background-color: rgb(256, 256, 256, 0.7);
  box-shadow: 0.2rem 0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
}

ul {
  list-style: none;
  position: relative;
}

li {
  display: inline-block;
  transition: all 0.3s ease-in;
  border-radius: 2rem;
  margin-right: 1rem;
}

li a {
  color: grey;
  text-decoration: none;
  text-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
  display: block;
  padding: 0.5em 1.4em;
  transition: all 0.3s ease-in;
}

li:hover {
  background-color: red;
}

li:hover > a {
  color: white;
}

li:hover .menu-sub {
  max-height: 80rem;
}
</style>
