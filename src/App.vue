<template>
  <v-app>
    <Header v-if="isHeader" />

    <v-main>
      <component :is="layoutName" />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import NoLayout from '@/layouts/NoLayout'
import TemplateLayout from '@/layouts/TemplateLayout'

export default {
  name: 'App',
  components: {
    Header,
    NoLayout,
    TemplateLayout
  },
  data: () => ({
    //
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
