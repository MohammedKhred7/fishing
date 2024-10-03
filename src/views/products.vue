<script setup lang="ts">
  // Vue
  import { useI18n } from "vue-i18n";

  // Components
  import Products from "../components/Sections/Products.vue";
  import MainTitle from "@/components/Main/Title.vue";

  const { t } = useI18n()
  function products() {
    var products = document.querySelectorAll(".products");

    for (var i = 0; i < products.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = products[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        products[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   para()
  // })
  window.addEventListener('scroll', products)
</script>

<template>
  <div>
    <MainTitle :title="t('main.products')" />
    <Products id="products" />
  </div>
</template>

<style lang="scss">
.products {
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
