<script setup lang='ts'>
import { defineProps, withDefaults } from 'vue';

export interface Props {
  size?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  size: '30',
});

const style = {
  width: `${props.size}px`,
  height: `${props.size}px`,
};

</script>

<template>
  <div class='loadingSpinner inline-block'>
    <img src='~/assets/img/loading/loading.png' alt='loading' class='animate absolute' :style='style' />
    <img src='~/assets/img/loading/loading-process.png' alt='loading' class='animate animate-reverse'
         :style='style' />
  </div>
</template>

<style lang='sass' scoped>
@keyframes rotate360
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)

.loadingSpinner
  .animate
    animation: rotate360 1s linear infinite

    &-reverse
      // animation: rotate360 1s reverse infinite
      animation-direction: reverse

</style>