<template>
  <div style="position: relative; padding-top: 40px;">
    <div class="arrow-box">
      <a href="#" class="arrow" @click.prevent='scrollLeft()'><left-control/></a>
      <a href="#" class="arrow" @click.prevent='scrollRight()'><right-control/></a>
    </div>
    <div class="status-row">
      <div class="status-block" v-for="item in status[currentArr]" :key="item.title" :style="{ background: item.style }">
        <component :fillColor="item.iconColor" :is="item.icon"></component>
        <div class="block-header">
          <span>{{item.title}}</span>
        </div>
        <div class="block-counter">
          {{item.amount}}
        </div>
        <div class="block-footer">{{item.compare}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentArr: 0,
    status: [
      [
        {
          title: '現有電腦財產數量',
          amount: 1527,
          compare: '20% from last month',
          icon: 'mac-icon',
          iconColor: '#ff8631f2',
          style: 'linear-gradient(#ff8631f2 63%, #fd4600f7 130%)'
        },
        {
          title: '現有非電腦財產數量',
          amount: 983,
          compare: '-3% from last month',
          icon: 'printer-icon',
          iconColor: '#49bbff94',
          style: 'linear-gradient(#49bbff94 26%, #0095f6 104%)'
        },
        {
          title: '新進電腦數量',
          amount: 10,
          compare: '0% from last month',
          icon: 'mac-icon',
          iconColor: 'rgb(96 135 255)',
          style: 'linear-gradient(180deg, rgb(96 135 255) 63%, rgb(0 51 81) 130%)'
        },
        {
          title: '未更新裝置',
          amount: 35,
          compare: '-15% from last month',
          icon: 'alert-icon',
          iconColor: '#c48fff',
          style: 'linear-gradient(#c48fff 63%, #430687 130%)'
        }
      ],
      [
        {
          title: '已完成更新',
          amount: 435,
          compare: '20% from last month',
          icon: 'progress-icon',
          iconColor: '#32dd86',
          style: 'linear-gradient(#32dd86 63%, #007322f7 130%)'
        },
        {
          title: '長期閒置裝置',
          amount: 10,
          compare: '-3% from last month',
          icon: 'power-icon',
          iconColor: 'rgb(0 0 0 / 59%)',
          style: 'linear-gradient(rgb(0 0 0 / 59%) 26%, rgb(0 0 0) 104%)'
        },
        {
          title: '長期未關機裝置',
          amount: 88,
          compare: '0% from last month',
          icon: 'power-on-icon',
          iconColor: '#ffe960',
          style: 'linear-gradient(#ffe960 -17%, #f09f25 98%)'
        },
        {
          title: '異常電腦數量',
          amount: 25,
          compare: '-15% from last month',
          icon: 'warning-icon',
          iconColor: 'rgb(255 94 94)',
          style: 'linear-gradient(180deg, rgb(255 94 94) 63%, rgb(192 5 5) 130%)'
        }
      ]
    ]
  }),
  methods: {
    scrollLeft () {
      this.currentArr = (this.currentArr + this.status.length - 1) % (this.status.length)
    },
    scrollRight () {
      this.currentArr = (this.currentArr + this.status.length + 1) % (this.status.length)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/theme.scss';
@import '@/assets/style/scss/button.scss';
.arrow-box{
  position: absolute;
  top: 30px;
  right: 0;
  border-radius: 40px;
  background-color: lighten($base, 25%);
  box-shadow: 0 2px 6px 0px #00000054;
  .arrow{
    color: $darker-background-text;
    &:hover{
      color: darken($darker-background-text, 20%);
    }
  }
}
.status-row{
  display: flex;
  overflow: hidden;
  padding-bottom: 10px;
  margin-top: 28px;
  justify-content: space-between;
  .currentAmout{
    background: linear-gradient(185deg, #ff9900f2 63%, #f16a35f7 130%);
  }
  .status-block+.status-block{
    margin-left: 2%;
  }
  .status-block{
    background-color: bisque;
    color: #ffffff;
    box-shadow: 0 7px 8px -2px #00000054;
    border-radius: 12px;
    padding: 10px;
    height: 172px;
    display: flex;
    flex: 1 0 23%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    .material-design-icon{
      position: absolute;
      padding: 5px;
      top: 4%;
      left: 5%;
      border-radius: 100%;
      background: white;
      color: black;
      width: 35px;
      height: 35px;
      text-align: center;
    }
    .block-header{
      font-size: 12px;
    }
    .block-counter{
      margin: 20px 0;
      font-size: 40px;
    }
    .block-footer{
      font-size: 12px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
    transition-duration: .25s;
  }

.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter{
  opacity: 0;
  transform: translateX(-400px);
}
.fade-leave-active {
  opacity: 0;
  transform: translateX(400px);
}
</style>
