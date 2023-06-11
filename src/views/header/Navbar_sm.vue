<template>
  <div class="sticky top-0 z-50">
    <nav class="w-full">
      <div class="
                    bg-company-color-500
                    relative
                    flex
                    items-center
                    justify-between
                    h-20
                  ">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button type="button" @click="toggleMenu" class="
                        inline-flex
                        items-center
                        justify-center
                        p-4
                        rounded-md
                        text-gray-400
                        hover:text-white hover:bg-gray-700
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                      " aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true" :class="isMenuOpen ? 'hidden' : 'block'">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true" :class="isMenuOpen ? 'block' : 'hidden'">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="
                      flex-1 flex
                      h-full
                      overflow-visible
                      items-center
                      justify-center
                    ">
          <div class="
                        flex-col flex
                        h-full
                        overflow-visible
                        items-center
                        justify-center
                      ">
            <router-link class="bg-transparent" to="/">
              <h1 class="text-gray-200">Oma Ninja Service</h1>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="transform ease-in-out duration-500 h-0" :class="
      isMenuOpen
        ? 'translate-y-0 scale-y-full'
        : '-translate-y-full scale-y-0'
    " @click="turnOffMenu">
      <div class="w-full bg-company-color-100 flex flex-col align-middle">
        <router-link class="router-link-default ml-3" v-for="NavElement in NavElements" :key="NavElement.navName"
          :to="{ name: NavElement.routerName }">
          {{ NavElement.navName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavElements from "./NavElements.json";
export default {
  data() {
    return {
      isMenuOpen: false,
      NavElements,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    turnOffMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>