<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VDivider } from 'vuetify/components/VDivider'
  import { VCard } from 'vuetify/components/VCard'
  import { VImg } from 'vuetify/components/VImg'

  // Vue
  import { ref, computed, onMounted } from "vue";
  import { useI18n } from "vue-i18n";
  // import VuePlayerVideo from "vue3-player-video";

  // Components
  import MainTitle from "@/components/Main/Title.vue";
  import ShowImg from "../components/Main/ShowImg.vue";

  const { t } = useI18n()

  const locations = computed(() => [
    '/img/facilities/1.PNG',
    '/img/facilities/2.JPG',
    '/img/facilities/3.JPG',
    '/img/facilities/4.JPG',
    '/img/facilities/5.JPG',
    '/img/facilities/6.JPG',
    '/img/facilities/7.JPG',
    '/img/facilities/8.JPG',
    '/img/facilities/9.JPG',
    '/img/facilities/10.jpg',
    '/img/facilities/11.jpg',
    '/img/facilities/12.jpg',
    '/img/facilities/13.jpg',
    '/img/facilities/14.jpg',
    '/img/facilities/15.jpg',
    '/img/facilities/16.jpg',
    '/img/facilities/17.jpg',
    '/img/facilities/18.jpg',
    '/img/facilities/19.jpg',
    '/img/facilities/20.jpg',
    '/img/facilities/21.jpg',
    '/img/facilities/22.jpg',
    '/img/facilities/23.jpg',
    '/img/facilities/24.jpg',
    '/img/facilities/25.jpg',
    '/img/facilities/26.jpg',
    '/img/facilities/27.jpg',
    '/img/facilities/28.jpg',
    '/img/facilities/29.jpg'
  ])

  const videos = computed(() => [
    '/vedio/facilities/1.mp4',
    '/vedio/facilities/2.mp4',
    '/vedio/facilities/3.mp4'
  ])
  
  function facilities() {
    var facilities = document.querySelectorAll(".facilities");

    for (var i = 0; i < facilities.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = facilities[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        facilities[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   para()
  // })
  window.addEventListener('scroll', facilities)

  const dialog = ref(false)
  const imgUrl = ref('')

  const selectImg = (img: string) => {
    dialog.value = true
    imgUrl.value = img
  }
</script>

<template>
  <div>
    <MainTitle :title="t('nav.facilities')" />
    <VContainer id="facilities" class="h-100 py-16">
      <ShowImg :dialog="dialog" :imgUrl="imgUrl" @closeDialog="dialog = false" />
      <h2 class="text-center">
        {{ $t('main.photo') }}
      </h2>
      <VDivider class="mb-8" />
      <VRow align-content="start" class="h-100">
        <VCol v-for="(img, i) in locations" :key="i
        " sm="6" cols="12" class="facilities">
          <VCard min-height="300" max-height="300" color="#000819" rounded="xl" @click="selectImg(img)">
            <VImg min-height="300" max-height="300" cover :src="img" />
          </VCard>
        </VCol>
      </VRow>
      <h2 class="text-center mt-12">
        {{ $t('main.video') }}
      </h2>
      <VDivider class="mb-12" />
      <VRow align-content="start" class="h-100">
        <VCol v-for="(vedio, i) in videos" :key="i
        " sm="6" cols="12" class="facilities">
          <VCard min-height="300" max-height="300" color="#000819" rounded="xl">
            <!-- <VuePlayerVideo :src="vedio" /> -->
            <video controls height="300" class="w-100">
              <source :src="vedio" type="video/mp4">
            </video>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<style lang="scss">
.text-shadow {
  text-shadow: 1px 2px 1px black;
}
.card-title {
  display: inline-block;
  border-bottom: 2px solid;
  padding: 0 8px;
}

.facilities {
  &.active {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }

  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}
</style>
