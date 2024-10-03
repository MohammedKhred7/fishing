<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VImg } from 'vuetify/components/VImg'
  import { VScaleTransition } from 'vuetify/components/transitions'
  import { VCard, VCardTitle, VCardText } from 'vuetify/components/VCard'
  import { VListItem, VListItemTitle, VListItemSubtitle } from 'vuetify/components/VList'
  import { useDisplay } from "vuetify";

  // Packages 
  import { computed } from "vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n()

  const products = computed(() => [
    {
      img: '/img/products/cuttleffish/main.jpg',
      name: t('navProducts.fish1.name'),
      desc: t('navProducts.fish1.desc')
    },
    {
      img: '/img/products/cat-fish/main.jpg',
      name: t('navProducts.fish2.name'),
      desc: t('navProducts.fish2.desc')
    },
    {
      img: '/img/products/grey-cracker/main.jpg',
      name: t('navProducts.fish3.name'),
      desc: t('navProducts.fish3.desc')
    },
    {
      img: '/img/products/squid/main.jpg',
      name: t('navProducts.fish4.name'),
      desc: t('navProducts.fish4.desc')
    },
    {
      img: '/img/products/yellow-tail-scad/main.jpg',
      name: t('navProducts.fish5.name'),
      desc: t('navProducts.fish5.desc')
    },
    {
      img: '/img/products/bonito/main.jpg',
      name: t('navProducts.fish6.name'),
      desc: t('navProducts.fish6.desc')
    },
    {
      img: '/img/products/sardine/main.jpg',
      name: t('navProducts.fish7.name'),
      desc: t('navProducts.fish7.desc')
    },
    {
      img: '/img/products/bream/main.jpg',
      name: t('navProducts.fish8.name'),
      desc: t('navProducts.fish8.desc')
    },
    {
      img: '/img/products/chub/main.jpg',
      name: t('navProducts.fish9.name'),
      desc: t('navProducts.fish9.desc')
    },
    {
      img: '/img/products/barracuda/main.jpg',
      name: t('navProducts.fish10.name'),
      desc: t('navProducts.fish10.desc')
    },
    {
      img: '/img/products/ribbonfish/main.jpg',
      name: t('navProducts.fish11.name'),
      desc: t('navProducts.fish11.desc')
    },
    {
      img: '/img/products/lobster/main.jpg',
      name: t('navProducts.fish12.name'),
      desc: t('navProducts.fish12.desc')
    },
    {
      img: '/img/products/shrimp/main.jpg',
      name: t('navProducts.fish13.name'),
      desc: t('navProducts.fish13.desc')
    },
    {
      img: '/img/products/octopus/main.jpg',
      name: t('navProducts.fish14.name'),
      desc: t('navProducts.fish14.desc')
    }
  ])

  function favProducts() {
    var _products = document.querySelectorAll(".products");

    for (var i = 0; i < _products.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = _products[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        _products[i].classList.add("active");
      }
    }
  }
  window.addEventListener('scroll', favProducts)
</script>

<template>
  <div class="h-100 pb-16">
    <VContainer>
      <div class="sub-title">{{ $t('main.favProducts') }}</div>

      <VRow justify="space-around" class="mt-10">
        <VCol v-for="(product, i) in products" :key="i" md="3" sm="6" cols="12" class="products">
          <VCard color="#E1EDFD" rounded="lg" elevation="4" class="border-solid-product" @click.stop="$router.push(`/products/${i+1}`)">
            <VCardText class="pa-2">
              <VImg
                :key="i"
                :lazy-src="product.img"
                :src="product.img"
                height="200"
                width="100%"
                class="bg-white rounded-lg fill-img"
              />
            </VCardText>
            <VListItem lines="three">
              <VListItemTitle v-text="product.name" />
              <VListItemSubtitle v-text="product.desc" class="text-grey-darken-3 high-opacity" />
            </VListItem>
          </VCard>
        </VCol>
      </VRow>
  </VContainer>
  </div>
</template>

<style lang="scss">
.border-solid-product {
  border: thin #4E82F3 solid;
}
.products {
  &.active {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }

  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}
</style>
