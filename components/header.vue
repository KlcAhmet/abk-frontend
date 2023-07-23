<script setup lang='ts'>

const { locale, t } = useI18n();
const route = useRoute();
const routeName = computed(() => t(route.name as string));
const langSelectVisible = ref(true);
const navVisible = ref(false);

function changeLangVisible(): void {
  langSelectVisible.value = !langSelectVisible.value;

  setTimeout(() => {
    langSelectVisible.value = true;
  }, 5000);
}

const changeNavVisible = (val?: boolean): void => {
  if (val) navVisible.value = false;
  else navVisible.value = !navVisible.value;

};
</script>

<template>
  <!-- mobile -->
  <header class='lg:hidden p-3'>
    <div class='w-48 p-1 bg-sky-900 rounded'>
      <div class='flex flex-nowrap justify-between'>
        <button type='button' @click='changeNavVisible()' class='flex items-center flex-nowrap w-full'>
          <img class='w-8' src='@/assets/img/menu-nav.svg' alt='menu logo'>
          <span class='ml-2 text-white font-bold'>{{ routeName }}</span>
        </button>
        <div class='flex'>
          <button v-if='langSelectVisible' type='button' class='rounded-full'
                  @click='changeLangVisible'>
            <img class='w-7' src='@/assets/img/world.svg' alt='world img' />
          </button>
          <select v-else v-model='locale' @change='changeLangVisible'>
            <option value='tr'>TR</option>
            <option value='en'>EN</option>
          </select>
        </div>
      </div>
      <div v-if='navVisible' class='border-t border-white mt-2 pt-1'>
        <nav>
          <ul class='text-white font-medium'>
            <li>
              <NuxtLink @click='changeNavVisible(true)' class='hover:text-sky-500' to='/'>{{ t('index') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' class='hover:text-sky-500' to='/about'>{{ t('about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' class='hover:text-sky-500' to='/career'>{{ t('career') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' class='hover:text-sky-500' to='/contributions'>
                {{ t('contributions') }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <!-- desktop -->
  <header class='hidden relative h-24 lg:flex items-center px-5 border-b-2 border-sky-200/100'>
    <div class='absolute inset-x-1/2 transform -translate-x-1/2 w-16 h-16 -ml-5'>
      <figure>
        <img src='@/assets/img/astronaut-icon.svg' alt='logo' />
      </figure>
    </div>
    <div class='ml-auto flex flex-nowrap py-3 px-8 bg-sky-700 rounded'>
      <nav>
        <ul class='flex flex-row flex-nowrap items-center space-x-4 text-white text-xl font-bold'>
          <li>
            <NuxtLink class='hover:text-sky-500' to='/'>{{ t('index') }}</NuxtLink>
          </li>
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
        <button v-if='langSelectVisible' type='button'
                @click='changeLangVisible'>
          <img class='w-8' src='@/assets/img/world.svg' alt='world img' />
        </button>
        <select v-else v-model='locale' @change='changeLangVisible'>
          <option value='tr'>TR</option>
          <option value='en'>EN</option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped lang='sass'>
.router-link-active
  @apply text-sky-500 underline
</style>

<i18n lang='yaml'>
tr:
  index: "Anasayfa"
  about: "Hakkımda"
  career: "Kariyer"
  contributions: "Katkılar"
en:
  index: "Home"
  about: "About"
  career: "Career"
  contributions: "Contributions"
</i18n>