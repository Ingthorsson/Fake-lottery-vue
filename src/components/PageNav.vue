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
  max-width: 1200px;
  padding: 6px 10px;
  margin: 0 auto 40px auto;
  font-weight: 700;
  font-size: 20px;
  background-color: rgb(256, 256, 256, 0.7);
  box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

ul {
  list-style: none;
  position: relative;
}

li {
  display: inline-block;
  transition: all 0.3s ease-in;
  border-radius: 20px;
  margin-right: 10px;
}

li a {
  color: grey;
  text-decoration: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  display: block;
  padding: 0.25em 1.25em;
  transition: all 0.3s ease-in;
}

li:hover {
  background-color: red;
}

li:hover > a {
  color: white;
}

li:hover .menu-sub {
  max-height: 800px;
}
</style>
