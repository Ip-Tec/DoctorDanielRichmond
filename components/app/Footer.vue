<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill-opacity="1"
        d="M0,224L18.5,186.7C36.9,149,74,75,111,58.7C147.7,43,185,85,222,106.7C258.5,128,295,128,332,154.7C369.2,181,406,235,443,229.3C480,224,517,160,554,160C590.8,160,628,224,665,213.3C701.5,203,738,117,775,112C812.3,107,849,181,886,218.7C923.1,256,960,256,997,229.3C1033.8,203,1071,149,1108,133.3C1144.6,117,1182,139,1218,160C1255.4,181,1292,203,1329,197.3C1366.2,192,1403,160,1422,144L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
      ></path>
    </svg>
    <div class="footlist">
      <div class="info">
        <div class="info-logo">
          <img class="logo" src="~/assets/img/logo.jpg" />
          <p>Doctor Daniel Richmond</p>
        </div>
        <p>
          Experience the power of nature and embark on a path of holistic healing with us.
        </p>
        <p>
          We are dedicated to helping you achieve vibrant health and a balanced lifestyle.
        </p>
      </div>
      <div class="quick-link">
        <h2>Quick Links</h2>
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
        </ul>
      </div>
      <div class="other-pages">
        <h2>Other Pages</h2>
        <ul>
          <li>
            <p><NuxtLink to="/Testimonial">Testimonial</NuxtLink></p>
          </li>
          <li>
            <!-- <p> -->
              <!-- <NuxtLink to="/Store">Store</NuxtLink> -->
            <!-- </p> -->
          </li>
          <!-- <li> -->
            <br />
            <br />
          <!-- </li> -->
          <!-- <li> -->
            <br />
            <br />
          <!-- </li> -->
        </ul>
      </div>
    </div>
    <div class="right">
      <p>Doctor Daniel Richmond</p>
      <p>Copyright © 2020. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeSection = ref();

const scrollToSection = (section) => {
  activeSection.value = section;

  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  const testimonyElement = document.getElementById("testimony");
  if (testimonyElement) {
    testimonyElement.classList.add("visible");
  }
});
</script>

<style scoped>
div {
  width: 100%;
  /* height: 400px; */
  position: relative;
  color: var(--white);
  background: var(--lightgreen);
}
svg {
  left: 0;
  top: -14rem;
  width: 100%;
  position: absolute;
}
svg path {
  fill: var(--lightgreen);
}

div.footlist {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
div.footlist div.info {
  padding: 1em;
  text-align: justify;
}
div.footlist div.quick-link,
div.other-pages {
  padding: 1em;
  text-align: justify;
}
div.quick-link ul,
div.other-pages ul {
  list-style: none;
  text-align: justify;
  color: var(--white);
}
ul li,
li p a {
  cursor: pointer;
  transition: all 2s;
  color: var(--white);
  text-decoration: none;
}

ul li:hover,
li:hover,
li p a:hover,
.active {
  background: var(--white) !important;
  padding: 1px 12px !important;
  color: var(--lightgreen) !important;
}
li p a:hover {
  padding: 0 !important;
}

div.right {
  width: auto;
  display: flex;
  padding: 0.4em;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid var(--white);
}
.info-logo {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
}
.logo {
  width: 3rem;
  border-radius: 100%;
}
.info-logo p {
  font-weight: bolder;
}
@media screen and (max-width: 959px) {
  svg {
    top: -10rem;
  }
}
@media screen and (max-width: 767px) {
  svg {
    top: -3.2rem;
  }

  div.footlist {
    flex-wrap: wrap;
    justify-content: center;
  }
  div.quick-link ul,
  div.other-pages ul {
    list-style: none;
    padding: 0;
  }
  div.right {
    width: auto;
    display: block;
  }
}
</style>
