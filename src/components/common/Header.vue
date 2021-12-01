<template>
  <v-app-bar
    app color="primary" dark
  >
    <div class="d-flex align-center">
      <!-- <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
      <v-btn
        v-for="(menu, i) in headerMenuList"
        :key="i"
        @click="$router.push(menu.path)"
      >
        <span>{{ menu.title }}</span>
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      headerMenuList: 'Header/getMenuList'
    })
  }
}
</script>
