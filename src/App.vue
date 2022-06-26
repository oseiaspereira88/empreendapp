<template>
  <v-app style="padding: 0 !important; margin: 0 !important;">
    <v-main class="overflow-hidden">
      <Navbar/>
      <v-sheet style="padding: 0 !important; margin: 0 !important;"
               id="scrolling-techniques-7"
               class="overflow-y-auto"
               max-height="100vh">
        <br><br>
        <CardHome/>

        <div style="height: 140vh;
            margin-top: 12px;
            border-bottom-left-radius: 45%;
            border-bottom-right-radius: 45%;
            background-color:  white"></div>

        <div style="height: 100vh; background-color: rgb(229, 224, 255)"></div>
        <v-divider/>

        <Footer/>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import CardHome from './components/CardHome';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,
    CardHome,
    Footer,
  },
};
</script>
