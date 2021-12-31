<template>
  <div
    class="global-dialog-layout"
    v-if="isShow"
  >
    <v-card
      class="global-dialog rounded-lg elevation-6 white"
    >
      <v-card-title>{{ title }}</v-card-title>
      <v-divider />
      <v-card-text class="py-5">{{ message }}</v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer></v-spacer>
        <template v-if="type === 'alert'">
          <v-btn
            class="confirm mcs-primary"
            @click="close(true)"
          >
            확인
          </v-btn>
        </template>
        <template v-if="type === 'confirm'">
          <v-btn
            class="cancel mcs-grey"
            @click="close(false)"
          >
            취소
          </v-btn>
          <v-btn
            class="confirm mcs-primary"
            @click="close(true)"
          >
            확인
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'GlobalModal',
  data: () => ({
    isShow: false,
    title: '알림',
    message: '',
    type: 'alert',
    promiseResolve: null,
    promiseReject: null
  }),
  methods: {
    close (flag) {
      try {
        this.isShow = false
        if (this.promiseResolve) this.promiseResolve(flag)
      } catch (e) {
        if (this.promiseReject) this.promiseReject(e)
      }
    }
  }
}
</script>
