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
.homeLayout
  background-repeat: no-repeat
  background-position: center
  background-size: 100% 100%

  &-index
    background-image: url('@/assets/img/ast1.jpeg')

  &-about
    background-image: url('@/assets/img/ast2.jpeg')

  &-career
    background-image: url('@/assets/img/ast3.jpeg')

  &-contributions
    background-image: url('@/assets/img/ast4.jpeg')
</style>