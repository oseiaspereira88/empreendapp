<template>
  <div v-if="isMobile">
    <MobileNavbar/>
  </div>
  <dev v-else>
    <ComputerNavbar/>
  </dev>
</template>

<script>
import MobileNavbar from "@/components/MobileNavbar";
import ComputerNavbar from "@/components/ComputerNavbar";

export default {
  name: 'GeneralNavbar',
  components: {ComputerNavbar, MobileNavbar},
  ComputerNavbar,
  MobileNavbar,

  data: () => ({
    isMobile: true,
    showNav: false
  }),

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
