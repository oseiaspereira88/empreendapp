<template>
  <v-container
      style="max-width: 100vw; height: 94vh; padding: 0 !important; background: linear-gradient(313deg, rgb(62,21,245) 25%, rgb(10,11,44) 100%);">
    <div class="px-4 pt-8 mt-3">
      <div class="bg-right-container">
        <lottie-animation id="animation1"
                          ref="anim"
                          :animationData="require('@/assets/anim/programming-computer.json')"
                          :loop="true"
                          :autoPlay="true"
                          :speed="10"/>
      </div>
      <v-row class="text-center" style="padding-left: 10vw; padding-right: 10vw;">
        <v-col cols="12" style="height: 24vh"></v-col>
        <v-col cols="8">
          <div style="padding-right: 180px;">
            <v-row style="position:relative;">
              <div style="width: 3vw; position:absolute; top: -1.8vw; left: -2.6vw">
                <div style="background: #957cfd; border-radius: 100%; padding: 3vw;"><strong></strong></div>
              </div>
              <v-col style=" z-index: 1;">
                <h1 class="white--text" style="font-size: 42px; text-align: left;">
                  Nossa Software House
                </h1>
                <p class="white--text mb-8" style="font-size: 18px; text-align: justify;">
                  Pode usar toda a criatividade do mundo, só para tirar sua ideia do papel
                </p>
                <div style="width: 78%;">
                  <v-btn @click="abrirWhatsApp" dark class="pt-1" rounded color="rgb(22,8,49)" style="width: 100%;">
                    Solicite Orçamento
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="4">
        </v-col>
        <v-col cols="12" style="height: 22vh"></v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

import LottieAnimation from 'lottie-web-vue'

export default {
  name: 'Section1',
  components: {
    LottieAnimation
  },
  mounted() {
    this.$refs.anim.play()
  },
  methods: {
    loopComplete() {
      console.log('loopComplete')
    },
    complete() {
      console.log('complete')
    },
    enterFrame() {
      console.log('enterFrame')
    },
    openWhatsApp() {
      const num = "INSIRA_AQUI_SEU_NUMERO_DE_TELEFONE";
      const msg = "Olá! Estou entrando em contato a partir do seu site e quero fazer um orçamento.";
      const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }
  }
}
</script>
