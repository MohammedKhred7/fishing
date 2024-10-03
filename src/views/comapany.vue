<script setup lang="ts">
  // Components
  import Who from "../components/Sections/Who.vue";
  import Why from "../components/Sections/Why.vue";

  // Vue
  import { onMounted } from "vue";
  import { useI18n } from "vue-i18n";

  // Components
  import MainTitle from "@/components/Main/Title.vue";
  const { t } = useI18n()

  function para() {
    var paras = document.querySelectorAll(".para");

    for (var i = 0; i < paras.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = paras[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        paras[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   para()
  // })
  window.addEventListener('scroll', para)
</script>

<template>
  <div class="pb-16 bg-white">
    <MainTitle :title="t('infoNav.company')" />
    <Who id="who-us" class="info pa-0" />
    <Why id="why-us" class="info pa-0" />
  </div>
</template>

<style lang="scss">
.info {
  .para.active{
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  &:nth-child(odd) .v-row {
    flex-direction: reverse !important;
    .para{
      position: relative;
      transform: translateX(-150px);
      opacity: 0;
      transition: 1s all ease;
    }
  }
  &:nth-child(even) .v-row {
    flex-direction: row-reverse !important;
    .para{
      position: relative;
      transform: translateX(150px);
      opacity: 0;
      transition: 1s all ease;
    }
  }
}
</style>