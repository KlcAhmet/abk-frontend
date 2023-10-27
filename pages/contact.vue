<script setup lang='ts'>
import type { Ref } from 'vue';
import { ref } from 'vue';
import { ITicket, ITicketResponse } from '~/server/dbModels';
import { createTicketValidate, IValidationErrors } from '~/server/validations';
import SocialMedia from '~/components/social-media.vue';

definePageMeta({
  layout: 'home-layout',
});
type IResStatus = ITicketResponse['statusCode'] | undefined;

const { t } = useI18n();
const ticket: Ref<ITicket> = ref({
  name: '',
  mail: '',
  message: '',
});
// local storage check and define
/*const localStorageTicket: string | null = localStorage.getItem('ticket');*/
if (process.client) {
  const localStorageTicket: string | null = localStorage.getItem('ticket');
  if (localStorageTicket) {
    ticket.value = <ITicket>JSON.parse(localStorageTicket);
  }
}

const validationErrors: IValidationErrors = ref({
  nameRequired: false,
  nameMax: false,
  mailInvalid: false,
  mailMax: false,
  mailRequired: false,
  messageRequired: false,
  messageMax: false,
});
const validationReset: IValidationErrors = validationErrors.value;
const isTicketPending: Ref<boolean> = ref(false);
const resStatus: Ref<IResStatus> = ref(undefined);
const sendMail = async (): Promise<void> => {
  isTicketPending.value = true;
  // local storage
  localStorage.setItem('ticket', JSON.stringify(ticket.value));

  try {
    const validation = await createTicketValidate(ticket.value);

    if (validation.isValid) {
      const res: ITicketResponse = await $fetch('/api/ticket', {
        method: 'POST',
        body: ticket.value,
      });
      resStatus.value = res.statusCode;
    } else {
      validationErrors.value = validation.validationErrors;
      resStatus.value = 400;
    }
  } catch (error) {
    resStatus.value = 500;
  } finally {
    isTicketPending.value = false;
    if (resStatus.value === 200) {
      validationErrors.value = validationReset;
      localStorage.removeItem('ticket');
    }
  }
};
</script>

<template>
  <div class='py-28 sm:py-60 max-w-4xl'>
    <div class='flex flex-col animate__fadeInUp animate__animated'>
      <div class='border-b border-dashed border-base-white-500 pb-5 '>
        <h1 class='text-white text-3xl font-bold'>
          {{ t('contact') }}
        </h1>
      </div>
      <div class='flex flex-col-reverse sm:flex-row'>
        <div class='py-10 w-full sm:w-1/2'>
          <div class='sm:max-w-[300px]'>
            <socialMedia />
          </div>
        </div>
        <!--        <div class='py-10 w-full sm:w-1/2'>
                  <form class='flex flex-col space-y-3'>
                    <input type='text' v-model.trim='ticket.name' :placeholder="t('name')"
                           class='px-5 py-2 sm:rounded-lg bg-base-black-500 text-base-white focus-visible:outline-none'>
                    <label class='text-white font-bold'>
                      <span class='text-base-pink font-light text-sm'>
                        <template v-if='validationErrors.nameRequired'>{{ t('nameRequired') }}</template>
                        <template v-else-if='validationErrors.nameMax'>{{ t('nameMax') }}</template>
                      </span>
                    </label>

                    <input type='text' v-model.trim='ticket.mail' placeholder='Mail'
                           class='px-5 py-2 sm:rounded-lg bg-base-black-500 text-base-white focus-visible:outline-non'>
                    <label class='text-white font-bold'>
                      <span class='text-base-pink font-light text-sm'>
                        <template v-if='validationErrors.mailRequired'>{{ t('mailRequired') }}</template>
                        <template v-else-if='validationErrors.mailInvalid'>{{ t('mailInvalid') }}</template>
                        <template v-else-if='validationErrors.mailMax'>{{ t('mailMax') }}</template>
                      </span>
                    </label>

                    <textarea v-model.trim='ticket.message' :placeholder="t('message')"
                              class='px-5 py-2 sm:rounded-lg bg-base-black-500 text-base-white focus-visible:outline-non' />
                    <label class='text-white font-bold'>
                      <span class='text-base-pink font-light text-sm'>
                        <template v-if='validationErrors.messageRequired'>{{ t('messageRequired') }}</template>
                        <template v-else-if='validationErrors.messageMax'>{{ t('messageMax') }}</template>
                      </span>
                    </label>
                    <button
                      class='mt-5 bg-base-pink hover:bg-white rounded-2xl w-1/2 mx-auto block text-white hover:text-black h-[36px]'
                      type='button'
                      :class='isTicketPending ? "cursor-not-allowed" : "cursor-pointer"'
                      :disabled='isTicketPending'
                      @click='sendMail'>
                      <LoadingSpinner v-show='isTicketPending' size='30' class='-mb-1' />
                      <span v-show='!isTicketPending' class=''>{{ t('send') }}</span>
                    </button>
                    <div v-if='resStatus' class='mt-3 sm:rounded-lg bg-base-black-500 p-2 text-center text-white'>
                      <p v-if='resStatus === 200'>
                        {{ t(`${resStatus}`) }}
                      </p>
                      <p v-else-if='resStatus'>
                        {{ t(`${resStatus}`) }}
                      </p>
                    </div>
                  </form>
                </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<i18n lang='yaml'>
tr:
  contact: "İletişim"
  name: "İsim"
  nameRequired: "Gerekli"
  nameMax: "100 karakteri geçemez"
  mailRequired: "Gerekli"
  mailMax: "100 karakteri geçemez"
  mailInvalid: "Geçersiz Format"
  message: "Mesaj"
  messageRequired: "Gerekli"
  messageMax: "1000 karakteri geçemez"
  send: "Gönder"
  # Ticket status codes
  200: "Mesajınız uzaya yollandı."
  400: "Üzgünüm, bu talebi anlayamadım."
  429: "Talepleriniz çok fazla, bir süre sonra tekrar deneyin."
  500: "Üzgünüz, bir iç sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin."
en:
  contact: "İletişim"
  name: "Name"
  nameRequired: "Required"
  nameMax: "Not exceed 100 characters"
  mailRequired: "Required"
  mailMax: "Not exceed 100 characters"
  mailInvalid: "Invalid Format"
  message: "Message"
  messageRequired: "Required"
  messageMax: "Not exceed 1000 characters"
  send: "Send"
  # Ticket status codes
  200: "Your message has been dispatched into space."
  400: "I'm sorry, I couldn't understand this request."
  429: "Your requests are too many, please try again after some time."
  500: "We're sorry, an internal server error occurred. Please try again later."
</i18n>
