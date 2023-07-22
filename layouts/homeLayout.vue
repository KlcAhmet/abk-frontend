<script setup lang='ts'></script>

<template>
  <div class='homeLayout h-screen bg-no-repeat bg-cover'>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang='sass'>
.homeLayout
  background-image: url('@/assets/img/ast1.jpeg')
</style>