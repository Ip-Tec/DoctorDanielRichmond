<template>
  <div>
    <div class="text">
      <h1>payment</h1>
      <p>This Are Our Payment Platforms</p>
    </div>
    <div class="icon">
      <li>
        <LazyIconVenmo width="50px" height="50px" />
      </li>
      <li>
        <LazyIconZelle width="50px" height="50px" />
      </li>
      <li>
        <LazyIconPaypal width="50px" height="50px" />
      </li>
      <li>
        <LazyIconSquarecash width="50px" height="50px" />
      </li>
    </div>
  </div>
</template>

<script></script>

<style scoped>
div {
  width: 100%;
  margin: auto;
  padding: 1rem;
  color: var(--white);
  background: var(--lightgreen);
}
div.text h1{
  text-transform: capitalize;
}
div.text {
  display: flex;
  align-items: center;
  flex-direction: column;
}
div.icon {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  width: auto;
  height: 3rem;
  margin: 0.3rem;
  cursor: pointer;
  padding: 0.6rem;
  list-style: none;
  transition: all 3s;
  border-radius: 100%;
  backdrop-filter: blur(6.2px);
  -webkit-backdrop-filter: blur(6.2px);
  background: rgba(255, 255, 255, 0.39);
}
li:hover {
  transform: scale(1.2);
}
</style>
