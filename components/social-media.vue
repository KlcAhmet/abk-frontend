<script setup lang='ts'>
const socialMedia = [
  {
    name: 'Github',
    link: 'https://github.com/KlcAhmet',
    icon: '/_nuxt/assets/img/github.svg',
    alt: 'github logo',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ahmet-batuhan-kılıç-b88975129/',
    icon: '/_nuxt/assets/img/linkedin.svg',
    alt: 'linkedin logo',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ab01001011/',
    icon: '/_nuxt/assets/img/instagram.svg',
    alt: 'instagram logo',
  },
  {
    name: 'Google',
    link: 'https://g.page/AhmetBatuhanKilic?share',
    icon: '/_nuxt/assets/img/google.png',
    alt: 'google logo',
  },
  {
    name: 'ahmetbatukilic@gmail.com',
    link: 'mailto:ahmetbatukilic@gmail.com',
    icon: '/_nuxt/assets/img/mail.png',
    alt: 'mail logo',
  },
];
</script>

<template>
  <ul class='flex flex-col space-y-3'>
    <li class='bg-base-black-500 pl-5 py-2 sm:rounded-lg' v-for='(item, index) in socialMedia' :key='index'>
      <a class='flex flex-nowrap items-center'
         :href='item.link'
         target='_blank' rel='noopener noreferrer nofollow'>
        <img class='h-7 mr-1' :src='item.icon' :alt='item.alt' />
        <span class='text-white text-lg'>{{ item.name }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>