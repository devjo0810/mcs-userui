<template>
  <v-select
    class="search-select-box"
    :label="label"
    dense
    solo
    :items="displayItems"
    :value="value"
    @input="onInput"
  ></v-select>
</template>

<script>
const allYnObj = { value: '', text: '전체' }

export default {
  name: 'SearchSelectBox',
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: '선택해주세요'
    },
    items: {
      type: Array,
      default: () => []
    },
    allYn: {
      type: Boolean,
      default: false
    },
    codeGroupId: {
      type: String,
      required: false
    }
  },
  data: () => ({
    displayItems: []
  }),
  methods: {
    async init () {
      const items = []
      if (this.allYn === true) items.push(allYnObj)
      if (this.items.length) items.push(...this.items)
      this.displayItems = items
    },
    onInput (v) {
      this.$emit('input', v)
    }
  },
  async mounted () {
    await this.init()
  }
}
</script>
