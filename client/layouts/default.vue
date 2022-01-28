<template>
  <v-app dark>
    <header-appbar />
    <v-main>
      <v-container id="container">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
