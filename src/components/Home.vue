<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" style="height: 100px"></v-col>
      <v-col cols="8">
        <h1 style="font-size: 70px" class="font-weight-bold mb-3">
          Pensando em tirar as ideias do papel?
        </h1>
      </v-col>
      <v-col cols="4">
        <v-img
            :src="require('../assets/image_device_exemplo.png')"
            class="my-3"
            contain
            height="400"
        />
      </v-col>
    </v-row>

      <transition name="slide-fade">
        <v-row class="text-center">
          <v-col cols="12" style="height: 140px"></v-col>
          <v-col cols="4">
            <v-img
                :src="require('../assets/image_device_exemplo.png')"
                class="my-3"
                contain
                height="400"
            />
          </v-col>
          <v-col cols="8">
            <h1 style="font-size: 70px" class="font-weight-bold mb-3">
              Pensando em tirar as ideias do papel?
            </h1>
          </v-col>
        </v-row>
      </transition>

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
