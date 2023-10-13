<script setup lang='ts'>
const { t } = useI18n();

// clear error and redirect to home page
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class='bg-black h-screen flex items-center justify-center'>
    <div class='bg-base-black-500 sm:rounded-md p-5 flex flex-col text-white'>
      <div class='text-center'>
        <div>
          <h6 class='text-2xl font-semibold text-base-pink'>404</h6>
          <p>{{ t('404') }}</p>
        </div>
      </div>
      <div class='flex justify-center mt-5'>
        <!-- Redirect to home page -->
        <button class='bg-base-pink p-3 rounded-lg' @click='handleError'>{{ t('home') }}</button>
      </div>
    </div>
  </div>
</template>

<style></style>

<i18n lang='yaml'>
tr:
  home: "Anasayfa"
  404: "Ooops! Sayfa yok gibi görünüyor. Lütfen başka bir rota deneyin."
en:
  home: "Home"
  404: "Ooops! It seems like the page doesn't exist. Please try another route."
</i18n>