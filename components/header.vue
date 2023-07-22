<script setup lang='ts'></script>

<template>
  <header class='relative h-24 flex items-center px-5'>
    <div class='absolute inset-x-1/2 transform -translate-x-1/2 w-16 h-16 -ml-5'>
      <figure>
        <img src='@/assets/img/astronaut-icon.svg' alt='logo' />
      </figure>
    </div>
    <nav class='flex-none ml-auto'>
      <ul class='flex flex-row flex-nowrap items-center space-x-4 text-white text-xl font-bold'>
        <li>
          <NuxtLink to='/about'>Aboutt</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/career'>Career</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/contributions'>Contributions</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang='sass'>
</style>