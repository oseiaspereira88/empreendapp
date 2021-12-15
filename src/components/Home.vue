<template>
  <v-container style="max-width: 100vw; padding: 0 !important; background-color: white;">
    <div style="background-image: linear-gradient(to bottom right, rgb(234, 228, 255), rgb(200, 203, 255)); padding-left: 10vw; padding-right: 10vw; 
      border-bottom-left-radius: 45%;
      border-bottom-right-radius: 45%">
      <v-row class="text-center">
        <v-col cols="12" style="height: 25vh"></v-col>
        <v-col cols="8">
          <div style="padding-right: 180px;">
            <h1 style="font-size: 70px; text-align: left;" class="font-weight-bold mb-3">
              Pensando em tirar suas ideias do papel?
            </h1>
            <p style="font-size: 38px; text-align: left;">
              Oferecemos soluções completas, da criação ao lançamento na PlayStore ou AppStore
            </p>
          </div>
        </v-col>
        <v-col cols="4">
          <v-img  
              :src="require('../assets/image_device_exemplo.png')"
              class="my-3"
              contain
              height="400"
          />
        </v-col>
        <v-col cols="12" style="height: 30vh"></v-col>
      </v-row>
  </div>
  </v-container>
</template>

<script>

export default {
  name: 'Home',

  data: () => ({
    //
  }),
}
</script>
