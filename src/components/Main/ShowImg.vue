<script setup lang="ts">
  // Vuetify
  import { VDialog } from 'vuetify/components/VDialog'
  import { VOverlay } from 'vuetify/components/VOverlay'
  import { VContainer, VSpacer } from 'vuetify/components/VGrid'
  import { VAppBar } from 'vuetify/components/VAppBar'
  import { VImg } from 'vuetify/components/VImg'
  import { VBtn } from 'vuetify/components/VBtn'
  import { VIcon } from 'vuetify/components/VIcon'

  // Vue
  import { ref, watch } from "vue";

  const props = defineProps({
    imgUrl: {
      type: String,
      default: ''
    },
    imgName: {
      type: String,
      default: ''
    },
    dialog: {
      type: Boolean,
      defualt: false
    }
  })

  const emit = defineEmits(['closeDialog'])

  console.log(props)

  let Dialog = props.dialog
  watch(() => props.dialog, (val) => {
    Dialog = val
  })
  let ImgUrl = props.imgUrl
  watch(() => props.imgUrl, (val) => {
    console.log(val)
    ImgUrl = val
  })

  const closeDialog = () => {
    Dialog = false
    emit('closeDialog')
  }
</script>

<template>
  <div>
    <VDialog
      v-model="Dialog"
      fullscreen
      close-on-content-click
      class="rounded-0"
    >
      <VImg gradient="to top, rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)" height="64" class="px-4">
        <div class="shown absolute">
          <VAppBar color="black" class="px-0">
            <VContainer fluid class="d-flex align-center py-2">
              <VBtn class="white--text" icon @click="closeDialog">
                <VIcon>
                  mdi-close
                </VIcon>
              </VBtn>
              <VSpacer />
            </VContainer>
          </VAppBar>
        </div>
        <div class="h-100 mt-16 d-flex justify-center align-center">
          <VImg :src="ImgUrl" max-width="750" max-height="calc(100% - 128px)" cover class="rounded-xl elevation-4" />
        </div>
      </VImg>
      <!-- <VOverlay absolute> -->
        
        <!-- hgjhkgjh
      </VOverlay> -->
    </VDialog>
  </div>
</template>

<style lang="scss">
.shown {
  z-index: 6 !important;
  .v-toolbar {
    top: 0 !important;
    .v-toolbar__content {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

</style>
