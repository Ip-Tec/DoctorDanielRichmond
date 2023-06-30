<template>
  <div>
    <div class="parallax-container">
      <div class="parallax-content">
        <h2>Specialization</h2>
        <!-- Content within the parallax div -->
        <div class="content">
        <div class="text-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga error repellendus quo deserunt at.</p>
        </div>
        <div class="img-card">
        <!-- <img src="~/img/" /> -->
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.parallax-container {
  height: 500px;
  overflow: hidden;
  position: relative;
}

.parallax-content {
  top: 0;
  left: 0;
  z-index: -1;
  width: 10%;
  height: 100%;
  position: fixed;
  color: var(--white);
  background-size: cover;
  background-position: center;
  background-image: url("~/assets/img/organic-herbs-spices-wooden-bowl-generated-by-ai.jpg");
  /* Add other styles as needed */
}

.parallax-content::before {
  content: "";
  top: 0;
  left: 0;
  opacity: 0;
  width: 98%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.3); /* Adjust the overlay color and opacity */
  transform: translateZ(-1px) scale(2);
  transition: opacity 0.3s ease-in-out;
}

.parallax-container:hover .parallax-content::before {
  opacity: 1;
}

.parallax-content h2 {
  text-align: center;
}
</style>
