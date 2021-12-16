<template>
  <v-app-bar app color="white">
    <v-tabs
      class=""
      v-model="tab"
    >
      <v-tab
        v-for="(menu, i) in headerMenuList"
        :key="i"
        @click="$router.push(menu.path)"
      >
        {{ menu.title }}
      </v-tab>
    </v-tabs>

    <v-btn
      inline
      class="red darken-1 white--text"
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    tab: null
  }),
  computed: {
    ...mapGetters({
      headerMenuList: 'Header/getMenuList'
    })
  },
  methods: {
    ...mapActions({
      logoutAction: 'Login/logout'
    }),
    async logout () {
      const flag = await this.$dialog.confirm('로그아웃 하시겠습니까?')
      if (!flag) return
      this.logoutAction()
      this.$router.push('/')
    }
  }
}
</script>
