<template>
  <nav class="fixed-header">
    <div>
      <img src="~/assets/img/logo.jpg" alt="" />
    </div>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#contacts">Contacts</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  /* width: 90%; */
  height: 3rem;
  display: flex;
  padding: 0.4em 0;
  margin-bottom: 0;
  background: var(--white);
  justify-content: space-between;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  /* Add other styles as needed */
}

nav div img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
.visible {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, visibility 0.5s;
}
nav ul {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav ul li, li a {
  margin: 5rem 1em;
  cursor: pointer;
  list-style: none;
  position: relative;
  padding: 1.9rem 0.3rem;
  text-decoration: none;
  transition: all 0.5s ease;
}
nav ul li:hover {
  cursor: pointer;
  /* font-size: large; */
  color: var(--white);
  background-color: var(--lightgreen);
}
nav ul li.active {
  font-size: large;
  color: var(--white);
  background: var(--lightgreen);
  border-bottom: 2px solid var(--green);
}

li::after {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  position: absolute;
  transition: all 0.5s ease;
  border-top: 2px solid var(--green);
}

li:hover::after {
  top: 100%;
}
@media (max-width: 768px) {
  nav {
    max-width: 100%;
    /* height: 100%; */
  }
  nav div {
    width: 25%;
  }
  img {
    width: 75%;
  }
  nav ul li {
    margin: 0.51em;
    padding: 0.3em;
  }
  li,
  .active {
    font-size: 0.8em;
    padding: 0.2rem;
  }
  li::after {
    content: "";
    top: -0.2em;
  }
}
</style>
