<script setup lang='ts'>
const { t } = useI18n();

definePageMeta({
  layout: 'home-layout',
});
</script>

<template>
  <div class='h-full flex items-center'>
    <div class='w-80 bg-sky-900/[0.73] rounded-md text-white mx-auto lg:ml-20 p-5'>
      {{ t('description') }}
    </div>
  </div>
</template>

<style scoped lang='sass'>

</style>

<i18n lang='yaml'>
tr:
  description: "Şu anda, Frontend Geliştirme alanında öncelikli olarak React, Vue ve Node.js teknolojileri üzerinde çalışıyorum. Kendimi, web programlama konusunda yüksek bilgiye sahip ve güçlü sosyal becerilere sahip biri olarak tanımlıyorum. Ayrıca, hayatımın tüm alanlarında yüksek hedefler belirliyorum, hedeflerime ulaşmak için çalışkan ve kararlı biriyim."
en:
  description: "At present, I'm working on primarily in React, Vue and Node.js technologies in the Frontend Development. I describe myself as a person who has high knowledge about web programming and strong social skills. Besides, I set high goals in all fields of my life, i am a hardworker and persistent person on reaching my goals."
</i18n>