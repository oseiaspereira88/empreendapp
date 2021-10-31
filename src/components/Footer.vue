<template>
  <v-footer
      color="white"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="black"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
          class="py-4 text-center text--darken-1"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>EmpreendApp</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      links: [
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
