<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="value"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        class="search-date-box"
        append-icon="mdi-calendar"
        readonly
        dense
        solo
        v-bind="attrs"
        v-on="on"
        :label="label"
        :value="value"
        :style="fieldStyle"
      />
    </template>
    <v-date-picker
      no-title
      scrollable
      locale="ko"
      :value="value"
      @input="onInput"
    />
  </v-menu>
</template>

<script>
export default {
  name: 'SearchDateBox',
  data: () => ({
    menu: false
  }),
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: '날짜를 선택해주세요'
    },
    width: {
      type: Number,
      required: false
    }
  },
  computed: {
    fieldStyle () {
      let styleVal = ''
      styleVal += this.width ? 'width: ' + this.width + 'px; ' : ''
      return styleVal
    }
  },
  methods: {
    onInput (v) {
      this.$refs.menu.save(v)
      this.$emit('input', v)
    }
  }
}
</script>
