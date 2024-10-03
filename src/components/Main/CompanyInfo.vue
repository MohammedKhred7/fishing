<script setup lang="ts">
// Vuetify
import { VMenu } from 'vuetify/components/VMenu'
import { VBtn } from 'vuetify/components/VBtn'
import { VList, VListItem, VListItemTitle } from 'vuetify/components/VList'

// Vue
import { computed } from "vue";

// vue-i18n
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const mainInfo = computed(() => 
  [
    {
      to: '/comapany',
      text: t('infoNav.company')
    },
    {
      to: '/administrativeStaff',
      text: t('infoNav.administrativeStaff')
    },
    {
      to: '/structure',
      text: t('infoNav.structure')
    },
    {
      to: '/quality',
      text: t('infoNav.quality')
    },
    {
      to: '/certificates',
      text: t('infoNav.certificates')
    }
  ]
)

</script>

<template>
  <VMenu>
    <template v-slot:activator="{ props }">
      <VBtn
        v-bind="props"
        size="small"
        class="text-capitalize"
        :class="
          $route.path.includes('/administrativeStaff') ||
          $route.path.includes('/comapany') ||
          $route.path.includes('/structure') ||
          $route.path.includes('/quality') ||
          $route.path.includes('/certificates')
          ? 'bg-white text-blue' : 'text-white'"
        :active="false"
      >
        {{ t('nav.whous') }}
      </VBtn>
    </template>
    <VList>
      <VListItem
        v-for="(product, index) in mainInfo"
        :key="index"
        :value="index"
        :to="product.to"
      >
        <VListItemTitle>{{ product.text }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>
