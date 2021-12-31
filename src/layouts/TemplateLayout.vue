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
    <div class="section-body">
      <section class="section-left-side">
        <v-list dense>
          <h4 class="sub-title1 text-center my-2">템플릿 메뉴</h4>
          <v-list-item link>
            <v-list-item-content
              @click="go('/template/main')"
            >
              <v-list-item-title v-text="'메인'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-for="(item, i) in items"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, childIdx) in item.items"
              :key="childIdx"
              link
              @click="go(child.path, child.newTab)"
            >
              <v-icon>mdi-chevron-right</v-icon>
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item link>
            <v-list-item-content
              @click="go('/template/popup1')"
            >
              <v-list-item-title v-text="'팝업'"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </section>
      <v-sheet class="section-content">
        <router-view />
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TemplateLayout',
  data: () => ({
    items: [
      {
        items: [
          { title: '버튼', path: '/template/component1' },
          { title: '색상', path: 'https://vuetifyjs.com/en/styles/colors/#material-colors', newTab: true },
          { title: '아이콘', path: 'https://materialdesignicons.com/', newTab: true }
        ],
        title: '컴포넌트'
      },
      {
        items: [
          { title: 'ToastUI 그리드 기본', path: '/template/grid2' },
          { title: 'ToastUI 그리드 에디터', path: '/template/grid3' },
          { title: 'Vuetify 그리드(미사용)', path: '/template/grid1' }
        ],
        title: '그리드'
      },
      {
        items: [
          { title: '테이블1', path: '/template/table1' }
        ],
        title: '테이블'
      },
      {
        items: [
          { title: 'ToastUI 위지윅 에디터', path: '/template/editor1' }
        ],
        title: '에디터'
      },
      {
        items: [
          { title: '레이아웃1', path: '/template/layout1' }
        ],
        title: '그리드 레이아웃'
      }
    ]
  }),
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
    go (path, newTab) {
      if (path) {
        if (!newTab) {
          this.$router.push(path)
        } else {
          window.open(path, '_blank')
        }
      }
    }
  }
}
</script>
