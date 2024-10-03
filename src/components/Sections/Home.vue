<script setup lang="ts">
// vuetify
import { VImg } from "vuetify/components/VImg";
import { VContainer, VRow, VCol } from "vuetify/components/VGrid";
import { VBtn } from "vuetify/components/VBtn";
import { VIcon } from "vuetify/components/VIcon";
import { VCard, VCardTitle } from "vuetify/components/VCard";
import { useDisplay, useLocale } from "vuetify";

// vue
import { ref, reactive, computed, watch } from "vue";

// const img = require('@/assets/img/main-img.jpg')

const { isRtl } = useLocale();
console.log(isRtl);

const rtl = ref(isRtl.value);
console.log(rtl.value);
watch(isRtl, (val, old) => {
  rtl.value = val;
});

const { smAndDown, mdAndUp, lgAndUp } = reactive(useDisplay());

function scroll(refName: string) {
  const element = document.getElementById(refName);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="pb-8">
    <!-- <VImg gradient="to top, white, rgba(29,110,202,1)" width="100%" cover class="h-screen"> -->
    <VImg :src="mdAndUp ? '/img/Intersect.svg' : ''" :class="['home pt-16', lgAndUp ? 'h-screen' : 'helf-screen' ]">
      <div class="pt-16">
        <VContainer>
          <VRow align="start" no-gutters class="flex-wrap-reverse">
            <VCol align-self="center" md="5" cols="12">
              <div class="mb-4">
                <h2 class="text-grey-darken-4">{{ $t("home.title") }}</h2>
                <h2 class="text-grey-darken-4">{{ $t("home.title2") }}</h2>
                <h2 class="text-grey-darken-4 text-subtitle-1">
                  {{ $t("home.subtitle") }}
                </h2>
              </div>

              <VBtn
                class="btn-icon font-weight-bold my-4 rounded-lg bg-primary text-white text-capitalize"
                size="x-large"
                @click="scroll('connect')"
              >
                {{ $t("main.connectus") }}
                <VIcon end size="large">{{
                  rtl ? "mdi-chevron-left-circle" : "mdi-chevron-right-circle"
                }}</VIcon>
              </VBtn>
            </VCol>
            <VCol
              align-self="center"
              md="5"
              offset-md="2"
              cols="12"
              class="hidden-sm-and-down"
            >
              <div :class="['container-img', rtl ? 'mr-auto' : 'ml-auto']">
                <img 
                  src="/img/fish5.jpg"
                  :class="['rounded-pill pa-2 w-100 elevation-4', smAndDown ? 'mobile-img' : 'desktop-img']"
                  height="400"
                />
              </div>
            </VCol>
          </VRow>
        </VContainer>
      </div>
    </VImg>
  </div>
</template>

<style lang="scss">
.home {
  &.helf-screen {
    height: 75vh;
  }
  .v-img__img {
    object-position: left !important;
  }

  .btn-icon {
    .v-btn__content {
      height: 100%;

      .v-icon {
        height: initial;
        width: inherit;
        border-radius: 3px;
      }
    }
  }

  .container-img {
    max-height: 400px;
    width: 280px;

    .desktop-img {
      border: thin grey solid;
    }

    .mobile-img {
      aspect-ratio: 1;
    }
  }

  .numbers {
    bottom: 20px;
  }
}
</style>
