<script setup lang='ts'>
</script>

<template>
  <div class='homeLayout max-w-[1026px] mx-auto flex flex-col'>
    <Header class='w-full' />
    <slot />
    <!--    <Footer class='mt-auto' />-->
  </div>
</template>

<style lang='sass'>
html, body
  margin: 0 !important
  padding: 0 !important

body
  background-color: #faa307
</style>