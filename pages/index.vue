<script setup lang='ts'>
definePageMeta({
  layout: 'home-layout',
});
const { t } = useI18n();

const body = {
  name: 'Ahmet',
  mail: 'ah@gmail.com',
  message: 'test message',
};

const client = process.server || await $fetch('/api/ping', {
  method: 'GET',
  /*body: data,*/
}).catch((error) => {
  console.log('error >>>', error);
});

console.log('client >>>', client);


</script>

<template>
  <div class='h-full flex items-center'>
    <div class='w-80 bg-sky-900/[0.73] rounded-md text-white mx-auto lg:ml-20 p-5 text-center'>
      <h1 class='text-2xl font-extrabold'>{{ t('name') }}</h1>
      <h2 class='text-xl font-medium'>{{ t('job') }}</h2>
      <div class='mt-5'>
        <ul class='flex justify-center items-center space-x-2'>
          <li>
            <a class='flex items-center hover:scale-150 transition duration-200' href='https://github.com/KlcAhmet'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img class='h-9 w-8' src='@/assets/img/github.svg' alt='github logo' />
            </a>
          </li>
          <li>
            <a class='flex items-center hover:scale-150 transition duration-200'
               href='https://www.linkedin.com/in/ahmet-batuhan-kılıç-b88975129/'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img class='h-7 w-10' src='@/assets/img/linkedin.svg' alt='linkedin logo' />
            </a>
          </li>
          <li>
            <a class='flex items-center hover:scale-150 transition duration-200'
               href='https://www.instagram.com/ab01001011/'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img class='h-7 w-7' src='@/assets/img/instagram.svg' alt='instagram logo' />
            </a>
          </li>
          <li>
            <a class='flex items-center hover:scale-150 transition duration-200'
               href='https://g.page/AhmetBatuhanKilic?share'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img class='h-9 w-9' src='@/assets/img/google.svg' alt='google logo' />
            </a>
          </li>
          <li>
            <a class='flex items-center hover:scale-150 transition duration-200' href='mailto:ahmetbatukilic@gmail.com'
               target='_blank'
               rel='noopener noreferrer nofollow'>
              <img class='h-9 w-9' src='@/assets/img/mail.svg' alt='mail logo' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<i18n lang='yaml'>
tr:
  name: "Ahmet Batuhan Kılıç"
  job: "Bilgisayar Mühendisi"
en:
  name: "Ahmet Batuhan Kılıç"
  job: "Computer Engineer"
</i18n>