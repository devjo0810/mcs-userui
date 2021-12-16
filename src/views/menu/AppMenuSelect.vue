<template>
  <div class="app-menu-select-view">
    <v-sheet
      rounded="lg"
      height="100%"
      width="600px"
      class="mx-auto overflow-y-auto relative"
    >
      <h2
        class="h1 text-center my-5"
      >
        APP 메뉴 목록
      </h2>
      <v-container fluid>
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
      <v-btn
        class="red darken-1 white--text fixed-bottom-right"
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const SAMPLE = [
  {
    icon: 'mdi-view-grid-plus',
    title: '시스템 관리',
    path: '/appmgmt'
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'To Do List',
    path: '/todolist'
  },
  {
    icon: 'mdi-heart',
    title: 'Test App',
    path: '/template1'
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
  },
  {
    icon: 'mdi-heart',
    title: 'Test App',
    path: '/template4'
  }
]

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
</script>
