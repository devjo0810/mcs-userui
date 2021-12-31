<template>
  <v-radio-group
    class="search-radio-box"
    row
    :value="value"
    @change="onInput"
  >
    <v-radio
      v-for="(radio, i) in items"
      :key="i"
      :label="radio.label"
      :value="radio.value"
    ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: 'SearchRadioBox',
  props: {
    value: {
      type: String,
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
