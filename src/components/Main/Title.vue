<script setup lang="ts">
  // Vuetify
  import { VImg } from 'vuetify/components/VImg'
  import { useDisplay } from "vuetify";

  const { smAndDown } = useDisplay()
  const props = defineProps({
    title: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div id="title" class="mb-8">
    <VImg src="/img/mainImg.jpg" height="100%" :max-height="smAndDown ? '50vh' : '400'" cover class="img-sea img-container">
      <div class="img-container h-100 d-flex text-h6 align-center justify-center text-white">
        <span class="pb-2">{{ props.title }}</span>
      </div>
    </VImg>
  </div>
</template>

<style lang="scss">
#title {
  .img-sea img:not(.img-sea .logo img) {
    filter: blur(4px);
  }

  .img-container {
    position: relative;

    &::before {
      content: '';
      height: 100%;
      width: 100%;
      background: black;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.5;
      z-index: -1;
    }

    span::after {
      content: '';
      display: block;
      margin: auto;
      width: 50px;
      height: 2px;
      margin-top: 8px;
      background-color: white;
    }
  }
}
</style>
