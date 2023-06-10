<script setup>
import Header from "./views/header/Header.vue"
import { path_home, path_about, path_contact } from "./router.js"

</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>
