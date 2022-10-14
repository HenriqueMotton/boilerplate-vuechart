<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="title">Gerador de gráficos</h1>
      <h3 class="subTitle mt-4">vue-chartjs</h3>
    </div>
    <div class="col-12 mt-3 pl-5">
      <button  
        class="btn btn-outline-primary"
        @click="activateChart('line')"  
      >Line</button>
      <button 
        class="btn btn-outline-primary"
        @click="activateChart('bar')"  
      >Bar</button>
      <button 
        class="btn btn-outline-primary"
        @click="activateChart('pie')"  
      >Pie</button>
    </div>
    <div class="col-12 mt-3 px-5">
      <pie-chart
        :chartOptions='chartOptionsPie'
        :chartData='chartDataPie'
        :height="400"
        :width="400"
        chartId='myCustomIdPie'
        v-if="pieActive"
      />
      <line-chart
        :chartOptions='chartOptionsLine'
        :chartData='chartDataLine'
        :height="100"
        chartId='myCustomIdLine'
        v-if="lineActive"
      />
      <bar-chart
        :chartOptions='chartOptionsBar'
        :chartData='chartDataBar'
        :height="300"
        chartId='myCustomIdBar'
        v-if="barActive"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      pieActive: false,
      chartDataPie: {
        labels: [ 'Teste 1', 'Teste 2', 'Teste 3', 'Teste 4', 'Teste 5' ],
        datasets: [ 
          { 
            backgroundColor: ['green', 'red', 'black', 'blue', 'orange'],
            data: [40, 20, 12, 6, 0] 
          },
        ]
      },
      chartOptionsPie: {
        responsive: true,
        maintainAspectRatio: false
      },

      lineActive: false,
      chartDataLine: {
        labels: [ 'Teste 1', 'Teste 2', 'Teste 3', 'Teste 4', 'Teste 5' ],
        datasets: [ 
          { 
            label: 'Plano 1',
            backgroundColor: 'green',
            data: [50, 30, 20, 6, 0] 
          },
          { 
            label: 'Plano 2',
            backgroundColor: 'red',
            data: [40, 20, 10, 3, 0] 
          },
        ]
      },
      chartOptionsLine: {
        responsive: true,
      },
      
      barActive: false,
      chartDataBar: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'blue',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      chartOptionsBar: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    activateChart(typeChart){
      this.pieActive = false
      this.lineActive = false
      this.barActive = false
      if(typeChart === 'pie'){
        if(this.pieActive){
          this.pieActive = false
        }else{
          this.pieActive = true
        }
      }else if(typeChart === 'line'){
        if(this.lineActive){
          this.lineActive = false
        }else{
          this.lineActive = true
        }
      }else if(typeChart === 'bar'){
        if(this.barActive){
          this.barActive = false
        }else{
          this.barActive = true
        }
      }
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