<script setup lang="ts">
// vuetify
import { VRow, VCol } from 'vuetify/components/VGrid'
import { VAppBarNavIcon } from 'vuetify/components/VAppBar'
import { VBtn } from 'vuetify/components/VBtn'
import { VIcon } from 'vuetify/components/VIcon'
import { VImg } from 'vuetify/components/VImg'
import { VMenu } from 'vuetify/components/VMenu'
import { VList, VListItem, VListItemTitle, VListGroup } from 'vuetify/components/VList'
import { useLocale, useDisplay } from 'vuetify'

// vue
import { ref, watch } from "vue";

// vue-i18n
import { useI18n } from "vue-i18n";

// Init
const { current } = useLocale()
const { t, locale } = useI18n()
const { lgAndUp } = useDisplay()
const props = defineProps({
  drawer: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['drawer'])

// Fileds
let drawer = ref(props.drawer)
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
watch(() => props.drawer, (val) => {
  drawer.value = val
})

function changeLang(lang: string) {
  current.value = lang
  locale.value = lang
  localStorage.setItem('lang', lang)
}

function openDrawer() {
  drawer.value = !drawer.value
  emit('drawer', drawer.value)
}

</script>

<template>
  <div>
    <VRow class="ma-0">
      <VCol lg="6" cols="3" class="bg-primaryBackground">
        <div v-if="lgAndUp" class="h-100 d-flex align-center">
          <VMenu>
            <template v-slot:activator="{ props }">
              <VBtn class="bg-white translate text-grey-darken-3 text-capitalize font-weight-bold" v-bind="props">
                <VIcon start class="bg-primary pa-1">
                  mdi-translate
                </VIcon>
                <span>
                  {{ $t('main.lang') }}
                </span>
              </VBtn>
            </template>
            <VList>
              <VListItem
                v-for="(lang, index) in langs"
                :key="index"
                @click="changeLang(lang.code)"
              >
                <VListItemTitle>{{ lang.text }}</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
          <VListItem>
            <VListItemTitle>
              {{ $t('nav.mainOffice') }}
            </VListItemTitle>
            <VListItemSubtitle>
              {{ $t('nav.location') }}
            </VListItemSubtitle>
            <template v-slot:prepend>
              <v-avatar>
                <vIcon color="white">mdi-map-marker</vIcon>
              </v-avatar>
            </template>
          </VListItem>
          <VListItem>
            <VListItemTitle>
              {{ $t('nav.callUs') }}
            </VListItemTitle>
            <VListItemSubtitle>
              +967771188277
            </VListItemSubtitle>
            <template v-slot:prepend>
              <v-avatar>
                <vIcon color="white">mdi-phone</vIcon>
              </v-avatar>
            </template>
          </VListItem>
        </div>
        <div v-else class="h-100 d-flex align-center justify-center">
          <!-- <VAppBarNavIcon
            class="bg-primaryBackground text-white"
            
            @click="openDrawer"
          /> -->
          <VBtn icon size="62" color="primaryBackground text-white" @click="openDrawer">
            <VIcon size="48">
              mdi-menu
            </VIcon>
          </VBtn>
        </div>
      </VCol>
      <VCol lg="6" cols="9">
        <VImg src="/img/logo3.png" height="150" width="100%" />
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
</style>
