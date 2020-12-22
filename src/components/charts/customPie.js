import Chart from 'chart.js'
import { generateChart, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
Chart.defaults.PieWithShadow = Chart.defaults.pie
const draw = Chart.controllers.pie.prototype.draw
Chart.controllers.PieWithShadow = Chart.controllers.pie.extend({
  draw () {
    draw.apply(this, arguments)
    const ctx = this.chart.chart.ctx
    const stroke = ctx.stroke
    ctx.stroke = function () {
      ctx.save()
      ctx.shadowColor = '#ff0000'
      ctx.shadowBlur = 20
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      stroke.apply(this, arguments)
      ctx.restore()
    }
  }
})
const CustomPie = generateChart('custom-pie', 'PieWithShadow')

export default {
  extends: CustomPie,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
