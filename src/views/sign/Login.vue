<template>
  <div>
    <v-btn
      @click="$router.push('/template1')"
    >
      <span>template1</span>
    </v-btn>
    <v-btn
      @click="$router.push('/user/manage')"
    >
      <span>user manage</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
