<template>
  <!-- <div class="glass"> -->
    <div class="container">
      <section class="intro"></section>

      <div class="meta">
        <div class="meta__inner">
          <h3>Some Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat ad quae
            amet dignissimos laborum, repellat maxime ipsa ipsam nisi
          </p>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup></script>

<style scoped>
/* .glass {
  border-radius: 16px;
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(96, 229, 91, 0.56);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(96, 229, 91, 0.28);
} */

.container {
  width: 75%;
  margin: auto;
  max-width: 400px;
  position: relative;
  padding-bottom: 70px;
}

.intro {
  position: relative;
  min-height: 300px;
  height: 100%;
  width: 100%;
  background: transparent
    url(https://images.unsplash.com/photo-1467733444521-ab3e6983f8b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=69aaefe565d19beb876979d89510601b)
    top center no-repeat;
  background-size: 100%;
  overflow: hidden;
  transition: all 0.72s ease-in-out;
}

.intro:after {
  content: "";
  display: block;
  position: absolute;
  /* width: 100%; */
  height: 500px;
  right: -100%;
  left: 0;
  transform: skew(100deg);
  background: #fff;
  bottom: -70%;
  box-shadow: inset 1px 0px 5px 0px rgba(204, 204, 204, 0.72);
}

.container:after {
  content: "";
  max-width: 300px;
  width: 100%;
  margin: 0% auto 0;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  box-shadow: 0px 5px 5px 0px rgba(204, 204, 204, 0.72);
  z-index: -1;
  transition: all 0.52s ease-in-out;
}

.meta {
  max-width: 300px;
  width: 100%;
  margin: 0% auto 0;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding-top: 110px;
  overflow: hidden;

  transition: all 0.52s ease-in-out;
}

.meta__inner {
  padding: 0.25rem 1rem;
  line-height: 1.5rem;
  position: relative;
  background: #fff;
  z-index: 15;
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
}

.meta:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  max-width: 300px;
  height: 300px;
  background: #fff;
  border: 1px solid #ccc;
  transform: rotate(90deg) skew(10deg);
  z-index: 4;
}

h3 {
  position: relative;
  font-family: sans-serif;
  font-weight: 300;
  border-left: 4px solid #e91e63;
  padding-left: 0.72rem;
}

p {
  font-family: serif;
  font-size: 0.85rem;
  font-weight: inherit;
  color: #555;
  text-align: justify;
}

.container:hover .meta {
  transform: translateY(5px);
}

.container:hover .intro {
  transform: translateY(-5px);
}

.container:hover:after {
  transform: translateY(5px);
}
</style>
