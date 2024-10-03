<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VCard, VCardText, VCardSubtitle, VCardTitle } from 'vuetify/components/VCard'
  import { VImg } from 'vuetify/components/VImg'
  import { VIcon } from 'vuetify/components/VIcon'
  import { useDisplay } from "vuetify";

  // Vue
  import { ref } from "vue"
  import { useI18n } from "vue-i18n";

  const { t } = useI18n()

  const { md } = useDisplay()

  const objectives = ref([
    {
      img: '/img/objectives/tank.svg',
      title: t('objectives.title.objective1'),
      desc: t('objectives.desc.objective1')
    },
    {
      img: '/img/objectives/fish.svg',
      title: t('objectives.title.objective2'),
      desc: t('objectives.desc.objective2')
    },
    {
      img: '/img/objectives/space.svg',
      title: t('objectives.title.objective3'),
      desc: t('objectives.desc.objective3')
    },
    {
      img: '/img/objectives/arrow.svg',
      title: t('objectives.title.objective4'),
      desc: t('objectives.desc.objective4')
    },
    {
      img: '/img/objectives/space_1.svg',
      title: t('objectives.title.objective5'),
      desc: t('objectives.desc.objective5')
    },
    {
      img: '/img/objectives/plante.svg',
      title: t('objectives.title.objective6'),
      desc: t('objectives.desc.objective6')
    },
    {
      img: '/img/objectives/headphone.svg',
      title: t('objectives.title.objective7'),
      desc: t('objectives.desc.objective7')
    }
  ])
</script>

<template>
  <div class="h-100 pb-5">
    <VContainer class="pt-5">
      <div>
        <VRow class="mt-3 evenly">
          <VCol v-for="(objective, i) in objectives" :key="i" lg="3" md="4" sm="6" cols="12" class="objectives">
            <VCard class="card-services pb-8" :min-height="md ? '370' : '330'" color="white" elevation="3">
              <VRow class="ma-0">
                <VCol cols="4">
                  <VImg gradient="to top right, #0093E9, #80D0C7" :aspect-ratio="1" cover class="rounded-lg">
                    <div class="vector">
                      <img :src="objective.img">
                    </div>
                  </VImg>
                </VCol>
              </VRow>
              <!-- <VCardTitle class="text-xs-h6 text-md-h5">Lorem, ipsum dolor.</VCardTitle> -->
              <VCardTitle class="text-wrap title">
                {{ objective.title }}
              </VCardTitle>
              <VCardSubtitle class="text-wrap text-subtitle-1">
                {{ objective.desc }}
              </VCardSubtitle>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss">
.card-services {
  min-height: 267px;

  .vector {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;

    img {
      height: min-content;
    }
  }
  .card-services-icon {
    padding: 38px;
    color: white;
  }
  .text-subtitle-1 {
    line-height: 1.5;
  }
}
</style>
