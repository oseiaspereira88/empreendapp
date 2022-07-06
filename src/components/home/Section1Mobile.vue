<template>
  <v-container
      style="max-width: 100vw; padding: 0 !important; background: linear-gradient(313deg, rgb(62,21,245) 25%, rgb(10,11,44) 100%);">

    <div class="text-center pt-6" style="padding-left: 10vw; padding-right: 10vw;">
      <lottie-animation id="animation1"
                        class="mt-10"
                        ref="anim"
                        :animationData="require('@/assets/anim/programming-computer.json')"
                        :loop="true"
                        :autoPlay="true"
                        :speed="10"/>
      <h1 class="white--text" style="font-size: 32px; text-align: left;">
        Nossa Software House
      </h1>
      <p class="white--text mb-8" style="font-size: 18px; text-align: justify;">
        Pode usar toda a criatividade do mundo, só para tirar sua ideia do papel
      </p>
      <div style="width: 100%;">
        <v-btn dark class="pt-1" rounded color="rgb(22,8,49)" style="width: 100%;">Solicite Orçamento</v-btn>
      </div>
      <div class="py-16"><br><br></div>
    </div>
  </v-container>
</template>

<script>

import LottieAnimation from 'lottie-web-vue'

export default {
  name: 'Section1Mobile',
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
  }
}
</script>
