<script setup lang="ts">
// Vuetify
import { VMenu } from 'vuetify/components/VMenu'
import { VBtn } from 'vuetify/components/VBtn'
import { VList, VListItem, VListItemTitle } from 'vuetify/components/VList'
import { useLocale } from 'vuetify'

// Vue
import { computed, ref } from "vue";

// vue-i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n()
const { isRtl } = useLocale()
const rtl = ref(isRtl.value)

const mainProducts = computed(() => 
  [
    {
      to: '/products/1',
      text: t('navProducts.fish1.name')
    },
    {
      to: '/products/2',
      text: t('navProducts.fish2.name')
    },
    {
      to: '/products/3',
      text: t('navProducts.fish3.name')
    },
    {
      to: '/products/4',
      text: t('navProducts.fish4.name')
    },
    {
      to: '/products/5',
      text: t('navProducts.fish5.name')
    },
    {
      to: '/products/6',
      text: t('navProducts.fish6.name')
    },
    {
      to: '/products/7',
      text: t('navProducts.fish7.name')
    },
    {
      to: '/products/8',
      text: t('navProducts.fish8.name')
    },
    {
      to: '/products/9',
      text: t('navProducts.fish9.name')
    },
    {
      to: '/products/10',
      text: t('navProducts.fish10.name')
    },
    {
      to: '/products/11',
      text: t('navProducts.fish11.name')
    }
  ]
)

</script>

<template>
  <VListGroup>
    <template v-slot:activator="{ props }">
      <VListItem
        v-bind="props"
        :title="t('nav.products')"
      ></VListItem>
    </template>
    <VListItem
      v-for="(product, index) in mainProducts"
      :key="index"
      style="padding-inline: 16px !important;"
      :to="product.to"
    >
      <VListItemTitle>{{ product.text }}</VListItemTitle>
    </VListItem>
  </VListGroup>
</template>
