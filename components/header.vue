<script setup lang='ts'>

const { locale, t, setLocale } = useI18n();
const route = useRoute();
</script>

<template>
  <header class='pt-6'>
    <div class='flex flex-nowrap justify-center md:justify-end items-center'>
      <nav>
        <ul class='text-white link flex flex-row flex-nowrap space-x-4 text-base font-bold'>
          <li>
            <NuxtLink to='/'>{{ t('index') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/career'>{{ t('career') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/contact'>{{ t('contact') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class='flex ml-4 h-10 min-w-[40px]'>
        <button v-if='locale === "tr"' type='button'
                @click='setLocale("en")'>
          <img class='h-4' src='@/assets/img/us.svg' alt='world img' />
        </button>
        <button v-if='locale === "en"' type='button'
                @click='setLocale("tr")'>
          <img class='h-4' src='@/assets/img/tr.svg' alt='world img' />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang='sass'>
.link
  li
    a
      &:hover
        @apply text-base-pink

.router-link-active
  @apply text-base-pink
</style>

<i18n lang='yaml'>
tr:
  index: "Anasayfa"
  career: "Kariyer"
  contact: "İletişim"
en:
  index: "Home"
  career: "Career"
  contact: "Contact"
</i18n>