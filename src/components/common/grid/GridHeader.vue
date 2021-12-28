<template>
  <div class="grid-header">
    <v-icon color="blue darken1">mdi-check-circle</v-icon>
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'GridHeader'
}
</script>
