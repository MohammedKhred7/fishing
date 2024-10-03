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

  // init
  const { t, locale } = useI18n()
  const { isRtl, current } = useLocale()
  const rtl = ref(isRtl.value)

  // Field
  const langs = ref([
    {
      text: 'اللغة العربية',
      code: 'ar'
    },
    {
      text: 'English Language',
      code: 'en'
    }
  ])

  // Action
  function changeLang(lang: string) {
    current.value = lang
    locale.value = lang
    localStorage.setItem('lang', lang)
  }
</script>

<template>
  <VListGroup>
    <template v-slot:activator="{ props }">
      <VListItem
        v-bind="props"
        :title="t('main.lang')"
      ></VListItem>
    </template>
    <VListItem
      v-for="(lang, index) in langs"
      :key="index"
      style="padding-inline: 16px !important;"
      @click="changeLang(lang.code)"
    >
      <VListItemTitle>{{ lang.text }}</VListItemTitle>
    </VListItem>
  </VListGroup>
</template>

<style>

</style>
