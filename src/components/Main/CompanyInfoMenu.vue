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
  <VListGroup fluid>
    <template v-slot:activator="{ props }">
      <VListItem
        v-bind="props"
        :title="t('nav.whous')"
      ></VListItem>
    </template>
    <VListItem
      v-for="(info, index) in mainInfo"
      :key="index"
      style="padding-inline: 16px !important;"
      :to="info.to"
    >
      <VListItemTitle>{{ info.text }}</VListItemTitle>
    </VListItem>
  </VListGroup>
</template>
