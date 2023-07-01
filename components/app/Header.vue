<template>
  <nav class="fixed-header">
    <div>
      <img src="~/assets/img/logo.jpg" alt="" />
    </div>
    <ul>
      <li :class="{ active: activeSection === 'home' }">
        <p @click="scrollToSection('home')">Home</p>
      </li>
      <li :class="{ active: activeSection === 'about' }">
        <p @click="scrollToSection('about')">About</p>
      </li>
      <li :class="{ active: activeSection === 'contacts' }">
        <p @click="scrollToSection('contacts')">Contacts</p>
      </li>
      <li :class="{ active: activeSection === 'testimony' }">
        <p @click="scrollToSection('testimony')">Testimony</p>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeSection = ref('home');

const scrollToSection = (section) => {
  activeSection.value = section;
  
  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

onMounted(() => {
  const testimonyElement = document.getElementById('testimony');
  if (testimonyElement) {
    testimonyElement.classList.add('visible');
  }
});
</script>

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
  width: inherit;
  align-items: center;
  justify-content: space-between;
}
nav ul li {
  margin: 1em;
  padding: 0.5em;
  cursor: pointer;
  list-style: none;
  position: relative;
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
    width: 100%;
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
