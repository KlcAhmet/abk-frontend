<script setup lang='ts'>
const route = useRoute();
const routeName = computed(() => 'homeLayout-' + (route.name as string));
</script>

<template>
  <div class='homeLayout h-screen bg-no-repeat bg-cover' :class='routeName'>
    <div class='max-w-[1800px] mx-auto'>
      <Header />
      <main class='h-screen'>
        <slot />
      </main>
      <!--    <Footer />-->
    </div>
  </div>
</template>

<style lang='sass'>
html, body
  margin: 0 !important
  padding: 0 !important
  overflow: hidden !important
  height: 100%

body
  background-color: #000000
</style>