
<template>
  <div>
    <div class="total-count">
      <div :style="{backgroundColor: visualData.data1.dataBackground}">
        <h5 :style="{color: visualData.data1.dataColor}">{{visualData.data1.dataCount}}件</h5>
        <small>已派送</small>
      </div>
      <div :style="{backgroundColor: visualData.data2.dataBackground}">
        <h5 :style="{color: visualData.data2.dataColor}">{{visualData.data2.dataCount}}件</h5>
        <small>已排程</small>
      </div>
    </div>
    <chart :chartData="datacollection" :options="options"></chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import chart from '@/components/charts/lineChart.vue'

export default {
  name: 'ChartContainer',
  components: { chart },
  data: () => ({
    datacollection: null,
    visualData: {
      data1: {
        dataColor: '',
        dataBackground: '',
        dataCount: 0
      },
      data2: {
        dataColor: '',
        dataBackground: '',
        dataCount: 0
      }
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 50,
          top: 50,
          bottom: 10
        }
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      legend: {
        position: 'bottom',
        align: 'end',
        labels: {
          usePointStyle: true
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: '件數',
            position: 'right'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: '月份'
          }
        }]
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          title (tooltipItem, data) {
            return data.labels[tooltipItem[0].index]
          },
          label (tooltipItem, data) {
            const mainData = data.datasets[tooltipItem.datasetIndex]
            return `${mainData.label}${mainData.data[tooltipItem.index]}件`
          },
          afterLabel (tooltipItem, data) {
            const mainData = data.datasets[tooltipItem.datasetIndex]
            const total = mainData.data.reduce((acc, cur) => { return acc + cur }, 0)
            return `(共${total}件)`
          }
        }
      }
    }
  }),
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '已派送',
            backgroundColor: '#6087ff1f',
            borderColor: '#6087ff6e',
            fill: false,
            borderDash: [9, 10],
            borderWidth: 1,
            borderCapStyle: 'square',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: '已排程',
            backgroundColor: '#f91d1d17',
            borderColor: '#f91d1d66',
            borderWidth: 1,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.visualData.data1.dataCount = this.datacollection.datasets[0].data.reduce((acc, cur) => acc + cur)
      this.visualData.data1.dataBackground = this.datacollection.datasets[0].backgroundColor
      this.visualData.data1.dataColor = this.datacollection.datasets[0].backgroundColor.slice(0, 7)
      this.visualData.data2.dataCount = this.datacollection.datasets[1].data.reduce((acc, cur) => acc + cur)
      this.visualData.data2.dataBackground = this.datacollection.datasets[1].backgroundColor
      this.visualData.data2.dataColor = this.datacollection.datasets[1].backgroundColor.slice(0, 7)
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}

</script>

<style lang="scss" scoped>
  .total-count{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    div{
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 4px 17px -5px #0000007d;
      display: flex;
      align-items: baseline;
    }
    h4{
      display: inline-block;
    }
    div+div{
      margin-left: 10px;
    }
  }
</style>
