<script setup lang="ts">
  // Vuetify
  import { VNavigationDrawer } from "vuetify/components/VNavigationDrawer";
  import { VList, VListItem } from "vuetify/components/VList";
  import { useLocale } from "vuetify";

  // Vue
  import { ref, computed, watch } from "vue";
  import { useI18n } from "vue-i18n";

  // Components
  import CompanyInfoMenu from "../Main/CompanyInfoMenu.vue";
  import ProductInfoMenu from "../Main/ProductInfoMenu.vue";
  import LangMenu from "../Main/LangMenu.vue";

  const { isRtl } = useLocale();
  const { t, locale } = useI18n()

  const props = defineProps({
    drawer: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['drawer'])

  const links = computed(() => 
  [
    {
      to: '/facilities',
      text: t('nav.facilities')
    },
    {
      to: '/objectives',
      text: t('nav.objective')
    },
    {
      to: '/vision',
      text: t('nav.vision')
    }
  ]
)

  let drawer = ref(props.drawer)

  watch(() => props.drawer, (val) => {
    drawer.value = val
  })
  watch(drawer, (val) => {
    emit('drawer', val)
  })
</script>

<template>
  <VNavigationDrawer
    v-model="drawer"
    sticky
    temporary
    :location="isRtl ? 'right': 'left'"
    color="#000819"
    class="hidden-lg-and-up drawer"
  >
    <VList density="compact" nav>
      <VListItem to="/">
        <VListItemTitle class="text-white">{{ t('nav.home') }}</VListItemTitle>
      </VListItem>
      <CompanyInfoMenu class="text-white" />
      <VListItem
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
      >
        <VListItemTitle class="text-white">{{ link.text }}</VListItemTitle>
      </VListItem>
      <ProductInfoMenu class="text-white" />
      <VListItem to="/word">
        <VListItemTitle class="text-white">{{ t('nav.word') }}</VListItemTitle>
      </VListItem>
      <LangMenu class="text-white" />
    </VList>
  </VNavigationDrawer>
</template>

<style>
  .drawer {
    top: 0 !important;
    height: 100vh !important;
  }
  .overlay-menu {
    max-height: auto !important;
    top: 56px !important;
    left: 0 !important;
    max-width: 100% !important;
    min-width: 100% !important;
  }
  .v-navigation-drawer__scrim {
    inset: unset !important;
  }
</style>
