<template>
  <v-app>
    <v-main>
      <GeneralNavbar/>
      <v-sheet id="scrolling-techniques-7" max-height="100vh"><br><br>
        <router-view/>
        <Footer/>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import GeneralNavbar from '@/components/GeneralNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    GeneralNavbar,
    Footer
  },
}
</script>

<style lang="scss">
.scroll-none::-webkit-scrollbar {
  display: none;
}

.bg-right-container {
  position: absolute;
  top: 24vh;
  right: 60px;
  z-index: 0;
  height: 100%;
  width: auto;
  border-radius: 16px;
  overflow: hidden;
}

.bg-left-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: auto;
  border-radius: 16px;
  overflow: hidden;
}

.bg-right-container #animation1{
  height: 70%;
}

.bg-right-container .bg, .bg-left-container .bg {

}

//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
//
//nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
