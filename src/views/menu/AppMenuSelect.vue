<template>
  <div class="app-menu-select-view">
    <v-sheet
      rounded="lg"
      width="600px"
      elevation="2"
      class="relative"
    >
      <div class="d-flex justify-space-between align-center px-3 py-5 mcs-primary rounded-t-lg rounded-t-2">
        <h2
          class="text-center"
        >APP 메뉴 목록</h2>
        <v-btn
          color="red darken-1"
          class="px-1 white--text"
          min-width="44px"
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
      <v-container fluid class="my-3">
        <v-row>
          <v-col
            v-for="(card, i) in cards"
            :key="i"
            cols="4"
          >
            <v-hover #default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="$router.push(card.path)"
              >
                <v-card-title>
                  {{ card.title }}
                </v-card-title>
                <v-card-text>
                  <v-icon x-large>{{ card.icon }}</v-icon>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppMenuSelect',
  data: () => ({
    cards: []
  }),
  methods: {
    ...mapActions({
      logoutAction: 'Login/logout'
    }),
    init () {
      this.cards = [...SAMPLE]
    },
    async logout () {
      const flag = await this.$dialog.confirm('로그아웃 하시겠습니까?')
      if (!flag) return
      this.logoutAction()
      this.$router.push('/')
    }
  },
  mounted () {
    this.init()
  }
}

const SAMPLE = [
  {
    icon: 'mdi-card-multiple',
    title: '템플릿 목록',
    path: '/template/main'
  },
  {
    icon: 'mdi-view-grid-plus',
    title: '시스템 관리',
    path: '/appmgmt/app/menu1',
    appName: 'appmgmt'
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'To Do List',
    path: '/todolist',
    appName: 'todolist'
  },
  {
    icon: 'mdi-heart',
    title: 'Test App',
    path: '/template2'
  },
  {
    icon: 'mdi-heart',
    title: 'Test App',
    path: '/template3'
  }
]
</script>
