<script setup lang='ts'>
const { locale, setLocale } = useI18n();
const route = useRoute();
const langSelectVisible = ref(true);

function changeLangVisible(): void {
  langSelectVisible.value = !langSelectVisible.value;
  setLocale(locale.value);

  setTimeout(() => {
    langSelectVisible.value = true;
  }, 8000);
}
</script>

<template>
  <footer class='flex justify-center p-5'>
    <div>
      <ul class='flex justify-center items-center space-x-2'>
        <li>
          <a class='flex items-center hover:scale-150 transition duration-200' href='https://github.com/KlcAhmet'
             target='_blank' rel='noopener noreferrer nofollow'>
            <img class='h-12 w-12' src='@/assets/img/github.svg' alt='github logo' />
          </a>
        </li>
        <li>
          <a class='flex items-center hover:scale-150 transition duration-200'
             href='https://www.linkedin.com/in/ahmet-batuhan-kılıç-b88975129/'
             target='_blank' rel='noopener noreferrer nofollow'>
            <img class='h-12 w-12' src='@/assets/img/linkedin.svg' alt='linkedin logo' />
          </a>
        </li>
        <li>
          <a class='flex items-center hover:scale-150 transition duration-200'
             href='https://www.instagram.com/ab01001011/'
             target='_blank' rel='noopener noreferrer nofollow'>
            <img class='h-12 w-12' src='@/assets/img/instagram.svg' alt='instagram logo' />
          </a>
        </li>
        <li>
          <a class='flex items-center hover:scale-150 transition duration-200'
             href='https://g.page/AhmetBatuhanKilic?share'
             target='_blank' rel='noopener noreferrer nofollow'>
            <img class='h-12 w-12' src='@/assets/img/google.svg' alt='google logo' />
          </a>
        </li>
        <li>
          <a class='flex items-center hover:scale-150 transition duration-200' href='mailto:ahmetbatukilic@gmail.com'
             target='_blank'
             rel='noopener noreferrer nofollow'>
            <img class='h-12 w-12' src='@/assets/img/mail.svg' alt='mail logo' />
          </a>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang='sass'>

</style>