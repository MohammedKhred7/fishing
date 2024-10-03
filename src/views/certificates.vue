<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VCard } from 'vuetify/components/VCard'
  import { VImg } from 'vuetify/components/VImg'

  // Vue
  import { ref, computed, onMounted } from "vue";
  import { useI18n } from "vue-i18n";

  // Components
  import MainTitle from "@/components/Main/Title.vue";
  import ShowImg from "../components/Main/ShowImg.vue";

  const { t } = useI18n()

  const certificatesImg = computed(() => [
    '/img/certificates/1.jpg',
    '/img/certificates/2.jpg',
    '/img/certificates/3.jpg',
    '/img/certificates/4.jpg',
    '/img/certificates/5.jpg',
    '/img/certificates/6.jpg',
    '/img/certificates/7.jpg',
    '/img/certificates/8.jpg',
    '/img/certificates/9.jpg',
    '/img/certificates/10.jpg'
  ])
  
  function certificates() {
    var certificates = document.querySelectorAll(".certificates");

    for (var i = 0; i < certificates.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = certificates[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        certificates[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   para()
  // })
  window.addEventListener('scroll', certificates)

  const dialog = ref(false)
  const imgUrl = ref('')

  const selectImg = (img: string) => {
    dialog.value = true
    imgUrl.value = img
  }
</script>

<template>
  <div>
    <MainTitle :title="t('infoNav.certificates')" />
    <VContainer id="certificates" class="h-100 py-16">
      <ShowImg :dialog="dialog" :imgUrl="imgUrl" @closeDialog="dialog = false" />
      <VRow align-content="start" class="h-100">
        <VCol v-for="(img, i) in certificatesImg" :key="i
        " sm="3" cols="12" class="certificates">
          <VCard min-height="200" max-height="200" color="#000819" rounded="xl" @click="selectImg(img)">
            <VImg min-height="200" max-height="200" :src="img" class="fill-img" />
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

.certificates {
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
