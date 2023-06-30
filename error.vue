<template>
  <main>
  <Navigation />
    <div class="info">
      <Icon404 width="10rem" height="10rem" />
      <div class="cont">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </main>
</template>

<script setup>
defineProps(["error"]);
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
div.info {
  height: 100%;
  display: flex;
  margin: auto 2rem;
  align-items: center;
  margin-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
}
div.footer {
  height: 40%;
  width: 100%;
  position: relative;
}
</style>
