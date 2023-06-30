<template>
  <main id="home">
    <div class="image-container">
      <img src="~/assets/img/benefits-ayurvedic-healing-herbs.jpg" alt="" srcset="" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,224L21.8,229.3C43.6,235,87,245,131,229.3C174.5,213,218,171,262,138.7C305.5,107,349,85,393,112C436.4,139,480,213,524,245.3C567.3,277,611,267,655,250.7C698.2,235,742,213,785,176C829.1,139,873,85,916,80C960,75,1004,117,1047,128C1090.9,139,1135,117,1178,90.7C1221.8,64,1265,32,1309,16C1352.7,0,1396,0,1418,0L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <div class="landing-content">
        <div class="content">
          <div class="text-slider">
            <div class="slide">
              <h3>
                Health is not everything, but without health, everything is nothing.
              </h3>
            </div>
            <div class="slide">
              <h3>The right herb at the right time can do wonders.</h3>
            </div>
            <div class="slide">
              <h3>The body is a temple, and we should treat it as such.</h3>
            </div>
          </div>
        </div>
        <button type="button" @click="scrollToSection('contacts')">Contects Us</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const activeSection = ref("contacts");

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
</script>

<style scoped>
svg {
  left: 0;
  top: 67%;
  position: absolute;
}
svg path {
  fill: var(--lightgreen);
}
.text-slider:after {
  content: "";
  width: 100%;
  height: 100%;
  padding: 106rem;
  background: rgba(0, 0, 0, 0.5);
}
.text-slider {
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 5%;
  position: relative;
  /* background: rgba(0, 0, 0, 0.5); */
}

.text-slider .slide {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  position: absolute;
  text-align: center;
  animation: slide 9s linear infinite;
}
.text-slider .slide:nth-child(1) {
  animation-delay: 0s;
}
.text-slider .slide:nth-child(2) {
  animation-delay: 3s;
}

.text-slider .slide:nth-child(3) {
  animation-delay: 6s;
}

@keyframes slide {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  38.33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

main {
  width: 100%;
  height: auto;
  /* background: url() 90% 26%; */
}
main .image-container img {
  width: 100%;
  height: 75%;
}
.image-container {
  width: 100%;
  height: 100%;
  position: relative !important;
}
main .image-container::after {
  content: "Let food be thy medicine and medicine be thy food.";
  z-index: 5;
  right: 0;
  bottom: 10em;
  width: 10rem;
  padding: 1rem;
  position: absolute;
  transition: all 5s;
  color: var(--white);
  border-radius: 10rem;
  background: rgba(0, 0, 0, 0.5);
  /* This will make the text change every 3 minutes */
  -webkit-animation: text-change 180s linear infinite;
  -moz-animation: text-change 180s linear infinite;
  -o-animation: text-change 180s linear infinite;
  animation: text-change 60s linear infinite;
}
div.landing-content {
  top: 1rem;
  width: 65%;
  padding: 1rem;
  font-size: xx-large;
  position: absolute;
  color: var(--white);
}

.landing-content button {
  top: -5rem;
  cursor: pointer;
  position: relative;
  transition: all 1s;
  color: var(--white);
  border-radius: 2rem;
  padding: 0.61rem 1rem;
  background: transparent;
  border: 1px solid var(--lightgreen);
}
.landing-content button:hover {
  background: var(--lightgreen);
  /* This will make the background color move from left to right once when hovered */
  -webkit-animation: background-move 1s linear infinite;
  -moz-animation: background-move 1s linear infinite;
  -o-animation: background-move 1s linear infinite;
  animation: background-move 1s linear infinite;
}

@keyframes background-move {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}

@keyframes text-change {
  0% {
    content: "Let food be thy medicine and medicine be thy food.";
  }
  25% {
    content: "The body has a wisdom of its own.";
  }
  50% {
    content: "The best medicine is prevention.";
  }
  75% {
    color: "The right herb at the right time can do wonders.";
  }
  100% {
    content: "The body is a temple, and we should treat it as such.";
  }
}

@media (max-width: 768px) {
  main {
    height: 55vh;
  }
  main,
  img {
    width: 100%;
  }
  main .image-container img {
    width: 100vw;
    height: 100%;
  }
  main .image-container::after {
    width: 50%;
    bottom: 1em;
  }
  div.landing-content {
    top: 1rem;
    width: 86%;
    height: 100%;
    padding: 1rem;
    font-size: x-large;
  }
  .content h3 {
    font-size: 1.35em;
  }
  svg {
    left: 0;
    top: 82%;
  }
  .landing-content button {
    top: -3rem;
    margin: auto 10%;
  }
}
</style>
