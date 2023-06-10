<script setup>
import Header from "./views/header/Header.vue"
import Footer from "./views/Footer.vue"

</script>

<template>
  <Header />
  <main class="min-h-screen">
    <router-view />
  </main>
  <Footer />
</template>
