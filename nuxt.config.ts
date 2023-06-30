// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/style/style.css"],
  
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
    ],
  },
});
