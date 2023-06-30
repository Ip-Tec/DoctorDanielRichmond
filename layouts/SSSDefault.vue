<template>
  <div>
    <AppHeader />
    <slot />
    <AppAbout />

    <AppSpecialization />
    <span></span>
    <ContactUs />
    
    <AppFooter />
  </div>
</template>

<script setup></script>

<style scoped>
span{
  display: block;
  width: 100vw;
  margin: 1rem 0;
  padding: 2rem;
  background-color: var(--white);
}</style>
