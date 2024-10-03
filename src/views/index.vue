<script setup lang="ts">
  // Components
  import Home from "../components/Sections/Home.vue";
  
  import Slider from "../components/Sections/Slider.vue";
  import FavProducts from "@/components/Sections/FavProducts.vue";
  import Location from "../components/Sections/Location.vue";
  import Connect from "../components/Sections/Connect.vue";

  function para() {
    var paras = document.querySelectorAll(".para");

    for (var i = 0; i < paras.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = paras[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        paras[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", para);
</script>

<template>
  <div>
    <!-- <Home id="home" /> -->
    <Slider id="slider" />
    <FavProducts id="favProducts" />
    <Location id="location" />
    <Connect id="connect" />
  </div>
</template>

<style lang="scss">
// @keyframes wipe-enter {
// 	0% {
// 		transform: scale(0, .025);
// 	}
// 	50% {
// 		transform: scale(1, .025);
// 	}
// }

// @media (prefers-reduced-motion: no-preference) {
//   .para-animation {
//     animation: wipe-enter 1s 1;
//   }
// }

.info {
  padding: 32px 0;
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