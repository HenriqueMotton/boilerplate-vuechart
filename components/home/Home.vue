<template>
  <h1>Home</h1>      
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
    }
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
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