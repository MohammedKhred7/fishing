<script setup lang="ts">
  // Vuetify
  import { VContainer } from 'vuetify/components/VGrid'
  import { VImg } from 'vuetify/components/VImg'

  // Vue
  import { ref, computed, onMounted } from "vue";
  import { useI18n } from "vue-i18n"

  // Components
  import MainTitle from "@/components/Main/Title.vue";

  const { t } = useI18n()
</script>

<template>
  <div>
    <MainTitle :title="t('infoNav.structure')" />
    <VContainer>
      <div>
        <VImg src="/img/structure/1.jpg" class="my-3 elevation-4" />
      </div>
      <div>
        <VImg src="/img/structure/2.jpg" class="my-3 elevation-4" />
      </div>
    </VContainer>
  </div>
</template>