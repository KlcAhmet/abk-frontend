<script setup lang='ts'>
const { t } = useI18n();
const companies = [
  'kondukto',
  'onedio',
  'cool',
  'fintech',
  'buddies',
  'sayistay',
];

definePageMeta({
  layout: 'home-layout',
});
</script>
<template>
  <div class='h-full flex items-center'>
    <div
      class='max-w-lg max-h-80 overflow-y-scroll bg-sky-900/[0.73] rounded-md text-white mx-auto lg:ml-20 p-5 space-y-3'>
      <div v-for='item in companies' :key='item'>
        <h2 class='text-2xl font-bold text-[#ff5400]'>{{ t(`${item}.title`) }}</h2>
        <p class='text-xl font-semibold text-[#ff8500]'>{{ t(`${item}.subtitle`) }}</p>
        <p class='text-sm lg:text-base'>{{ t(`${item}.desc`) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang='sass'>

</style>

<i18n lang='yaml'>
tr:
  kondukto.title: "Kondukto"
  kondukto.subtitle: "Frontend Developer"
  kondukto.desc: "AppSec Orchestration From Code to Production. Computer and Network Security(Vue)"
  onedio.title: "Onedio.com"
  onedio.subtitle: "Frontend Developer"
  onedio.desc: "Onenio.com ve diğer projelerinde görev aldım. Nuxt, Vue, Composition api, Tailwind teknolojileri ile' çalıştım."
  cool.title: "Cool Digital Solutions"
  cool.subtitle: "Fullstack Developer"
  cool.desc: "Akıllıfon Rodo Danışmanı, yeni ismi Magnus olan projede remote olarak çalıştım."
  fintech.title: "Fintech"
  fintech.subtitle: "Fullstack Developer"
  fintech.desc: "Bu firmadaki görevimde, Deniz Yatırım’ın Deniz Akvaryum projesinde aktif olarak 4 ay görev  aldım. Projenin 3 farklı kullanıcı, admin ve api bölümlerinde yeni sayfa tasarımı, validasyon  ve mocha kullanarak testlerini yazdım. (vue 2) Sakarya Üniversitesi/Teknokent"
  buddies.title: "Best Buddies"
  buddies.subtitle: "Gönüllü"
  buddies.desc: "Best Buddies Türkiye Organizasyonuna gönüllü olarak Web yazılım desteği verdim."
  sayistay.title: "T.C. Sayıştay Başlanlığı"
  sayistay.subtitle: "Yazılım Departmanı Stajyer"
  sayistay.desc: "Bu stajımda Ajanda-Takvim programını Java dili ile yazdım. Swing Application  Framework ile GUİ arayüzünü tasarlandım. Proje gelişim aşamasında PostgreSQL JDBC  Driver kütüphaneleri projeye eklendi. Ankara."
en:
  kondukto.title: "Kondukto"
  kondukto.subtitle: "Frontend Developer"
  kondukto.desc: "AppSec Orchestration From Code to Production. Computer and Network Security(Vue)"
  onedio.title: "Onedio.com"
  onedio.subtitle: "Frontend Developer"
  onedio.desc: "I worked remotely on Onedio.com and other Onedio projects. I used Tailwind CSS, SCSS, SASS, Vue, Nuxt, Composition api."
  cool.title: "Cool Digital Solutions"
  cool.subtitle: "Fullstack Developer"
  cool.desc: "In my role in this company where i actively work, I work remotely on Smartfon Rodo Consultant project with its new name Magnus AI. In this project, we are using Vue, SASS, API(Express JS) and MongoDB. technologies in development."
  fintech.title: "Fintech"
  fintech.subtitle: "Fullstack Developer"
  fintech.desc: "In my role in this company, I took an active role in Deniz Yatırım's Deniz Aquarium project for 4 months. 3 different users of the project, new page design in the admin sections, validation on the API side, I wrote the tests with Mocha. (vue)"
  buddies.title: "Best Buddies"
  buddies.subtitle: "Voluntarily"
  buddies.desc: "I voluntarily provided Web software support to Best Buddies Turkey Organization."
  sayistay.title: "T.C. Sayıştay Başlanlığı"
  sayistay.subtitle: ""
  sayistay.desc: "I wrote the Agenda-Calendar program in Java language. GUI interface was designed with Swing Application Framework. PostgreSQL, JDBC Driver libraries were added to the project during the development stages."
</i18n>