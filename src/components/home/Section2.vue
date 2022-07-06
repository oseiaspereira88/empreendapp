<template>
  <v-container class="section py-16" style="background:  linear-gradient(90deg, #20107F 0%, #3814DD 50%, #3e15f5 65%);">
    <div class="d-flex justify-center">
      <div class="flex-1 py-16">
        <div style="height:100%; width:auto; overflow: hidden">
          <v-img height="auto" width="300px" :src="require('../../assets/home/section1.png')"/>
        </div>
      </div>
      <div class="flex-2">
        <div>
          The case to my friend and HTML elements represent six levels of section headings. This is the highest section level and device is the lowest
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
