<script setup lang="ts">
// Vuetify
import { VContainer, VRow, VCol } from "vuetify/components/VGrid";
import { VImg } from "vuetify/components/VImg";
import { VCard } from "vuetify/components/VCard";
import { VForm } from "vuetify/components/VForm";
import { VTextField } from "vuetify/components/VTextField";
import { VTextarea } from "vuetify/components/VTextarea";
import { VBtn } from "vuetify/components/VBtn";
import { VProgressCircular } from "vuetify/components/VProgressCircular";
import { useLocale } from "vuetify";

// packages
import emailjs from "@emailjs/browser";
import { useI18n } from "vue-i18n";

// vue
import { ref, computed } from "vue";

const { t } = useI18n();
const { isRtl } = useLocale();

let nameRules = computed(() => {
  return [
    (v: string) => !!v || t("connect.validation.required"),
    (v: string) => (v && v.length > 3) || t("connect.validation.min"),
  ];
});

let emailRules = computed(() => {
  return [
    (v: string) => !!v || t("connect.validation.required"),
    (v: string) =>
      !v ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      t("connect.validation.emailValid"),
    (v: string) => (v && v.length > 3) || t("connect.validation.min"),
  ];
});

let messageRules = computed(() => {
  return [
    (v: string) => !!v || t("connect.validation.required"),
    (v: string) => (v && v.length <= 150) || t("connect.validation.max"),
  ];
});

const form = ref(null);

const loading = ref(false);
const note = ref("");
const isError = ref(false);

const from_name = ref("");
const email = ref("");
const message = ref("");

async function sendEmail(event: any) {
  console.log(event);
  console.log(event.target);

  const { valid } = await form.value!.validate();
  if (valid) {
    try {
      loading.value = true;
      const res = await emailjs.send(
        import.meta.env.VITE_SERVERID!,
        import.meta.env.VITE_TEMPLATEId!,
        {
          from_name: from_name.value,
          from_email: email.value,
          message: message.value,
        },
        import.meta.env.VITE_PUBLICKEY!
      );
      console.log(res);
      if (res.status == 200) {
        from_name.value = "";
        email.value = "";
        message.value = "";
        isError.value = false;
        note.value = t("note.sendMsg");
        setTimeout(() => {
          form.value!.resetValidation();
        }, 300);
      }
      loading.value = false;
    } catch (error) {
      console.log(error);
      loading.value = false;
      isError.value = true;
      note.value = t("note.defualtErrMsg");
    }
    setTimeout(() => {
      isError.value = false;
      note.value = "";
    }, 3000);
  }
}
</script>

<template>
  <VCard class="connect" flat rounded="0">
    <VImg
      src="/img/sea.jpg"
      height="100%"
      max-height="500"
      cover
      class="align-end img-sea"
    >
      <div class="desc">
        <VContainer>
          <VRow no-gutters class="text-white text-shadow pt-16">
            <VCol md="4" cols="12">
              <VContainer fluid>
                <VRow>
                  <VCol cols="5">
                    <VImg
                      src="/img/CNF.jpg"
                      cover
                      class="rounded-lg fill-img logo"
                      height="100"
                      width="100"
                    />
                  </VCol>
                </VRow>
              </VContainer>
              <div class="pa-4">
                <p class="font-weight-bold">
                  {{ $t("connect.sideInfo") }}
                </p>
              </div>
            </VCol>
            <VCol md="8" cols="12">
              <VContainer fluid>
                <div class="sub-title text-white">
                  {{ $t("connect.title") }}
                </div>
                <p>{{ $t("connect.mainInfo") }}</p>

                <VForm ref="form">
                  <VRow class="mt-6">
                    <VCol md="6" cols="12">
                      <label>{{ t("connect.name") }}</label>
                      <!-- <input v-model="from_name" name="from_name" placeholder="your name" type="text" class=""> -->
                      <VTextField
                        v-model="from_name"
                        name="from_name"
                        :rules="nameRules"
                        :placeholder="t('connect.placeholder.name')"
                        variant="outlined"
                        density="compact"
                        class="mt-1"
                      />
                    </VCol>
                    <VCol md="6" cols="12">
                      <label>{{ t("connect.email") }}</label>
                      <VTextField
                        v-model="email"
                        name="from_email"
                        :rules="emailRules"
                        :placeholder="t('connect.placeholder.email')"
                        variant="outlined"
                        density="compact"
                        class="mt-1"
                      />
                      <!-- <VTextField v-model="email" type="hidden" name="reply_email" class="d-none" /> -->
                    </VCol>
                  </VRow>

                  <label>{{ t("connect.message") }}</label>
                  <VTextarea
                    v-model="message"
                    name="message"
                    :rules="messageRules"
                    :placeholder="t('connect.placeholder.message')"
                    variant="outlined"
                    density="compact"
                    class="mt-1"
                  />

                  <div>
                    <VBtn
                      class="bg-primary text-white text-capitalize rounded-lg"
                      :disabled="loading"
                      @click="sendEmail"
                    >
                      {{ t("connect.btn") }}
                      <VProgressCircular
                        v-if="loading"
                        indeterminate
                        color="white"
                      />
                    </VBtn>
                    <div :class="isError ? 'text-error' : 'text-success'">
                      {{ note }}
                    </div>
                  </div>
                </VForm>
              </VContainer>
            </VCol>
          </VRow>
        </VContainer>
      </div>
    </VImg>
  </VCard>
</template>

<style lang="scss">
.connect {
  .desc {
    position: relative;
  }

  .desc::before {
    content: "";
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }

  .img-sea img:not(.img-sea .logo img) {
    filter: blur(4px);
  }

  .img-sea img::before {
    content: "";
    height: 100%;
    width: 100%;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }

  .text-shadow {
    text-shadow: 1px 1px 2px black;
  }
}
</style>
