<script setup lang='ts'>
import type { Ref } from 'vue';
import { ref } from 'vue';
import { ITicket, ITicketResponse } from '~/server/dbModels';
import { createTicketValidate, IValidationErrors } from '~/server/validations';

definePageMeta({
  layout: 'home-layout',
});

const { t } = useI18n();
const ticket: Ref<ITicket> = ref({ // TODO: remove default values
  name: '',
  mail: '',
  message: 'Bugün hava harika ve güneşli. Sabah yürüyüşü yaparken kuşların şarkıları beni mutlu ediyor. Akşam yemeği için arkadaşlarımla buluşacağım ve uzun zamandır görmediğimiz için çok heyecanlıyız. Gelecek hafta sonu ise doğa tatili yapmaya karar verdik. Ormanın derinliklerinde kamp kuracağız ve ateş başında hikayeler anlatacağız. Ayrıca yeni bir kitap okuma listesi oluşturdum ve şu anda bir romanı bitirmeye çalışıyorum. Hayat dolu ve heyecan verici!vvvvBugün hava harika ve güneşli. Sabah yürüyüşü yaparken kuşların şarkıları beni mutlu ediyor. Akşam yemeği için arkadaşlarımla buluşacağım ve uzun zamandır görmediğimiz için çok heyecanlıyız. Gelecek hafta sonu ise doğa tatili yapmaya karar verdik. Ormanın derinliklerinde kamp kuracağız ve ateş başında hikayeler anlatacağız. Ayrıca yeni bir kitap okuma listesi oluşturdum ve şu anda bir romanı bitirmeye çalışıyorum. Hayat dolu ve heyecan verici! heyecan verici! heyecan verici! heyecan verici! heyecan verici! heyecan verici!' +
    ' heyecan verici! heyecan b',
});
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

const sendMail = async () => {
  isTicketPending.value = true;
  try {
    const validation = await createTicketValidate(ticket.value);

    if (validation.isValid) {
      const res: ITicketResponse = await $fetch('/api/ticket', {
        method: 'POST',
        body: ticket.value,
      });
      if (res.statusCode === 200) {
        validationErrors.value = validationReset;
        // TODO: show success message
      } else {
        console.error('res-err >>>', res);
        // TODO: show error message
      }
    } else {
      validationErrors.value = validation.validationErrors;
    }
  } catch (error) {
  } finally {
    isTicketPending.value = false;
  }
};
</script>

<template>
  <div class='h-full flex items-center'>
    <div>
      <form style='background-color: cornflowerblue' class='flex flex-col p-3 w-[375px]'>
        <label>Name:</label>
        <input type='text' v-model.trim='ticket.name'>
        <div>
          <p v-if='validationErrors.nameRequired'>{{ t('nameRequired') }}</p>
          <p v-else-if='validationErrors.nameMax'>{{ t('nameMax') }}</p>
        </div>
        <label>Mail:</label>
        <input type='text' v-model.trim='ticket.mail'>
        <div>
          <p v-if='validationErrors.mailRequired'>{{ t('mailRequired') }}</p>
          <p v-else-if='validationErrors.mailInvalid'>{{ t('mailInvalid') }}</p>
          <p v-else-if='validationErrors.mailMax'>{{ t('mailMax') }}</p>
        </div>
        <label>Message:</label>
        <textarea v-model.trim='ticket.message' />
        <div>
          <p v-if='validationErrors.messageRequired'>{{ t('messageRequired') }}</p>
          <p v-else-if='validationErrors.messageMax'>{{ t('messageMax') }}</p>
        </div>
        <button class='p-3 bg-white mt-5' type='button' :disabled='isTicketPending' @click='sendMail'>
          <span>{{ t('send') }}</span>
        </button>
      </form>
    </div>

  </div>
</template>

<style scoped>
</style>

<i18n lang='yaml'>
tr:
  nameRequired: "İsim alanı zorunludur"
  nameMax: "İsim alanı 100 karakteri geçemez."
  mailInvalid: "Mail geçersiz"
  mailMax: "Mail alanı 100 karakteri geçemez."
  mailRequired: "Mail alanı zorunludur"
  messageRequired: "Mesaj alanı zorunludur"
  messageMax: "Mesaj alanı 1000 karakteri geçemez."
  send: "Gönder"
en:
  nameRequired: "Name is required"
  nameMax: "Name field must not exceed 100 characters."
  mailInvalid: "Mail is invalid"
  mailMax: "Mail field must not exceed 100 characters."
  mailRequired: "Mail is required"
  messageRequired: "Message is required"
  messageMax: "Message field must not exceed 1000 characters."
  send: "Send"
</i18n>
