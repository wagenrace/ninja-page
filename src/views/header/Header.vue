<script setup>
import Banner from "./Banner.vue";
import NavbarMd from "./Navbar_md.vue";
import NavbarSm from "./Navbar_sm.vue";
</script>

<template>
  <NavbarMd class="hidden md:block" />
  <NavbarSm class="block md:hidden" />

  <Banner />
</template>
