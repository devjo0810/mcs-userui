<template>
  <div class="appmgmt-layout light-blue lighten-5">
    <v-btn
      v-if="!subMenuShow && subMenuList.length"
      color="white"
      class="menu-open-btn rounded-l-0"
      @click="subMenuShow = true"
    >MENU<v-icon color="light-blue lighten-1">mdi-arrow-up-drop-circle</v-icon>
    </v-btn>
    <v-card
      v-if="subMenuShow && subMenuList.length"
      rounded="lg"
      class="sub-menu rounded-l-0 elevation-6"
    >
      <v-btn
        class="menu-close-btn rounded-circle elevation-6"
        @click="subMenuShow = false"
      ><v-icon>mdi-close</v-icon></v-btn>
      <v-list
        dense
        class="sub-menu-list pt-0"
      >
        <h2 class="sub-menu-title">{{ mainMenuTitle }}</h2>
        <v-list-item-group
          :value="subMenuIndex"
          color="light-blue lighten-1"
        >
          <v-list-item
            v-for="(menu, i) in subMenuList"
            :key="i"
            @click="$router.push(menu.path)"
            :disabled="subMenuIndex === i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="menu.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <section class="section-header">
      <h2>{{ currentMenuTitle }}</h2>
    </section>
    <v-sheet class="section-body">
      <router-view />
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppmgmtLayout',
  data: () => ({
    subMenuShow: false
  }),
  computed: {
    ...mapGetters({
      mainMenuTitle: 'Menu/getMainMenuTitle',
      currentMenuTitle: 'Menu/getCurrentMenuTitle',
      subMenuList: 'Menu/getSubMenuList',
      subMenuIndex: 'Menu/getSubMenuIndex'
    })
  }
}
</script>
