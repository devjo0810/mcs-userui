<template>
  <v-app :id="appId">
    <Header v-if="isHeader" />

    <v-main>
      <component :is="layoutName" />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import NoLayout from '@/layouts/NoLayout'
import AppmgmtLayout from '@/layouts/AppmgmtLayout'
import TemplateLayout from '@/layouts/TemplateLayout'
import { APP } from '@/config'

export default {
  name: 'App',
  components: {
    Header,
    NoLayout,
    AppmgmtLayout,
    TemplateLayout
  },
  data: () => ({
    appId: APP.documentId
  }),
  computed: {
    layoutName () {
      const layout = this.$route.meta.layout || 'No'
      return layout + 'Layout'
    },
    isHeader () {
      return !!this.$route.meta.header
    }
  }
}
</script>
