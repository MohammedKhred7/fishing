<script setup lang="ts">
// vuetify
import { VContainer, VSpacer } from 'vuetify/components/VGrid'
import { VAppBar } from 'vuetify/components/VAppBar'
import { VBtn } from 'vuetify/components/VBtn'

// vue
import { ref, watch } from "vue";

// vue-i18n
import { useI18n } from "vue-i18n";

import ProductMenu from "../Main/ProductMenu.vue";
import CompanyInfo from "../Main/CompanyInfo.vue";

// Init
const { t } = useI18n()
const props = defineProps({
  isStick: {
    type: Boolean,
    defualt: false
  }
})

// Field
let isStick = ref(props.isStick)

// Action
watch(() => props.isStick, (val) => {
  isStick.value = val
})

console.log('baseurl', import.meta.env.BASE_URL);

</script>

<template>
  <VAppBar color="#000819" class="sticky">
    <VContainer class="d-flex align-center">
      <VSpacer />
      <span :class="isStick ? 'wide' : 'shirk'">
        <VBtn size="small"
          class="text-capitalize"
          :class="[$route.path === '/' ? 'bg-white text-blue' : 'text-white']" :active="false"
          @click="$router.push('/')"
        >
          {{ t("nav.home") }}
        </VBtn>
        <CompanyInfo />
        <VBtn size="small"
          class="text-capitalize"
          :class="[$route.path === '/facilities' ? 'bg-white text-blue' : 'text-white']" :active="false"
          @click="$router.push('/facilities')"
        >
          {{ t("nav.facilities") }}
        </VBtn>
        <VBtn size="small"
          class="text-capitalize"
          :class="[$route.path === '/objectives' ? 'bg-white text-blue' : 'text-white']" :active="false"
          @click="$router.push('/objectives')"
        >
          {{ t("nav.objective") }}
        </VBtn>
        <VBtn size="small"
          class="text-capitalize"
          :class="[$route.path === '/vision' ? 'bg-white text-blue' : 'text-white']" :active="false"
          @click="$router.push('/vision')"
        >
          {{ t("nav.vision") }}
        </VBtn>
        <ProductMenu />
        <VBtn size="small"
          class="text-capitalize"
          :class="[$route.path === '/word' ? 'bg-white text-blue' : 'text-white']" :active="false"
          @click="$router.push('/word')"
        >
          {{ t("nav.word") }}
        </VBtn>
      </span>

      <VSpacer />
      </VContainer>
    
  </VAppBar>
</template>

<style lang="scss">
.translate {
  .v-btn__content {
    height: 100%;

    .v-icon {
      height: initial;
      width: inherit;
      border-radius: 3px;
    }
  }
}
.overlay-menu {
  max-height: auto !important;
  top: 56px !important;
  left: 0 !important;
  max-width: 100% !important;
  min-width: 100% !important;
}

.shirk {
  button {
    transition: font-size 1s;
    font-size: 0.85rem;
  }
}
.wide {
  button {
    transition: font-size 1s;
    font-size: 1rem;
  }
}
</style>
