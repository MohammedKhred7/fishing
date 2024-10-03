<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VImg } from 'vuetify/components/VImg'
  import { VScaleTransition } from 'vuetify/components/transitions'
  import { VCard, VCardTitle, VCardText } from 'vuetify/components/VCard'
  import { useDisplay } from "vuetify";

  // Packages 
  import { ref, watch, onMounted, reactive } from "vue";
  import { useRoute } from "vue-router";
  import { useI18n } from "vue-i18n";

  // Components
  import ShowImg from "../Main/ShowImg.vue";

  const { t } = useI18n()
  const route = useRoute()

  const products = ref([
    {
      img: [
        '/img/products/cuttleffish/1.jpg',
        '/img/products/cuttleffish/2.jpg',
        '/img/products/cuttleffish/3.jpg',
        '/img/products/cuttleffish/4.jpg'
      ],
      name: t('navProducts.fish1.name'),
      desc: t('navProducts.fish1.desc')
    },
    {
      img: [
        '/img/products/cat-fish/1.jpg',
        '/img/products/cat-fish/2.jpg',
        '/img/products/cat-fish/3.jpg',
        '/img/products/cat-fish/4.jpg'
      ],
      name: t('navProducts.fish2.name'),
      desc: t('navProducts.fish2.desc')
    },
    {
      img: [
        '/img/products/grey-cracker/1.jpg',
        '/img/products/grey-cracker/2.jpg',
        '/img/products/grey-cracker/3.jpg',
        '/img/products/grey-cracker/4.jpg'
      ],
      name: t('navProducts.fish3.name'),
      desc: t('navProducts.fish3.desc')
    },
    {
      img: [
        '/img/products/squid/1.jpg',
        '/img/products/squid/2.jpg',
        '/img/products/squid/3.jpg',
        '/img/products/squid/4.jpg'
      ],
      name: t('navProducts.fish4.name'),
      desc: t('navProducts.fish4.desc')
    },
    {
      img: [
        '/img/products/yellow-tail-scad/1.jpg',
        '/img/products/yellow-tail-scad/2.jpg',
        '/img/products/yellow-tail-scad/3.jpg',
        '/img/products/yellow-tail-scad/4.jpg'
      ],
      name: t('navProducts.fish5.name'),
      desc: t('navProducts.fish5.desc')
    },
    {
      img: [
        '/img/products/bonito/1.jpg',
        '/img/products/bonito/2.jpg',
        '/img/products/bonito/3.jpg',
        '/img/products/bonito/4.jpg'
      ],
      name: t('navProducts.fish6.name'),
      desc: t('navProducts.fish6.desc')
    },
    {
      img: [
        '/img/products/sardine/1.jpg',
        '/img/products/sardine/2.jpg',
        '/img/products/sardine/3.jpg',
        '/img/products/sardine/4.jpg'
      ],
      name: t('navProducts.fish7.name'),
      desc: t('navProducts.fish7.desc')
    },
    {
      img: [
        '/img/products/bream/1.jpg',
        '/img/products/bream/2.jpg',
        '/img/products/bream/3.jpg',
        '/img/products/bream/4.jpg'
      ],
      name: t('navProducts.fish8.name'),
      desc: t('navProducts.fish8.desc')
    },
    {
      img: [
        '/img/products/chub/1.jpg',
        '/img/products/chub/2.jpg',
        '/img/products/chub/3.jpg',
        '/img/products/chub/4.jpg'
      ],
      name: t('navProducts.fish9.name'),
      desc: t('navProducts.fish9.desc')
    },
    {
      img: [
        '/img/products/barracuda/1.jpg',
        '/img/products/barracuda/2.jpg',
        '/img/products/barracuda/3.jpg',
        '/img/products/barracuda/4.jpg'
      ],
      name: t('navProducts.fish10.name'),
      desc: t('navProducts.fish10.desc')
    },
    {
      img: [
        '/img/products/ribbonfish/1.jpg',
        '/img/products/ribbonfish/2.jpg',
        '/img/products/ribbonfish/3.jpg',
        '/img/products/ribbonfish/4.jpg'
      ],
      name: t('navProducts.fish11.name'),
      desc: t('navProducts.fish11.desc')
    },
    {
      img: [
        '/img/products/lobster/1.jpg',
        '/img/products/lobster/2.jpg',
        '/img/products/lobster/3.jpg',
        '/img/products/lobster/4.jpg'
      ],
      name: t('navProducts.fish12.name'),
      desc: t('navProducts.fish12.desc')
    },
    {
      img: [
        '/img/products/shrimp/1.jpg',
        '/img/products/shrimp/2.jpg',
        '/img/products/shrimp/3.jpg',
        '/img/products/shrimp/4.jpg'
      ],
      name: t('navProducts.fish13.name'),
      desc: t('navProducts.fish13.desc')
    },
    {
      img: [
        '/img/products/octopus/1.jpg',
        '/img/products/octopus/5.jpg',
        '/img/products/octopus/6.jpg',
        '/img/products/octopus/7.jpg'
      ],
      name: t('navProducts.fish14.name'),
      desc: t('navProducts.fish14.desc')
    }
  ])

  let productId: any
  let product: any = ref({
    name: '',
    decs: '',
    img: []
  })
  onMounted(() => {
    productId = route.params.id
    product.value = products.value[productId - 1]
  })

  watch(
    () => route.params.id,
    (newId: any) => {
      productId = parseInt(newId)
      console.log(newId)
      product.value = products.value[productId - 1]
      console.log(product)
    }
  )
  watch(
    () => product,
    (val) => {
      product = val
    }
  )

  const dialog = ref(false)
  const imgUrl = ref('')

  const selectImg = (img: string) => {
    dialog.value = true
    imgUrl.value = img
  }


</script>

<template>
  <div class="h-100">
    <VContainer>
      <ShowImg :dialog="dialog" :imgUrl="imgUrl" @closeDialog="dialog = false" />
      <div class="sub-title">{{ product.name }}</div>
      <p class="space-word-break">{{ product.desc }}</p>

      <VRow class="mt-10">
        <VCol v-for="(img, i) in product.img" :key="i" md="3" sm="6" cols="12" class="products">
          <VCard color="#E1EDFD" rounded="lg" elevation="4" class="border-solid-product" @click="selectImg(img)">
            <VCardText class="pa-2">
              <VImg
                :key="i"
                :lazy-src="img"
                :src="img"
                cover
                min-height="250"
                max-height="250"
                class="bg-white rounded-lg"
              />
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </VContainer>
  </div>
</template>

<style>
</style>
