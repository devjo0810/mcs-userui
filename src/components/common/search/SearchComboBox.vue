<template>
  <v-combobox
    class="search-combo-box"
    multiple
    small-chips
    solo
    hide-selected
    dense
    :items="items"
    :value="value"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'SearchComboBox',
  props: {
    value: {
      type: [String, Array],
      required: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    }
  }
}
</script>
