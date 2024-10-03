<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from "vuetify/components/VGrid";
  import { VCard, VCardTitle, VCardText } from "vuetify/components/VCard";
  import { VList, VListItem } from "vuetify/components/VList";
  import { VDivider } from "vuetify/components/VDivider";

  // Vue
  import { ref } from "vue";
  import { useI18n } from "vue-i18n"

  // Components
  import MainTitle from "@/components/Main/Title.vue";

  // Init
  const { t } = useI18n()

  // Fileds
  const qualityMng = ref([
    'تهتم إدارة الجودة بالمعايير العالمية للجودة ولدينا اهتمام كبير في استلام المنتجات البحرية من الصيادين والتجار المحليين والجمعيات ، والاصطياد بأعلى درجة من الحرص لاستلام الأسماك ذات الجودة العالية الطازجة التي تتناسب مع سياسة الشركة وسياسة إدارة الجودة .',
    'إدارة الجودة تتكون من 28 موظف صيني ،لديهم خبرة أكثر من 20 عام في استلام وتحضير المنتجات البحرية وإدارة الجودة والبيع بشروط البيع المعروفة عالمياً والتنسيق مع إدارة اللوجستيك لتسهيل الشحن والمعاملات والإجراءات لكافة عملائنا والبيع حسب طلبات العميل والاهتمام الكبير بالوقت ، وعدم هدره لِمَ له من ثأتير كبير على الأرباح وسرعة الأداء .'
  ])
</script>

<template>
  <div>
    <MainTitle :title="t('infoNav.quality')" />
    <VContainer class="mt-8">
      <VCard color="#000819" variant="outlined">
        <VCardTitle class="text-h6">{{ t('infoNav.quality') }}</VCardTitle>
        <VCardText class="text-subtitle-1">
          {{ t('quality.subtitle') }}
        </VCardText>
      </VCard>
      <VRow class="my-3">
        <VCol md="6" cols="12">
          <VCard color="#000819" variant="outlined">
            <VCardTitle class="text-h6">{{ t('quality.qualityMng.title') }}</VCardTitle>
            <VCardText class="text-subtitle-1">
              <VList bg-color="transparent">
                  <VListItem>
                    {{ t('quality.qualityMng.desc1') }}
                  </VListItem>
                  <br>
                  <VListItem>
                    {{ t('quality.qualityMng.desc2') }}
                  </VListItem>
              </VList>
            </VCardText>
          </VCard>
        </VCol>
        <VCol md="6" cols="12">
          <VCard color="#000819" variant="outlined">
            <VCardTitle class="text-h6">{{ t('quality.purchaseMng.title') }}</VCardTitle>
            <VCardText class="text-subtitle-1">
              <VList bg-color="transparent">
                  <VListItem>
                    {{ t('quality.purchaseMng.decs') }}
                  </VListItem>
              </VList>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>