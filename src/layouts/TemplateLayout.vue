<template>
  <div class="template-layout">
    <v-app-bar app color="white">
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
    <v-sheet class="section-body">
      <router-view />
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TemplateLayout',
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
    }
  }
}
</script>
