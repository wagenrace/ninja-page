<script setup>
import NavElements from "./NavElements.json";

</script>

<template>
  <nav class="bg-company-color-500 sticky top-0 z-50">
    <div class="mx-auto px-8">
      <div class="relative flex items-center justify-between h-20">
        <div class="flex space-x-4 h-full w-full absolute top-0">
          <div class="
                                              flex-1 flex
                                              overflow-visible
                                              h-full
                                              items-stretch
                                              justify-between
                                            ">
            <logointernlinks class="flex flex-shrink">
              <internlinks class="
                                                  flex-col flex flex-shrink
                                                  h-full
                                                  overflow-visible
                                                  items-center
                                                  justify-center
                                                  ml-6
                                                ">
                <div class="flex space-x-4">
                  <router-link class="router-link-default" v-for="NavElement in NavElements" :key="NavElement.navName"
                    :to="{ name: NavElement.routerName }">
                    {{ NavElement.navName }}
                  </router-link>
                </div>
              </internlinks>
            </logointernlinks>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
