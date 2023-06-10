<template>
  <div class="flex justify-center w-full bg-gray-300">
    <div
      class="
        flex
        justify-center
        bg-gray-100
        md:w-3/4 md:max-w-5xl
        w-full
        px-3
        md:px-6
        xl:px-36

        py-1
        md:py-6

        min-h-64
        shadow-xl
        md:rounded-t-xl

        min-h-screen
      "
    >
      <div>
        <slot class=""></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>