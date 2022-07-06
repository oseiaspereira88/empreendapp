<template>
  <div class="home" v-if="isMobile">
    <Section1Mobile/>
    <v-divider/>
    <Section2/>
    <v-divider/>
    <Section3/>
    <v-divider/>
    <Section4/>
    <v-divider/>
    <Section5/>
    <v-divider/>
    <Section6/>
  </div>
  <div v-else>
    <Section1/>
    <v-divider/>
    <Section2/>
    <v-divider/>
    <Section3/>
    <v-divider/>
    <Section4/>
    <v-divider/>
    <Section5/>
    <v-divider/>
    <Section6/>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from '@/components/home/Section1.vue'
import Section1Mobile from '@/components/home/Section1Mobile.vue'
import Section2 from '@/components/home/Section2.vue'
import Section3 from '@/components/home/Section3.vue'
import Section4 from '@/components/home/Section4.vue'
import Section5 from '@/components/home/Section5.vue'
import Section6 from '@/components/home/Section6.vue'

export default {
  name: 'HomeView',
  components: {
    Section1,
    Section1Mobile,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
  },
  data: () => {
    return {
      isMobile: true,
      showNav: false
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 998;
    },
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
}
</script>
