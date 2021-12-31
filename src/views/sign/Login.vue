<template>
  <div class="f100p d-flex justify-center align-center">
    <div class="login-view grey lighten-5 rounded-lg elevation-6">
      <Logo class="mt-8 mb-3" />
      <v-form
        class="login-form"
        ref="form"
        lazy-validation
      >
        <v-text-field
          label="아이디"
          :rules="[v => !!v || '아이디를 입력해주세요']"
          required
          v-model="form.id"
          @keydown.enter="login"
        />
        <v-text-field
          type="password"
          label="비밀번호"
          :rules="[v => !!v || '비밀번호를 입력해주세요']"
          required
          v-model="form.password"
          @keydown.enter="login"
        />
        <v-checkbox
          label="아이디 저장"
          v-model="idCheck"
        />
        <v-btn
          class="mcs-primary"
          block
          @click="login"
        >
          <span>로그인</span>
        </v-btn>
        <v-row class="mt-1">
          <v-col cols="6">
            <v-btn
              class="mcs-grey"
              block
              @click="$router.push('/signup')"
            >
              <span>회원가입</span>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="mcs-grey"
              block
            >
              <span>비밀번호 초기화</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <p class="text-caption text-center font-italic mt-5 mb-1">version {{ appVersion }}</p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/common/Logo.vue'
import { APP, LOC_STRG_KEY } from '@/config'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    Logo
  },
  data: () => ({
    form: {
      id: '',
      password: ''
    },
    idCheck: false,
    appTitle: APP.title,
    appVersion: APP.version
  }),
  methods: {
    ...mapActions({
      loginCheck: 'Login/loginCheck'
    }),
    init () {
      this.getLocStrgId()
    },
    getLocStrgId () {
      const locStrgId = localStorage.getItem(LOC_STRG_KEY.id)
      if (locStrgId) {
        this.idCheck = true
        this.form.id = locStrgId
      }
    },
    async login () {
      const isValid = this.$refs.form.validate()
      if (!isValid) return
      const isLogin = await this.loginCheck(this.form)
      if (!isLogin) {
        this.$dialog.alert('아이디 또는 비밀번호가 일치하지 않습니다.')
      } else {
        if (this.idCheck) {
          localStorage.setItem(LOC_STRG_KEY.id, this.form.id)
        } else {
          localStorage.removeItem(LOC_STRG_KEY.id)
        }
        this.$router.push('/menu')
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>
