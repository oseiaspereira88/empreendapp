<template>
  <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7">
    <div>
      <v-img :src="require('../assets/slogan.png')"
             class="pa-0"
             style="width: 180px; left: 0;"
             contain/>
    </div>
    <v-row
        justify="center"
        no-gutters>
      <v-btn
          v-for="link in nav_itens"
          :key="link"
          :style="{ fontSize: 10 + 'pt' }"
          color="#8A6FFA"
          text
          class="my-2">
        {{ link }}
      </v-btn>
    </v-row>

    <v-app-bar-nav-icon class="mr-1"></v-app-bar-nav-icon>
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
