// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/style/style.css"],
  head: {
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "@/assets/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "@/assets/img/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "@/assets/img/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
    ],
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Improve your health and wellness with personalized natural healthcare from Doctor Daniel Richmond, a trusted naturopathic doctor.",
      },
    ],
  },
});
