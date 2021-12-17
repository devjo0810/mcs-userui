<template>
  <v-app-bar app color="white">
    <v-tabs
      :value="headerMenuIndex"
      color="light-blue lighten-1"
    >
      <v-tab
        v-for="(menu, i) in headerMenuList"
        :key="i"
        @click="goMenu(menu)"
      >
        {{ menu.title }}
      </v-tab>
    </v-tabs>

    <v-btn
      text icon color="red darken-1"
      @click="goMenuSelectView"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn
      text icon color="red darken-1"
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
  computed: {
    ...mapGetters({
      headerMenuList: 'Menu/getMenuList',
      headerMenuIndex: 'Menu/getMainMenuIndex'
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
    },
    async goMenuSelectView () {
      const flag = await this.$dialog.confirm('메뉴선택 화면으로 돌아가시겠습니까?')
      if (!flag) return
      this.$router.push('/menu')
    },
    goMenu (menu) {
      if (menu.path) {
        this.$router.push(menu.path)
        return true
      } else {
        for (const subMenu of menu.items) {
          const flag = this.moveLastPath(subMenu)
          if (flag) return true
        }
      }
    }
  }
}
</script>
