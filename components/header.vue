<script setup lang='ts'>

const { locale, t, setLocale } = useI18n();
const route = useRoute();
const routeName = computed(() => route.name as string || 'index');
const langSelectVisible = ref(true);
const navVisible = ref(false);

function changeLangVisible(): void {
  langSelectVisible.value = !langSelectVisible.value;
  setLocale(locale.value);

  setTimeout(() => {
    langSelectVisible.value = true;
  }, 8000);
}

const changeNavVisible = (val?: boolean): void => {
  if (val) navVisible.value = false;
  else navVisible.value = !navVisible.value;

};
</script>

<template>
  <header class='relative flex pt-6 flex-nowrap overflow-x-scroll sm:overflow-hidden'>
    <div class='ml-auto flex flex-nowrap items-center'>
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
        <button v-if='langSelectVisible' type='button'
                @click='changeLangVisible'>
          <img class='h-10' src='@/assets/img/world.png' alt='world img' />
        </button>
        <select v-else v-model='locale' @change='changeLangVisible' class='w-10 h-8'>
          <option value='tr'>TR</option>
          <option value='en'>EN</option>
        </select>
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