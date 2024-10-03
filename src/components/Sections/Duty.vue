<script setup lang="ts">
// Vuetify
import { VContainer, VRow, VCol } from "vuetify/components/VGrid";
import { VImg } from "vuetify/components/VImg";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
</script>

<template>
  <div class="h-100">
    <VContainer class="h-100 d-flex align-center">
      <div class="w-100">
        <VRow class="ma-0 flex-wrap-reverse">
          <VCol md="7" cols="12" class="para">
            <div class="sub-title">{{ $t("main.duty") }}</div>
            <p class="text-grey-darken-3 space-word-break">
              {{ $t("info.duty") }}
            </p>
          </VCol>
          <VCol
            xxl="3"
            offset-xxl="2"
            xl="3"
            offset-xl="2"
            lg="3"
            offset-lg="2"
            md="5"
            sm="6"
            offset-sm="6"
            cols="12"
            class="ma-auto"
          >
            <VCard
              color="#E1EDFD"
              rounded="lg"
              elevation="4"
              class="border-solid-product"
            >
              <VCardText class="pa-2">
                <VImg
                  lazy-src="/img/logo3.png"
                  src="/img/logo3.png"
                  min-height="250"
                  max-height="250"
                  class="bg-white rounded-lg"
                />
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style></style>
