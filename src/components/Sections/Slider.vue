<script setup lang="ts">
// Vuetify
import { VCarousel, VCarouselItem } from 'vuetify/components/VCarousel'
import { useDisplay } from 'vuetify'

import { ref } from "vue"

const { xs, lgAndUp } = useDisplay()

const slides = ref([
  '/img/products/cuttleffish/2.jpg',
  // '/img/products/grey-cracker/2.jpg',
  '/img/products/squid/1.jpg',
  '/img/products/sardine/5.jpg',
  '/img/products/bream/1.jpg',
  '/img/products/octopus/1.jpg',
  '/img/products/lobster/4.jpg',
  '/img/products/shrimp/2.jpg',
])

// Action
const onSlideChange = (slideNumber: any) => {
  console.log(slideNumber);
}
</script>

<template>
  <div>
    <VCarousel
      cycle
      interval="3000"
      :height="xs ? `50vh` : `calc(100vh - ${lgAndUp ? '158px' : '95px'})`"
      :show-arrows="false"
      hide-delimiters
      class="slider-img"
      @input="onSlideChange"
    >
      <VCarouselItem
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide"
        :lazy-src="slide"
        cover
        class="text-white"
      >
      </VCarouselItem>
    </VCarousel>
  </div>
</template>

<style lang="scss">
.slider-img {
  .v-img__img {
    object-fit: fill;
  }
}
.v-carousel__controls {
  button {
    margin: 0 4px;
    color: #4E82F3;
    box-shadow: 0px 0px 5px black;
  }
  .v-btn--active {
    color: #000819;
  }
}
</style>