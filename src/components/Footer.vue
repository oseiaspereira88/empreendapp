<template>
  <v-footer
      color="white"
      padless>
    <v-row
        justify="center"
        no-gutters
    >
      <v-icon
          v-for="link in links"
          :key="link"
          color="black"
          text
          class="my-2">
      </v-icon>
      <v-col class="py-4 text-center text--darken-1" cols="12">
        <strong><span class="mr-1">©</span>EmpreendApp</strong> — O futuro é de quem o antecipa.
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
