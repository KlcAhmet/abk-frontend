<script setup lang='ts'>
</script>

<template>
  <header class='relative h-24 flex items-center px-5'>
    <div class='absolute inset-x-1/2 transform -translate-x-1/2 w-16 h-16 -ml-5'>
      <figure>
        <img src='@/assets/img/astronaut-icon.svg' alt='logo' />
      </figure>
    </div>
    <nav class='flex-none ml-auto'>
      <ul class='flex flex-row flex-nowrap items-center'>
        <li>
          <NuxtLink to='/about'>About</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/posts/1'>Post 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/posts/2'>Post 2</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang='sass'>
</style>