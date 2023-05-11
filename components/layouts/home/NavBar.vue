<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand>
      <span>
        <img src="../../../assets/png/logo-pequeno.png" alt="ParkHenriLogo" width="55" height="45" />
      </span>
    </b-navbar-brand>
    <b-navbar-brand href="/home">
      Vue-testes
    </b-navbar-brand>
    <b-navbar-brand href="/install">
      Instalação
    </b-navbar-brand>
    <b-navbar-brand href="/library">
      Bibliotecas
    </b-navbar-brand>
    <b-navbar-brand @click="login" class="ml-auto clickMouse">
      Login
    </b-navbar-brand>
  </b-navbar>
</template>

<script>

export default {
  name: "NavBar",
  data(){
    return{
    }
  },
  methods: {
    async login(){
      try {
        const response = await this.$auth.loginWith('keycloak')
        // eslint-ignore-next-line
        console.log(response)
      } catch (err) {
        // eslint-ignore-next-line
        console.log(err)
      }
    }
    // goTo(path){
    //   this.$router.push(path)
    // }
  }
}
</script>

<style scoped lang="scss">
</style>