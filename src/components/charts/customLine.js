import Chart from 'chart.js'
import { generateChart, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
Chart.defaults.LineWithLine = Chart.defaults.line
const draw = Chart.controllers.line.prototype.draw
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw () {
    draw.apply(this, arguments)
    const ctx = this.chart.chart.ctx
    const stroke = ctx.stroke
    ctx.stroke = function () {
      ctx.save()
      ctx.shadowColor = '#ff0000'
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 1
      stroke.apply(this, arguments)
      ctx.restore()
    }
  }
})
const CustomLine = generateChart('custom-line', 'LineWithLine')

export default {
  extends: CustomLine,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
