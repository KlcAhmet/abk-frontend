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
  kondukto.subtitle: "Frontend Developer (Remote)"
  kondukto.desc: "Koddan Üretime AppSec Düzenlemesi. Bilgisayar ve Ağ Güvenliği üzerine olan ürünün geliştirilmesinde görev aldım."
  onedio.title: "Onedio.com"
  onedio.subtitle: "Frontend Developer (Remote)"
  onedio.desc: "Onenio.com ve diğer projelerinde görev aldım. Nuxt, Vue, Composition api, Tailwind teknolojileri ile çalıştım."
  cool.title: "Cool Digital Solutions"
  cool.subtitle: "Fullstack Developer (Remote)"
  cool.desc: "Akıllıfon Rodo Danışmanı, Yeni ismi Magnus ai olan projede remote olarak çalıştım. Vue, SASS, API (Express JS) ve MongoDB teknolojilerini kullandık. web: getmagnus.com"
  fintech.title: "Fintech"
  fintech.subtitle: "Fullstack Developer"
  fintech.desc: "Sakarya Üniversitesi'nin Teknopark'ında Fintech firmasında çalıştım. Vue, Bootstrap, APİ(ExpressJS) ve SQL Veritabanı teknolojilerini kullandık"
  buddies.title: "Best Buddies"
  buddies.subtitle: "Gönüllü"
  buddies.desc: "Best Buddies Türkiye Organizasyonuna gönüllü olarak Web yazılım desteği verdim."
  sayistay.title: "T.C. Sayıştay Başkanlığı"
  sayistay.subtitle: "Yazılım Departmanı Stajyer"
  sayistay.desc: "Bu stajımda Ajanda-Takvim programını Java dili ile yazdım. Swing Application Framework ile GUİ arayüzünü tasarlandım. Proje gelişim aşamasında PostgreSQL JDBC Driver kütüphaneleri projeye eklendi. Ankara."
en:
  kondukto.title: "Kondukto"
  kondukto.subtitle: "Frontend Developer (Remote)"
  kondukto.desc: "From Code to Production AppSec Enhancement. I was involved in the development of a product focused on Computer and Network Security."
  onedio.title: "Onedio.com "
  onedio.subtitle: "Frontend Developer (Remote)"
  onedio.desc: "I worked remotely on Onedio.com and other Onedio projects. I used Tailwind CSS, SCSS, SASS, Vue, Nuxt, Composition api."
  cool.title: "Cool Digital Solution s"
  cool.subtitle: "Fullstack Developer (Remote)"
  cool.desc: "Smartphone Rodo Consultant, I worked remotely on the project now named Magnus AI. We used Vue, SASS, API (Express JS), and MongoDB technologies. Website: getmagnus.com"
  fintech.title: "Fintech"
  fintech.subtitle: "Fullstack Developer"
  fintech.desc: "I worked at a Fintech company in Sakarya University's Technopark. We used Vue, Bootstrap, API (ExpressJS), and SQL Database technologies."
  buddies.title: "Best Buddies"
  buddies.subtitle: "Voluntarily"
  buddies.desc: "I voluntarily provided Web software support to Best Buddies Turkey Organization."
  sayistay.title: "Turkish Court of Accounts"
  sayistay.subtitle: "Software Department Intern"
  sayistay.desc: "During this internship, I developed a Calendar program using the Java language. I designed the GUI interface with the Swing Application Framework. PostgreSQL JDBC Driver libraries were added to the project during the development phase."
</i18n>