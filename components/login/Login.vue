<template>
  <div>
    <h3>Login</h3>
    <b-container>
      <b-row dense>
        <b-col cols="12"> 
          <b-btn @click="login()">
            Login via Idas
          </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LoginVue',
  auth: 'guest',
  methods: {
    async login () {
      try {
        const response = await this.$auth.loginWith('keycloak')
        // eslint-ignore-next-line
        console.log(response)
      } catch (err) {
        // eslint-ignore-next-line
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>

</style>