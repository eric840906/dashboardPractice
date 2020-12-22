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
import chart from '@/components/charts/doughnutChart.vue'

export default {
  name: 'ChartContainer',
  components: { chart },
  data: () => ({
    totalCount: 0,
    datacollection: null,
    options: {
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
            const percent = Math.ceil((dataset.data[tooltipItem.index]) / (meta[key].total) * 100)
            return `${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]}套(${percent}%)`
          }
        }
      },
      cutoutPercentage: 88
      // ,
      // tooltips: {
      //   // Disable the on-canvas tooltip
      //   enabled: false,

      //   custom: function (tooltipModel) {
      //     // Tooltip Element
      //     var tooltipEl = document.getElementById('chartjs-tooltip')

      //     // Create element on first render
      //     if (!tooltipEl) {
      //       tooltipEl = document.createElement('div')
      //       tooltipEl.id = 'chartjs-tooltip'
      //       tooltipEl.innerHTML = '<table></table>'
      //       document.body.appendChild(tooltipEl)
      //     }

      //     // Hide if no tooltip
      //     if (tooltipModel.opacity === 0) {
      //       tooltipEl.style.opacity = 0
      //       return
      //     }

      //     // Set caret Position
      //     tooltipEl.classList.remove('above', 'below', 'no-transform')
      //     if (tooltipModel.yAlign) {
      //       tooltipEl.classList.add(tooltipModel.yAlign)
      //     } else {
      //       tooltipEl.classList.add('no-transform')
      //     }

      //     function getBody (bodyItem) {
      //       return bodyItem.lines
      //     }

      //     // Set Text
      //     if (tooltipModel.body) {
      //       var titleLines = tooltipModel.title || []
      //       var bodyLines = tooltipModel.body.map(getBody)

      //       var innerHtml = '<thead>'

      //       titleLines.forEach(function (title) {
      //         innerHtml += '<tr><th>' + title + '</th></tr>'
      //       })
      //       innerHtml += '</thead><tbody>'

      //       bodyLines.forEach(function (body, i) {
      //         var colors = tooltipModel.labelColors[i]
      //         var style = 'background:' + colors.backgroundColor
      //         style += '; border-color:' + colors.borderColor
      //         style += '; border-width: 2px'
      //         var span = '<span style="' + style + '"></span>'
      //         innerHtml += '<tr><td>' + span + body + '</td></tr>'
      //       })
      //       innerHtml += '</tbody>'

      //       var tableRoot = tooltipEl.querySelector('table')
      //       tableRoot.innerHTML = innerHtml
      //     }

      //     // `this` will be the overall tooltip
      //     var position = this._chart.canvas.getBoundingClientRect()

      //     // Display, position, and set styles for font
      //     tooltipEl.style.opacity = 1
      //     tooltipEl.style.position = 'absolute'
      //     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px'
      //     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px'
      //     tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily
      //     tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px'
      //     tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle
      //     tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px'
      //     tooltipEl.style.pointerEvents = 'none'
      //   }
      // }
    }
  }),
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['JAVA', 'Flash', 'Acrobat', 'Photoshop', 'Illustrator', 'Premiere'],
        datasets: [
          {
            backgroundColor: ['#ff9755', '#6b47ff', '#fd6384', '#64c4ed', '#8bd78c', '#ea75ff'],
            borderColor: '#f2f5fc',
            borderWidth: 4,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
      this.totalCount = this.datacollection.datasets[0].data.reduce((acc, cur) => acc + cur)
    },
    getRandomInt () {
      return Math.floor(Math.random() * (3000))
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
  .total-number{
    position: absolute;
    top: 47%;
    width: 70%;
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
