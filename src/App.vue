<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VApp } from 'vuetify/components/VApp'
import { VMain } from 'vuetify/components/VMain'
import { VDivider } from 'vuetify/components/VDivider'
import { VFadeTransition } from 'vuetify/components/transitions'

// import { defineComponent } from "vue";

// main components
import MainHeader from "@/components/Core/MainHeader.vue";
import Header from "@/components/Core/Header.vue";
import Drawer from "@/components/Core/Drawer.vue";
import Footer from "@/components/Core/Footer.vue";

import { useLocale } from 'vuetify'
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { current } = useLocale()
const { locale } = useI18n()

const lang = localStorage.getItem('lang')

current.value = lang || 'ar'
locale.value = lang || 'ar'

// Feild
const drawer = ref(false)
let isStick = ref(false)

// Action
const checkScroll = () => {
  if (scrollY >= 175) {
    isStick.value = true
    console.log('work');
  } else {
    isStick.value = false
  }
}
window.addEventListener('scroll', checkScroll)
</script>

<template>
  <VApp>
    <MainHeader :drawer="drawer" @drawer="drawer = $event" />
    <VDivider />
    <Header :isStick="isStick" class="hidden-md-and-down" />
    <Drawer :drawer="drawer" @drawer="drawer = $event" />

    <VMain id="main" class="bg-mainBackground pt-0">
      <VFadeTransition mode="out-in">
        <RouterView />
      </VFadeTransition>
    </VMain>
    <Footer />
  </VApp>
</template>

<style scoped>
.background-color {
  background-color: #F5F7FF;
}
</style>
