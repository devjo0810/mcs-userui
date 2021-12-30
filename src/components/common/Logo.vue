<template>
  <div class="main-logo">
    <img :src="logoImg" alt="메인로고">
    <span>{{ title }}</span>
  </div>
</template>

<script>
import Logo from '@/assets/images/main_logo.png'
import { APP } from '@/config'

export default {
  name: 'Logo',
  props: {
    alias: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logoImg: Logo,
    appTitle: APP.title,
    appTitleAlias: APP.titleAlias
  }),
  computed: {
    title () {
      if (this.alias) return this.appTitleAlias
      else return this.appTitle
    }
  }
}
</script>
