<script setup lang='ts'>

const langSelectVisible = ref(true);
const { locale, t } = useI18n();

function changeLangVisible(): void {
  langSelectVisible.value = !langSelectVisible.value;

  setTimeout(() => {
    langSelectVisible.value = true;
  }, 5000);
}
</script>

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
          <NuxtLink class='hover:text-sky-500' to='/about'>{{ t('about') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class='hover:text-sky-500' to='/career'>{{ t('career') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class='hover:text-sky-500' to='/contributions'>{{ t('contributions') }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class='ml-4 flex'>
      <button v-if='langSelectVisible' type='button' class='bg-sky-500 hover:bg-sky-700 rounded-full'
              @click='changeLangVisible'>
        <img class='w-8' src='@/assets/img/world.svg' alt='world img' />
      </button>
      <select v-else v-model='locale' @change='changeLangVisible'>
        <option value='tr'>TR</option>
        <option value='en'>EN</option>
      </select>
    </div>
  </header>
</template>

<style scoped lang='sass'>
</style>

<i18n lang='yaml'>
tr:
  about: "Hakkımda"
  career: "Kariyer"
  contributions: "Katkılar"
en:
  about: "About"
  career: "Career"
  contributions: "Contributions"
</i18n>