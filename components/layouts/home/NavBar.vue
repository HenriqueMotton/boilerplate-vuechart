<template>
  <b-card title="Card Title" no-body class="teste">
    <b-card-header header-tag="nav">
      <b-nav>
        <span>
          <img src="../../../assets/png/logo-pequeno.png" alt="ParkHenriLogo" width="55" height="45" />
        </span>
        <b-nav-item href="/home">
          Vue-testes
        </b-nav-item>
        <b-nav-item href="/install">
          Instalação
        </b-nav-item>
        <b-nav-item href="/library">
          Bibliotecas
        </b-nav-item>
      </b-nav>
    </b-card-header>
  </b-card>
</template>

<script>

export default {
  name: "NavBar",
  data(){
    return{
    }
  },
  methods: {
    // goTo(path){
    //   this.$router.push(path)
    // }
  }
}
</script>

<style scoped lang="scss">
.teste{
  background-color: black;
  border-radius: 0%;
}
</style>