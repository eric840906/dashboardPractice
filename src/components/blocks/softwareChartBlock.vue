<template>
  <div>
    <div class="software-chart-block">
      <div class="software-chart-container">
        <div class="heading">
          <p class="title">軟體派送排程執行情形</p>
        </div>
        <div>
          <div class="col-md-8">
            <div class="chart">
              <slot name="chart"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/blocks.scss';
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
