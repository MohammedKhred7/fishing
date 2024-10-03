<script setup lang="ts">
  // Vuetify
  import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
  import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
  import { VDivider } from 'vuetify/components/VDivider'
  import { VImg } from 'vuetify/components/VImg'
  import { VAvatar } from 'vuetify/components/VAvatar'
  import { VListItem, VListItemTitle, VListItemSubtitle } from 'vuetify/components/VList'
  import { useDisplay } from 'vuetify'

  // Vue
  import { ref, computed } from "vue";
  import { useI18n } from "vue-i18n";

  // Components
  import MainTitle from "@/components/Main/Title.vue";
  import ShowImg from "../components/Main/ShowImg.vue";

  const { t } = useI18n()
  const { lgAndUp } = useDisplay()

  const staffs = computed(() => [
    {
      name: t('administrativeStaff.staff1.name'),
      desc: t('administrativeStaff.staff1.desc'),
      job: t('administrativeStaff.staff1.job'),
      img: '/img/staff/staff1.PNG'
    },
    {
      name: t('administrativeStaff.staff2.name'),
      desc: t('administrativeStaff.staff2.desc'),
      job: t('administrativeStaff.staff2.job'),
      img: '/img/staff/staff2.PNG'
    },
    {
      name: t('administrativeStaff.staff3.name'),
      desc: t('administrativeStaff.staff3.desc'),
      job: t('administrativeStaff.staff3.job'),
      img: '/img/staff/staff3.jpg'
    }
  ])

  const staffs2 = computed(() => [
    '/img/staff/staff4.JPG',
    '/img/staff/staff5.JPG',
    '/img/staff/staff6.jpg',
    '/img/staff/staff7.jpg'
  ])
  
  function staff() {
    var staff = document.querySelectorAll(".staff");

    for (var i = 0; i < staff.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = staff[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        staff[i].classList.add("active");
      }
    }
  }

  // onMounted(() => {
  //   staff()
  // })
  window.addEventListener('scroll', staff)

  const dialog = ref(false)
  const imgUrl = ref('')

  const selectImg = (img: string) => {
    dialog.value = true
    imgUrl.value = img
  }
</script>

<template>
  <div>
    <MainTitle :title="t('infoNav.administrativeStaff')" />
    <VContainer>
      <VRow id="staff" align-content="space-around" justify="center" class="h-100 flex-wrap-reverse">
        <VCol v-for="(staff, i) in staffs" :key="i" md="6" cols="12" class="staff">
          <VCard color="#000819" rounded="xl">
            <VCardText>
              <div>
                <VListItem>
                  <template v-slot:prepend>
                    <VAvatar size="120" color="grey-lighten-1">
                      <VImg cover :src="staff.img" />
                    </VAvatar>
                  </template>

                  <VListItemTitle :class="['text-primary', lgAndUp ? 'text-h6' : 'text-subtitle-1']">{{ staff.name }}</VListItemTitle>
                  <VListItemSubtitle :class="['text-white high-opacity', lgAndUp ? 'text-subtitle-1' : 'text-subtitle-2']">{{ staff.job }}</VListItemSubtitle>
                </VListItem>
              </div>
              <div :class="['text-white mt-4', lgAndUp ? 'text-body-1' : 'text-body-2']">
                {{ staff.desc }}
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
      <VDivider class="my-12" />
      <ShowImg :dialog="dialog" :imgUrl="imgUrl" @closeDialog="dialog = false" />
      <VRow align-content="start" class="h-100">
        <VCol v-for="(img, i) in staffs2" :key="i
        " sm="6" cols="12" class="staff">
          <VCard min-height="300" max-height="300" color="#000819" rounded="xl" @click="selectImg(img)">
            <VImg min-height="300" max-height="300" cover :src="img" />
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

.staff {
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
