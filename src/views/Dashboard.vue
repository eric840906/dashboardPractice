<template>
  <div>
    <div class="container">
      <contentHeader></contentHeader>
      <statusTracking></statusTracking>
      <div class="chart-section">
        <div class="update-chart-block">
          <div class="update-chart-container">
            <div class="heading">
              <p class="title">軟體派送排程執行情形</p>
            </div>
            <div class="chart">
              <updateChart></updateChart>
            </div>
          </div>
        </div>
        <div class="chart-column-block">
          <div class="device-chart-container">
            <div class="heading">
              <p class="title">各類型資產統計</p>
            </div>
            <div class="chart">
              <deviceChart></deviceChart>
            </div>
          </div>
          <div class="update-progress-container">
            <progressBar></progressBar>
            <!-- <div class="heading">
              <p class="title">電腦資產更新狀態統計</p>
              <small class="update-count">總數: 3000</small>
            </div>
            <div class="update-progress">
              <div class="progress-text">
                <progress-icon/>
                <p>已更新</p>
                <p>90% (2647份)</p>
              </div>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="chart-section">
        <div class="software-chart-block">
          <div class="software-chart-container">
            <div class="heading">
              <p class="title">防毒軟體安裝數量統計</p>
            </div>
            <div>
              <div class="col-md-8">
                <div class="chart">
                  <antiVirusChart></antiVirusChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="software-chart-block">
          <div class="software-chart-container">
            <div class="heading">
              <p class="title">軟體派送排程執行情形</p>
            </div>
            <div class="d-flex">
              <div class="col-md-8">
                <div class="chart">
                  <softwareChart></softwareChart>
                </div>
              </div>
              <div class="col-md-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentHeader from '@/components/content/contentHeader.vue'
import statusTracking from '@/components/content/statusTracking.vue'
import updateChart from '@/components/content/chartContainer/softwareUpdateChart.vue'
import deviceChart from '@/components/content/chartContainer/deviceChart.vue'
import antiVirusChart from '@/components/content/chartContainer/antiVirusChart.vue'
import softwareChart from '@/components/content/chartContainer/softwareChart.vue'
import progressBar from '@/components/content/progressBar/progressBar.vue'
export default {
  name: 'Home',
  components: {
    contentHeader,
    statusTracking,
    updateChart,
    deviceChart,
    antiVirusChart,
    softwareChart,
    progressBar
  },
  data: () => ({
  }),
  methods: {

  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/button.scss';
@import '@/assets/style/scss/blocks.scss';

.chart-section{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.update-chart-block{
  @extend %block-frame;
  flex: 0 0 65%;
  max-width: 65%;
}
.update-chart-container{
  @extend %content-block;
  .heading{
    @extend %heading;
  }
}

.chart-column-block{
  @extend %block-frame;
  display: flex;
  flex-direction: column;
  flex: 0 0 33%;
  max-width: 33%;
}

.device-chart-container{
  @extend %content-block;
  flex-grow: 1;
  .heading{
    @extend %heading;
  }
}

.update-progress-container{
  @extend %content-block;
  padding-bottom: 37px;
  margin-top: 20px;
}

.software-chart-block{
  @extend %block-frame;
  flex: 0 0 48%;
  max-width: 48%;
  .software-chart-container{
    @extend %content-block;
    .heading{
    @extend %heading;
    }
  }
}
</style>
