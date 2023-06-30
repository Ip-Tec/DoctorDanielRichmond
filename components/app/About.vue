<template>
  <main id="about">
    <div class="about">
      <h3>About Us</h3>
      <p class="glass">
        Welcome to Herbal Doctor, where natural healing meets modern medicine. Our mission
        is to provide holistic and personalized healthcare solutions using the power of
        herbal remedies and traditional medicine.
      </p>
      <p class="glass">
        With years of experience and a deep understanding of the healing properties of
        herbs, our team of dedicated herbal doctors strives to promote optimal health and
        well-being for our patients. We believe in the body's innate ability to heal
        itself and aim to support and enhance this natural healing process.
      </p>
      <p class="glass">
        At Herbal Doctor, we take a comprehensive and personalized approach to healthcare.
        Our herbal treatments are tailored to each individual's unique needs, addressing
        the underlying causes of health issues rather than just the symptoms.
      </p>
      <p class="glass">
        Our commitment to quality and efficacy drives us to source the finest organic
        herbs and botanicals from trusted suppliers. We follow strict quality control
        measures to ensure the purity and potency of our herbal formulations.
      </p>
      <p class="glass">
        Whether you are seeking relief from a specific health condition or striving to
        maintain optimal wellness, our herbal doctors are here to guide you on your
        healing journey. We combine traditional wisdom with scientific knowledge to
        provide safe, effective, and sustainable solutions for your health concerns.
      </p>
      <p class="glass">
        Experience the power of nature and embark on a path of holistic healing with
        Herbal Doctor. We are dedicated to helping you achieve vibrant health and a
        balanced lifestyle.
      </p>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  padding: 1rem;
  background: var(--lightgreen);
}

.about {
  width: 80%;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}

.about h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1rem;
  line-height: 1.5;
}
.about p::after {
  content: "";
  top: -4rem;
  padding: 3rem;
  position: relative;
  border-radius: 51% 49% 42% 58% / 37% 67% 33% 63%;
}
p.glass::after {
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.36);

  animation: glass-move 2s linear infinite;
}
@keyframes glass-move {
  0% {
    top: -1rem;
    border-radius: 37% 67% 33% 63% / 51% 49% 42% 58%;
  }
  50% {
    top: 1rem;
    border-radius: 70% 30% 42% 58% / 37% 39% 61% 63%;
  }
  100% {
    top: -1rem;
    border-radius: 37% 67% 33% 63% / 51% 49% 42% 58%;
  }
}
</style>
