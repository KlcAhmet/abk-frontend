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
  <!-- mobile -->
  <header class='lg:hidden p-3'>
    <div class='relative w-48 p-1 bg-sky-700/[0.65]' :class="navVisible ? 'rounded-t': 'rounded'">
      <div class='flex flex-nowrap justify-between'>
        <button type='button' @click='changeNavVisible()' class='flex items-center flex-nowrap w-full'>
          <img class='w-8' src='@/assets/img/menu-nav.svg' alt='menu logo'>
          <span class='ml-2 text-rose-300 font-bold'>{{ t(routeName) }}</span>
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
      <div v-if='navVisible' class='absolute w-48 bg-sky-700/[0.65] left-0 rounded-b border-t border-white mt-1 p-1'>
        <nav>
          <ul class='link font-medium'>
            <li>
              <NuxtLink @click='changeNavVisible(true)' to='/'>{{ t('index') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' to='/about'>{{ t('about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' to='/career'>{{ t('career') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' to='/contributions'>
                {{ t('contributions') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click='changeNavVisible(true)' to='/contact'>
                {{ t('contact') }}
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
    <div class='ml-auto flex flex-nowrap py-3 px-8 bg-sky-700/[0.65] rounded'>
      <nav>
        <ul class='link flex flex-row flex-nowrap items-center space-x-4 text-xl font-bold'>
          <li>
            <NuxtLink to='/'>{{ t('index') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/about'>{{ t('about') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/career'>{{ t('career') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/contributions'>{{ t('contributions') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/contact'>{{ t('contact') }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class='ml-4 flex'>
        <button v-if='langSelectVisible' type='button'
                @click='changeLangVisible'>
          <img class='w-10 h-8' src='@/assets/img/world.svg' alt='world img' />
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
  @apply text-rose-300
  li
    a
      &:hover
        @apply text-rose-800

.router-link-active
  @apply text-rose-800 underline
</style>

<i18n lang='yaml'>
tr:
  index: "Anasayfa"
  about: "Hakkımda"
  career: "Kariyer"
  contributions: "Katkılar"
  contact: "İletişim"
en:
  index: "Home"
  about: "About"
  career: "Career"
  contributions: "Contributions"
  contact: "Contact"
</i18n>