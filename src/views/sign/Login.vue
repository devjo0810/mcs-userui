<template>
  <div class="login-view grey lighten-5 rounded-lg elevation-6">
    <h2 class="text-center my-5">My Cloud Service</h2>
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
      />
      <v-text-field
        type="password"
        label="비밀번호"
        :rules="[v => !!v || '비밀버호를 입력해주세요']"
        required
        v-model="form.password"
      />
      <v-checkbox
        label="아이디 저장"
        v-model="idCheck"
      />
      <v-btn
        class="light-blue lighten-3"
        block
        @click="login"
      >
        <span>로그인</span>
      </v-btn>
      <v-row class="mt-1">
        <v-col cols="6">
          <v-btn
            class="grey lighten-2"
            block
            @click="$router.push('/signup')"
          >
            <span>회원가입</span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="grey lighten-2"
            block
            @click="test"
          >
            <span>비밀번호 초기화</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    form: {
      id: '',
      password: ''
    },
    idCheck: false
  }),
  methods: {
    login () {
      this.$refs.form.validate()
      console.log('login', this.form)
    },
    test () {
      // this.$alert('test')
      this.$confirm('test')
    }
  }
}
</script>
