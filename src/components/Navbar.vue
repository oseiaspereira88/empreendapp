<template>
  <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
  >

<!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

    <v-img
        :src="require('../assets/slogan.png')"
        class="my-3"
        contain
        height="60"
        width="60"
    />
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in nav_itens"
          :key="link"
          color="black"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
    </v-row>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    nav_itens: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>
