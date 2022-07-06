<template>
  <v-container class="section py-16">
    <div class="d-flex justify-center">
      <div class="flex-1 py-16">
        <div style="height:100%; width:auto; overflow: hidden">
          <v-img height="auto" width="300px" :src="require('../../assets/home/section1.png')"/>
        </div>
      </div>
      <div class="flex-2">
        <div>
          <h3>Você está cansado assim como eu? </h3>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">

.section {
  max-width: 100vw;
  padding: 0 !important;
}

</style>

<script>

export default {
  name: 'Section2',
}
</script>
