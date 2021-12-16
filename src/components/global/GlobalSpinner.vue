<template>
  <div class="global-spinner-layout" v-if="isShow">
    <v-progress-circular
      indeterminate
      color="blue lighten-1"
      :size="45"
      :width="6"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'GlobalSpinner',
  data: () => ({
    isShow: false
  })
}
</script>
