<template>
  <v-app-bar
      absolute
      style="z-index: 2"
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7">
    <div>
      <a onclick="window.location = '/'">
        <v-img :src="require('../assets/slogan.png')"
               class="pa-0"
               style="width: 180px; left: 0;"
               contain/>
      </a>

    </div>
    <v-row
        justify="center"
        no-gutters>
      <div v-for="link in nav_itens" :key="link" :style="{ fontSize: 10 + 'pt' }">

        <v-btn v-if="link == 'Início'" color="#8A6FFA" text class="mx-1 my-2 v-btn--active">
          {{ link }}
        </v-btn>
        <v-btn v-else color="#8A6FFA" text class="mx-1 my-2">
          {{ link }}
        </v-btn>

      </div>
    </v-row>

    <v-app-bar-nav-icon class="mr-1" color="#514EED"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    nav_itens: [
      'Início',
      'Sobre Nós',
      'Serviços',
      'Orçamento',
      'Time',
      'Contatos',
    ],
  }),
}
</script>
