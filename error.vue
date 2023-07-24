<script setup lang='ts'>
const { t } = useI18n();
const error = useError();
const statusCode = computed(() => error.value?.statusCode);

// clear error and redirect to home page
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class='errorPage h-screen flex items-center justify-center'>
    <div class='w-80 bg-sky-900/[0.73] rounded-md p-5 flex flex-col text-white'>
      <div class='text-center'>
        <div v-if='statusCode == 404'>
          <h6 class='text-2xl font-semibold'>404</h6>
          <p>{{ t('404') }}</p>
        </div>
        <div v-else>
          <h6 class='text-2xl font-semibold'>{{ statusCode }}</h6>
          <p>{{ t('else') }}</p>
        </div>
      </div>
      <div class='flex justify-center mt-5'>
        <!-- Redirect to home page -->
        <button class='bg-rose-700/75 p-3 rounded-lg' @click='handleError'>{{ t('home') }}</button>
      </div>
    </div>
  </div>
</template>

<style lang='sass'>
.errorPage
  background-repeat: no-repeat
  background-position: center
  background-size: 100% 100%
  background-image: url('@/assets/img/404.jpeg')
</style>

<i18n lang='yaml'>
tr:
  home: "Anasayfa"
  404: "Ooops! Sayfa yok gibi görünüyor. Lütfen başka bir rota deneyin."
  else: "Dünya dışı bir hata yaşandı!"
en:
  home: "Home"
  404: "Ooops! It seems like the page doesn't exist. Please try another route."
  else: "An extraterrestrial error occurred!"
</i18n>