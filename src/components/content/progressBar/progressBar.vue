<template>
  <div>
    <div class="heading">
      <p class="title">電腦資產更新狀態統計</p>
      <small class="update-count">總數: {{progressData.total}}</small>
    </div>
    <div class="update-progress">
      <div class="progress-text">
        <template v-if="progressData.current === progressData.total">
          <progress-icon/>
          <p>已完成</p>
        </template>
        <template v-else>
          <ongoing-icon class="flash"/>
          <p>已更新</p>
        </template>
        <p class="number">{{((progressData.current/progressData.total)*100).toFixed(2)}}% ({{progressData.current}}份)</p>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{width: `${progressData.current/progressData.total*100}%`}"></div>
      </div>
      <button @click.prevent="randomCurrent">randomize</button>
      <!-- <input type="number" v-model.number='progressData.total' placeholder="total">
      <input type="number" v-model.number='progressData.current' placeholder="current" :disabled="progressData.current >= progressData.total"> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    progressData: {
      total: 3000,
      current: 2647
    }
  }),
  methods: {
    randomCurrent () {
      this.progressData.current = Math.ceil(Math.random() * this.progressData.total)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
@import '@/assets/style/scss/blocks.scss';

.heading{
  @extend %heading;
  margin-bottom: 38px;
}
.update-progress{
  .progress-text{
    align-items: center;
    display: flex;
    margin: 5px 20px;
    *+*{
      margin-left: 5px;
    }
    .flash{
      animation: flash infinite 1s;
    }
    .number{
      color: $tab-color;
    }
    svg{
      color: $tab-color;
    }
  }
  .progress-bar{
  width: 90%;
  background-color: lighten($base, 25%);
  height: 10px;
  border-radius: 43px;
  margin-left: auto;
  margin-right: auto;
    .progress{
      width: 90%;
      background-image: linear-gradient(260deg, $tab-color 17%, #ffffff 140%);
      height: 10px;
      border-radius: 43px;
      transition: 0.3s width;
    }
  }
}

@keyframes flash {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>
