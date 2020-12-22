<template>
  <div>
    <chart :chartData="datacollection" :options="options"></chart>
    <div class="total-number">
      <p class="tag">總數</p>
      <h4>{{totalCount}}<small>台</small></h4>
    </div>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import chart from '@/components/charts/customPie.js'

export default {
  name: 'ChartContainer',
  components: { chart },
  data: () => ({
    totalCount: 0,
    datacollection: null,
    options: {
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          boxWidth: 25
        }
      },
      tooltips: {
        callbacks: {
          title (tooltipItem, data) {
            return data.labels[tooltipItem[0].index]
          },
          label (tooltipItem, data) {
            const dataset = data.datasets[0]
            const meta = data.datasets[0]._meta
            const key = Object.keys(meta)[0]
            const percent = Math.round((dataset.data[tooltipItem.index]) / (meta[key].total) * 100)
            return `${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]}套(${percent}%)`
          }
        }
      },
      cutoutPercentage: 88,
      title: {
        display: false,
        text: '各類型資產統計'
      }
    },
    stroke: {}
  }),
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['電腦', '印表機', '伺服器', '其他'],
        datasets: [
          {
            backgroundColor: ['#ff9755', '#6b47ff', '#fd6384', '#64c4ed'],
            borderColor: '#f2f5fc',
            borderWidth: 8,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.totalCount = this.datacollection.datasets[0].data.reduce((acc, cur) => acc + cur)
    },
    getRandomInt () {
      return Math.floor(Math.random() * 3000)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
  .total-number{
    position: absolute;
    top: 47%;
    width: 80%;
    transform: translateY(-47%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: radial-gradient($tab-color -231%, #ffffff00 80%);
    padding: 5% 0;
    .tag{
      color: #00000087;
    }
  }
</style>
