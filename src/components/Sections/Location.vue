<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VCard, VCardText } from 'vuetify/components/VCard'
  import { VImg } from 'vuetify/components/VImg'
  import { VList, VListItem, VListItemTitle } from 'vuetify/components/VList'
  import { VAvatar } from 'vuetify/components/VAvatar'
  import { VIcon } from 'vuetify/components/VIcon'

  // data
  import infos from "@/utils/info.json";
</script>

<template>
  <div class="h-100 bg-white">
    <VContainer>
      <VCard flat rounded="0">
        <VCardText>
          <div class="sub-title">{{ $t('main.location') }}</div>
          <VRow>
            <VCol md="6" cols="12">
              <a href="https://maps.google.com/maps?q=15.8268763%2C52.1896095&z=17&hl=ar" target="_blank" rel="noopener noreferrer">
                <VImg src="/img/map.png" height="250" max-height="500" cover class="rounded-lg elevation-4" />
              </a>
            </VCol>
            <VCol md="4" cols="12">
              <VList lines="one" class="bg-transparent h-100 d-flex flex-column justify-space-around">
                <VListItem v-for="(info, i) in infos.email" :key="i" :href="info.link" :aria-disabled="!(info.link.length > 0)" class="py-3">
                  <VListItemTitle
                    v-text="info.value"
                    class="font-weight-bold text-grey-darken-4"
                  />
                  <template v-slot:prepend>
                    <VAvatar class="list-icon rounded-lg">
                      <VIcon color="white">{{ info.icon }}</VIcon>
                    </VAvatar>
                  </template>
                </VListItem>
              </VList>
            </VCol>
          </VRow>
          <VRow>
            <VCol md="4" cols="12">
              <VList lines="one" class="bg-transparent h-100 d-flex flex-column justify-space-around">
                <VListItem v-for="(info, i) in infos.phone" :key="i" :href="info.link" :aria-disabled="!(info.link.length > 0)" class="py-3">
                  <VListItemTitle
                    v-text="info.value"
                    class="font-weight-bold text-grey-darken-4"
                  />
                  <template v-slot:prepend>
                    <VAvatar class="list-icon rounded-lg">
                      <VIcon color="white">{{ info.icon }}</VIcon>
                    </VAvatar>
                  </template>
                </VListItem>
              </VList>
            </VCol>
            <VCol md="4" cols="12">
              <VList lines="one" class="bg-transparent h-100 d-flex flex-column justify-space-around">
                <VListItem v-for="(info, i) in infos.telphone" :key="i" :href="info.link" :aria-disabled="!(info.link.length > 0)" class="py-3">
                  <VListItemTitle
                    v-text="info.value"
                    class="font-weight-bold text-grey-darken-4"
                  />
                  <template v-slot:prepend>
                    <VAvatar class="list-icon rounded-lg">
                      <VIcon color="white">{{ info.icon }}</VIcon>
                    </VAvatar>
                  </template>
                </VListItem>
              </VList>
            </VCol>
            <VCol md="4" cols="12">
              <VList lines="one" class="bg-transparent h-100 d-flex flex-column justify-space-around">
                <VListItem v-for="(info, i) in infos.location" :key="i" :href="info.link" :aria-disabled="!(info.link.length > 0)" class="py-3">
                  <VListItemTitle
                    v-text="info.value"
                    class="font-weight-bold text-grey-darken-4"
                  />
                  <template v-slot:prepend>
                    <VAvatar class="list-icon rounded-lg">
                      <VIcon color="white">{{ info.icon }}</VIcon>
                    </VAvatar>
                  </template>
                </VListItem>
              </VList>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VContainer>
  </div>
</template>

<style>
.list-icon {
  background-image: linear-gradient(to right top, rgb(0, 147, 233), rgb(128, 208, 199)) !important;
  border: thin white solid;
}

.text-shadow {
  text-shadow: 1px 1px 3px black;
}
</style>

