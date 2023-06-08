<script setup>
import { path_home, path_about, path_contact } from "./router.js"

</script>

<template>
  <nav>
    <router-link :to="path_home">Home</router-link> |
    <router-link :to="path_about">About</router-link> |
    <router-link :to="path_contact">Contact</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>
