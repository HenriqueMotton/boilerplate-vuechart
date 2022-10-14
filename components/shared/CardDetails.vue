<template>
    <div class="card" style="width: 18rem;">
    <!-- <img :src="imageUrl" class="card-img-top"> -->
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-9">
          <h5 class="card-title pt-2">{{ title }}</h5>
        </div>
        <div class="col-3">
          <i class="bi bi-graph-up iconStyle"></i>
        </div>
      </div>
      <p class="card-text">{{ text }}</p>
      <a :href="redirect" class="btn btn-primary">{{ buttonText }}</a>
    </div>
  </div>  
</template>
<script>

export default {
  name: "CardDetails",
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String
    }, 
    text: {
      type: String
    },
    redirect: {
      type: String
    },
    buttonText:{
      type: String
    }
  }, 

}
</script>
<style lang="scss" scoped>
.iconStyle{
  font-size: 30px; 
  color: cornflowerblue;
}
</style>