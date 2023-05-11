<template>
  <div>
    <h1>Home</h1>  
    <b-btn @click="teste">Teste</b-btn>    
  </div>
</template>
<script>
import environment from '../../lib/environment'

export default {
  name: "Home",
  mixins: [ environment ],
  beforeMount(){
    console.log('AQUI: ', this.$auth)
    // console.log('AQUI: ', localStorage['auth._token.keycloak'])
  },
  data() {
    return {
      token: ''
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    },
    teste(){
      // http://<domain.com>/auth/realms/<realm-name>/protocol/openid-connect/registrations?client_id=<client_id>&response_type=code&scope=openid email&redirect_uri=http://<domain.com>/<redirect-path>&kc_locale=<two-digit-lang-code>
      window.location.href = `${environment.KC_URL}/auth/realms/${environment.KC_REALM}/protocol/openid-connect/registrations?client_id=${environment.KC_CLIENT_ID}&response_type=code&scope=openid email&redirect_uri=http://localhost:3000&kc_locale=pt`;
    },
    getUserInfos(){
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-family: cursive;
}
.subTitle{
  font-family: cursive;
  color:rgb(100, 100, 100);
}
</style>