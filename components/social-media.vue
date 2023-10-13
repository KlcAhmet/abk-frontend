<script setup lang='ts'>
import githubIcon from '@/assets/img/github.svg';
import linkedinIcon from '@/assets/img/linkedin.svg';
import mailIcon from '@/assets/img/mail.png';
import googleIcon from '@/assets/img/google.png';
import instagramIcon from '@/assets/img/instagram.svg';

const socialMedia = [
  {
    name: 'Github',
    link: 'https://github.com/KlcAhmet',
    icon: githubIcon,
    alt: 'github logo',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ahmet-batuhan-kılıç-b88975129/',
    icon: linkedinIcon,
    alt: 'linkedin logo',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ab01001011/',
    icon: instagramIcon,
    alt: 'instagram logo',
  },
  {
    name: 'Google',
    link: 'https://g.page/AhmetBatuhanKilic?share',
    icon: googleIcon,
    alt: 'google logo',
  },
  {
    name: 'ahmetbatukilic@gmail.com',
    link: 'mailto:ahmetbatukilic@gmail.com',
    icon: mailIcon,
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