<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            <img src="../../../assets/png/logo-pequeno.png" alt="ParkHenriLogo" width="55" height="45">
            <span class="pl-3">Vue-testes</span>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <a class="nav-link active" aria-current="page" href="/install">Instalação</a>
            <a class="nav-link active" aria-current="page" href="/library">Bibliotecas</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
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
</style>