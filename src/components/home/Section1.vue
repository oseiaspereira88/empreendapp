<template>
  <v-container style="max-width: 100vw; height: 94vh; padding: 0 !important;">
    <div class="px-4 pt-8 mt-3">
      <div style="box-shadow: 1px 1px 2px 2px rgba(162,156,255,0); border-radius: 18px; position: relative; background-image: linear-gradient(to bottom right, rgba(77,44,217,0.63),rgb(57,57,164));" >
        <div class="bg-right-container">
          <v-img class="bg" :src="require('../../assets/img3B.png')"></v-img>
        </div>
        <div class="bg-left-container">
          <v-img class="bg" :src="require('../../assets/img3A.png')"></v-img>
        </div>
        <v-row class="text-center" style="padding-left: 10vw; padding-right: 10vw;">
          <v-col cols="12" style="height: 21vh"></v-col>
          <v-col cols="8">
            <div style="padding-right: 180px;">
              <h1 class="white--text" style="font-size: 42px; text-align: left;">
                Nossa Software House
              </h1>
              <p class="mb-8 white--text" style="font-size: 18px; text-align: justify;">
                Pode usar toda a criatividade do mundo, só para tirar sua ideia do papel
              </p>
              <div style="text-align: left">
                <v-btn dark rounded color="#8F74FF">Solicite Orçamento</v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="4">
<!--            <v-img-->
<!--                :src="require('../assets/image_device_exemplo.png')"-->
<!--                class="my-3"-->
<!--                contain-->
<!--                height="200"-->
<!--            />-->
          </v-col>
          <v-col cols="12" style="height: 22vh"></v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'Section1',
}
</script>
