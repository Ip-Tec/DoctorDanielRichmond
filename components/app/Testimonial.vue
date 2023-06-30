<template>
  <div class="container">
    <div class="header">
      <h2>Testimonial</h2>
      <h1>Honest Review of Our Clients</h1>
    </div>
    <div class="icon">
      <i class="arrow arrow-left" @click="left">
        <IconLeftarrow width="3rem" height="3rem" />
      </i>
      <i class="arrow arrow-right" @click="right">
        <IconRightarrow width="3rem" height="3rem" />
      </i>
    </div>
    <div class="slider">
      <div class="slider__inner" ref="sliderInner">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="contents"
          :class="{ visible: currentIndex === index }"
        >
          <i class="image">
            <img :src="testimonial.imageUrl" :alt="testimonial.name" width="30rem" />
          </i>
          <h2 class="name">{{ testimonial.name }}</h2>
          <p class="text">{{ testimonial.review }}</p>
        </div>
      </div>
    </div>

    <NuxtLink to="/Testimonial" class="link">See More</NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import imge from "@/assets/img/Testimonial/face-5084530_1280.jpg";
import imge1 from "@/assets/img/Testimonial/eyewear-4071870_640.jpg";
import imge2 from "@/assets/img/Testimonial/guy-3237859_640.png";
import imge3 from "@/assets/img/Testimonial/model-2333408_640.jpg";
import imge4 from "@/assets/img/Testimonial/boy-2119178_640.jpg";

const sliderInnerRef = ref(0);
const currentIndex = ref(0);
currentIndex.value = 0;
const arrowHovered = ref(false);
const translateValue = ref(0);

const left = () => {
  if (currentIndex.value > 0 && !arrowHovered.value) {
    currentIndex.value--;
    translateValue.value = -(currentIndex.value * 20);
  }
};

const right = () => {
  if (currentIndex.value < testimonials.length - 1 && !arrowHovered.value) {
    currentIndex.value++;
    translateValue.value = -(currentIndex.value * 20);
  }
};

const testimonials = [
  {
    name: "Sarah M",
    review:
      "I have been using herbal remedies from your website for a few months now, and I must say the results are amazing. My overall health has improved, and I feel more energized.",
    imageUrl: imge,
  },
  {
    name: "Michael W",
    review:
      "I was skeptical at first, but after trying the herbal products recommended by your team, my chronic pain has reduced significantly. Thank you for providing natural alternatives that actually work!",
    imageUrl: imge1,
  },
  {
    name: "Alex B",
    review:
      "I've tried various treatments for my chronic migraines, but your herbal remedies have provided me with the most relief. I'm grateful for the holistic approach and the positive impact it has had on my life.",
    imageUrl: imge2,
  },

  {
    name: "Emma T",
    review:
      "The herbal treatments I received from your website have helped me manage my stress levels and improve my sleep quality. I feel more balanced and calm now.",
    imageUrl: imge3,
  },
  {
    name: "Mark D",
    review:
      "I've struggled with digestive issues for years, and your herbal remedies have provided me with relief like no other. My digestion has improved, and I no longer experience frequent discomfort.",
    imageUrl: imge4,
  },
];
</script>

<style scoped>
.container {
  height: auto;
  display: flex;
  color: var(--white);
  flex-direction: column;
}
.container .header {
  padding: 1em;
  font-size: 10px;
}
.container .header h1 {
  font-size: 20px;
}
.slider {
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow-x: hidden; */
}
.slider__inner {
  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: center;
}
.icon {
  top: 5rem;
  display: flex;
  position: relative;
  transition: transform 0.5s;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.icon .arrow {
  top: 25%;
  z-index: 1;
  height: 90%;
  width: 1rem;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s;
}
.icon .arrow-left {
  left: 0%;
}
.icon .arrow-right {
  right: 6%;
}
.contents {
  padding: 0;
  left: -10rem;
  width: 20rem;
  height: 25rem;
  margin: 1rem;
  display: flex;
  padding: 0.5rem;
  position: absolute;
  border-radius: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(37, 45, 37, 0.56);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(96, 229, 91, 0.28);
  transition: opacity 0.5s;
  opacity: 0;
}
.contents.visible {
  opacity: 1;
}
i.image {
  width: 8rem;
  height: 6rem;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: rebeccapurple;
}
i.image img {
  width: 100%;
  height: 110%;
  border-radius: 100%;
}
.text {
  padding: 1.2rem;
  text-align: center;
}
.link {
  left: 45%;
  bottom: 1em;
  width: 6rem;
  margin: auto;
  margin-top: 1rem;
  position: absolute;
  text-align: center;
  transition: all 3s;
  color: var(--white);
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-radius: 2.5rem 0.1rem;
  backdrop-filter: blur(4.2px);
  border: 1px solid var(--white);
  -webkit-backdrop-filter: blur(4.2px);
}
.link:hover {
  border-radius: 0.1rem 2.2rem;
  background: var(--lightgreen);
  border: 1px solid var(--lightgreen);
}

@media screen and (max-width: 767px) {
  .contents {
    padding: 0;
    left: -11rem;
  }
  .link {
    left: 35%;
    width: 6rem;
    bottom: 2.2em;
  }
}
</style>
