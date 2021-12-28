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
            no-action
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
              @click="go(child.path)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
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
          { title: '컴포넌트1', path: '/template/component1' },
          { title: '컴포넌트2', path: '/template/component2' },
          { title: '컴포넌트3', path: '/template/component3' }
        ],
        title: '컴포넌트'
      },
      {
        items: [
          { title: '테이블1', path: '/template/table1' },
          { title: '테이블2', path: '/template/table2' },
          { title: '테이블3', path: '/template/table3' }
        ],
        title: '테이블'
      },
      {
        items: [
          { title: '그리드1', path: '/template/grid1' },
          { title: '그리드2', path: '/template/grid2' },
          { title: '그리드3', path: '/template/grid3' }
        ],
        title: '그리드'
      },
      {
        items: [
          { title: '팝업1', path: '/template/popup1' },
          { title: '팝업2', path: '/template/popup2' },
          { title: '팝업3', path: '/template/popup3' }
        ],
        title: '팝업'
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
    go (path) {
      if (path) this.$router.push(path)
    }
  }
}
</script>
