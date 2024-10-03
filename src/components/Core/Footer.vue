<script setup lang="ts">
// vuetify
import { VContainer, VRow, VCol } from "vuetify/components/VGrid";
import { VCard } from "vuetify/components/VCard";
import { VList, VListItem } from "vuetify/components/VList";
import { VBtn } from "vuetify/components/VBtn";
import { VIcon } from "vuetify/components/VIcon";
import { VImg } from "vuetify/components/VImg";
import { VDivider } from "vuetify/components/VDivider";
import { VFooter } from "vuetify/components/VFooter";
import { useDisplay } from "vuetify";

// vue
import { ref, reactive, computed } from "vue";

// data
import media from "@/utils/media.json";

const display = reactive(useDisplay());

const offices = ref([
  {
    title: "المكلا",
    tel: "+967733847543",
    email: "test@test.com",
  },
  {
    title: "المهرة",
    tel: "+967733847543",
    email: "test@test.com",
  },
  {
    title: "سلطنة عمان",
    tel: "+967733847543",
    email: "test@test.com",
  },
]);
</script>

<template>
  <VFooter color="#000819" class="d-block pt-0 px-0">
    <VDivider class="bg-grey darken-2" />
    <VContainer>
      <VCard color="#000819" rounded="xl">
        <VCardText class="text-center pb-12 pt-0 text-white">
          <img src="/img/logo3.png" class="mx-auto mt-4 rounded-lg w-100" height="250" style="max-width: 400px;" />
          <!-- <h1 :class="['text-grey-darken-3', footerTitle]">Name of Company</h1> -->
          <!-- <h2 class="text-h6 my-6">
            {{ $t("footer.title") }}
            <br />
            {{ $t("footer.subtitle") }}
          </h2> -->
          <p class="footer-para text-subtitle-1 mx-auto mt-4 text-shadow">
            {{ $t("footer.para") }}
          </p>
          <!-- <VRow class="mt-2">
            <VCol v-for="(office, i) in offices" :key="i" md="4">
              <VList lines="three" bg-color="transparent">
                <VListItem color="text-white" class="text-center">
                  <VListItemTitle class="text-h6">
                    {{ office.title }}
                  </VListItemTitle>
                  <VListItemSubtitle class="my-2 text-subtitle-1 text-high-opacity">
                    <a :href="`mailto:${ office.email }`" class="text-decoration-none text-white">
                      {{ office.email }}
                    </a>
                  </VListItemSubtitle>
                  <VListItemSubtitle class="text-subtitle-1 text-high-opacity">
                    <a :href="`tel:+${ office.tel }`" class="text-decoration-none text-white">
                      {{ office.tel }}
                    </a>
                  </VListItemSubtitle>
                </VListItem>
              </VList>
            </VCol>
          </VRow> -->
          <!-- <div class="mt-6">
            <VBtn
              v-for="(item, i) in media"
              :key="i"
              class="mx-4 bg-blue-grey-darken-3 text-subtitle-1 rounded"
              icon
              flat
              :to="item.webLink"
            >
              <VIcon size="x-large">
                {{ item.icon }}
              </VIcon>
            </VBtn>
          </div> -->
        </VCardText>
      </VCard>
      <div class="pb-1 pt-3 font-weight-bold text-center text-white">
        {{ $t("footer.note") + " " + new Date().getFullYear() }}
        <br />
        <span>
          {{ $t("footer.createdByTitle") }}
        </span>
        <a
          href="https://novelsoft.com.co"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary text-decoration-none"
        >
          {{ " " + $t("footer.createdByName") }}
        </a>
      </div>
    </VContainer>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer-para {
  max-width: 500px;
}
.text-shadow {
  text-shadow: 0px 0px 1px black;
}

.text-high-opacity {
  opacity: 1;
}
</style>
