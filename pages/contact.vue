<script setup lang='ts'>
import { reactive } from 'vue';
import { ITicket, ITicketResponse } from '~/server/dbModels';

definePageMeta({
  layout: 'home-layout',
});
// const { t } = useI18n();

const ticket: ITicket = reactive({
  name: 'test-name-1',
  mail: 'test-mail-1@gmail.com',
  message: 'Bugün hava harika ve güneşli. Sabah yürüyüşü yaparken kuşların şarkıları beni mutlu ediyor. Akşam yemeği için arkadaşlarımla buluşacağım ve uzun zamandır görmediğimiz için çok heyecanlıyız. Gelecek hafta sonu ise doğa tatili yapmaya karar verdik. Ormanın derinliklerinde kamp kuracağız ve ateş başında hikayeler anlatacağız. Ayrıca yeni bir kitap okuma listesi oluşturdum ve şu anda bir romanı bitirmeye çalışıyorum. Hayat dolu ve heyecan verici!',
});

const sendMail = async () => {
  try {
    const res: ITicketResponse = await $fetch('/api/ticket', {
      method: 'POST',
      body: ticket,
    });
    if (res.statusCode === 200) {
      console.log('res >>>', res);
    } else {
      console.error('res >>>', res);
    }
  } catch (error) {
    console.log('error >>>', error);
  }
};
</script>

<template>
  <div class='h-full flex items-center'>
    <div>
      <form style='background-color: cornflowerblue' class='flex flex-col p-3 w-[329px]'>
        <label>Name:</label>
        <input type='text' v-model.trim='ticket.name'>
        <label>Mail:</label>
        <input type='text' v-model.trim='ticket.mail'>
        <label>Message:</label>
        <textarea v-model.trim='ticket.message' />
        <button class='p-3 bg-white mt-5' type='button' @click='sendMail'>Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>