<script setup lang='ts'>
import type { Ref } from 'vue';
import { ref } from 'vue';
import { ITicket, ITicketResponse } from '~/server/dbModels';
import * as yup from 'yup';

definePageMeta({
  layout: 'home-layout',
});

// const { t } = useI18n();
const ticket: Ref<ITicket> = ref({
  name: 'test-name-1',
  mail: 'test-mail-1@gmail.com',
  message: 'Bugün hava harika ve güneşli. Sabah yürüyüşü yaparken kuşların şarkıları beni mutlu ediyor. Akşam yemeği için arkadaşlarımla buluşacağım ve uzun zamandır görmediğimiz için çok heyecanlıyız. Gelecek hafta sonu ise doğa tatili yapmaya karar verdik. Ormanın derinliklerinde kamp kuracağız ve ateş başında hikayeler anlatacağız. Ayrıca yeni bir kitap okuma listesi oluşturdum ve şu anda bir romanı bitirmeye çalışıyorum. Hayat dolu ve heyecan verici!',
});

const validationErrors: {
  value?: any
  nameRequired?: boolean
  nameMin?: boolean
  nameMax?: boolean
  mailInvalid?: boolean
  mailRequired?: boolean
  messageRequired?: boolean
} = ref({
  nameRequired: false,
  nameMin: false,
  nameMax: false,
  mailInvalid: false,
  mailRequired: false,
  messageRequired: false,
});

let ticketSchema = yup.object({
  name: yup.string().required('nameRequired').min(3, 'nameMin').max(20, 'nameMax'),
  mail: yup.string().email('mailInvalid').required('mailRequired'),
  message: yup.string().required('messageRequired'),
});
const sendMail = async () => {
  let isValid = false;
  try {
    await ticketSchema.validate(ticket.value, { abortEarly: false }).then(() => {
      isValid = true;
      validationErrors.value = {};
    }).catch((err) => {
      isValid = false;
      err.errors.forEach((key: any) => {
        validationErrors.value[key] = true;
      });
    });

    if (isValid) {
      const res: ITicketResponse = await $fetch('/api/ticket', {
        method: 'POST',
        body: ticket.value,
      });
      if (res.statusCode === 200) {
        console.log('res >>>', res);
      } else {
        console.error('res >>>', res);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class='h-full flex items-center'>
    <div>
      <form style='background-color: cornflowerblue' class='flex flex-col p-3 w-[329px]'>
        <label>Name:</label>
        <input type='text' v-model.trim='ticket.name'>
        <p v-if='validationErrors.nameRequired'>isim gerekli</p>
        <label>Mail:</label>
        <input type='text' v-model.trim='ticket.mail'>
        <p v-if='validationErrors.mailRequired'>mail gerekli</p>
        <label>Message:</label>
        <textarea v-model.trim='ticket.message' />
        <p v-if='validationErrors.messageRequired'>mesaj gerekli</p>
        <button class='p-3 bg-white mt-5' type='button' @click='sendMail'>Send</button>
      </form>
    </div>

  </div>
</template>

<style scoped>

</style>

<!--
<i18n lang='yaml'>
tr:
  description: "Şu anda, Frontend Geliştirme alanında öncelikli olarak React, Vue ve Node.js teknolojileri üzerinde çalışıyorum. Kendimi, web programlama konusunda yüksek bilgiye sahip ve güçlü sosyal becerilere sahip biri olarak tanımlıyorum. Ayrıca, hayatımın tüm alanlarında yüksek hedefler belirliyorum, hedeflerime ulaşmak için çalışkan ve kararlı biriyim."
en:
  description: "At present, I'm working on primarily in React, Vue and Node.js technologies in the Frontend Development. I describe myself as a person who has high knowledge about web programming and strong social skills. Besides, I set high goals in all fields of my life, i am a hardworker and persistent person on reaching my goals."
</i18n>-->
