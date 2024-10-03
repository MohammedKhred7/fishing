<script setup lang="ts">
  // Components
  import Objectives from "../components/Sections/Objectives.vue";
  import { VScrollYTransition } from "vuetify/components/transitions";

  // Vue
  import { onMounted } from "vue";
  import { useI18n } from "vue-i18n";

  // Components
  import MainTitle from "@/components/Main/Title.vue";
  const { t } = useI18n()

  function objectives() {
    var objectives = document.querySelectorAll(".objectives");

    for (var i = 0; i < objectives.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = objectives[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        objectives[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   para()
  // })
  window.addEventListener('scroll', objectives)
</script>

<template>
  <div>
    <MainTitle :title="t('main.objective')" />
    <VScrollYTransition>
      <Objectives id="objectives" />
    </VScrollYTransition>
  </div>
</template>

<style lang="scss">
.objectives {
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
