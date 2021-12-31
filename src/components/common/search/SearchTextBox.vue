<template>
  <v-text-field
    class="search-text-box"
    :label="label"
    dense
    solo
    :value="value"
    @input="onInput"
    :append-icon="icon"
    @click:append="onIconClick"
  ></v-text-field>
</template>

<script>
export default {
  name: 'SearchTextBox',
  props: {
    value: {
      type: String,
      required: false
    },
    label: {
      type: String,
      default: '입력해주세요'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    },
    onIconClick (e) {
      this.$emit('iconClick', e)
    }
  }
}
</script>
