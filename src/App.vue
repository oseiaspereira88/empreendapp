<template>
  <v-app>
    <v-main  class="overflow-hidden">
          <Navbar/>
          <v-sheet
              id="scrolling-techniques-7"
              class="overflow-y-auto"
              max-height="100vh"
          >
            <Home/>
            <v-divider/>

            <Home/>
            <v-divider/>

            <Footer/>
          </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,
    Home,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
