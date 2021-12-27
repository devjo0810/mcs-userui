<template>
  <v-select
    class="search-select-box"
    :items="displayItems"
    :label="label"
    dense
    solo
  ></v-select>
</template>

<script>
export default {
  name: 'SearchSelectBox',
  props: {
    label: {
      type: String,
      default: '셀렉박스'
    },
    items: {
      type: Array,
      require: true
    }
  },
  computed: {
    displayItems () {
      return this.items.map(item => item.value)
    }
  }
}
</script>
