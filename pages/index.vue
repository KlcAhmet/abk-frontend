<script setup lang='ts'>
definePageMeta({
  layout: 'home-layout',
});
const { t } = useI18n();
const animateClass = ref('');

onMounted(() => {
  /*setInterval(() => {
    animateClass.value = 'animate-fade-in';
    console.log(animateClass.value);
  }, 10000);*/
});
</script>

<template>
  <main>
    <div class='text-base-white text-center animate__fadeInUp animate__animated animate__slow mt-60'>
      <h1 class='text-2xl sm:text-[55px] font-extrabold mb-8'>Ahmet Batuhan<span class='text-base-pink'> Kılıç</span>
      </h1>
      <h2
        class='text-xl sm:text-2xl font-medium animate__animated animate__headShake animate__slow animate__infinite animate__delay-2s'>
        {{ t('job') }}
      </h2>
    </div>


    <!--    <div>
          <h2 class='text-base-white text-xl font-medium'>Bulunduğum Projeler</h2>
          <div class='flex flex-col space-y-4 justify-center lg:items-start ml-10 lg:ml-20'>
            <a class='w-40 lg:w-80 bg-base-teal p-4 columns-2'
               href='https://kondukto.io/'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img src='@/assets/img/link.svg' class='bg-base-blue-dark h-7 lg:h-' alt='link-image' />
              <img src='@/assets/img/kondukto.webp' class='m-auto' alt='kondukto' />
            </a>
            <a class='w-40 lg:w-80 bg-base-teal rounded-md p-4' href='https://onedio.com/'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img src='@/assets/img/onedio.svg' class='h-4 lg:h-7 m-auto' alt='onedio.com' />
            </a>
            <a class='w-40 lg:w-80 bg-base-teal rounded-md p-4' href='https://getmagnus.com/'
               target='_blank' rel='noopener noreferrer nofollow'>
              <img src='@/assets/img/magnus.svg' class='h-4 lg:h-7 m-auto' alt='magnus' />
            </a>
          </div>
        </div>-->
  </main>
</template>

<i18n lang='yaml'>
tr:
  job: "Bilgisayar Mühendisi"
en:
  job: "Computer Engineer"
</i18n>