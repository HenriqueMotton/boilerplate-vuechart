<template>
  <div class="row">
    <div class="col-12">
      <b-form>
        <div class="row" v-if="!showChart">
          <div class="col-6">
            <b-form-group
              id="input-group-1"
              label="Titulo do gráfico:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="titleChart"
                placeholder="Digite o titulo"
              />
            </b-form-group>
          </div>
          <div class="col-12">
            <b-form-group
              id="input-group-2"
              label="Titulo do gráfico:"
              label-for="input-2"            
            >
              <b-form-input
                id="input-2"
                v-model="titleChart"
                placeholder="Digite o titulo"
              />
            </b-form-group>
          </div>
        </div>
        <b-form-group>
          <b-button 
            @click="constructorChart"
            variant="primary"
          >
            Gerar
          </b-button>
          <b-button
            variant="danger"
            type="reset"
            @click="formClear"
          >
            Resetar
          </b-button>
        </b-form-group>
      </b-form>
    </div>
    <div 
      class="col-12"
      v-if="showChart"
    > 
      <div class="col-12 mb-2 subtitlePage" align="center">
        {{ titleChart }}
      </div>
      <line-chart
        :chartOptions='chartOptionsLine'
        :chartData='chartDataLine'
        :height="100"
        chartId='myCustomIdLine'
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormLineChart',
  data(){
    return{
      showChart: false,
      titleChart: '',
      // chartDataLine: {},
      chartOptionsLine: {
        responsive: true,
      },
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
    }
  },
  methods: {
    constructorChart(){
      this.showChart = true
    },
    formClear(){
      this.showChart = false
      this.chartDataLine = {}
      this.titleChart = ''
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>