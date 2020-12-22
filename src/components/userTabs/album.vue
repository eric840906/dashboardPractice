<template>
  <div>
    <div class="tab-content" style="justify-content: center;">
      <div class="friends-block">
        <h3 class="block-title">Album</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style lang="scss">
@import '@/assets/style/scss/theme.scss';
  .tab-content{
    display: flex;
    justify-content: center;
  }
  .block-title{
    font-weight: bolder;
  }
  .friends-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .friend-img{
        width: 100px;
        height: 100px;
    }
    .friend-info{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      h5{
        margin-bottom: 10px;
      }
    }
    li{
      display: flex;
      display: flex;
      flex: 0 0 40%;
      margin: 2% 5%;
      padding: 10px;
      background-color: $darker-background;
      @media (max-width: 768px) {
        flex: 0 0 100%;
        margin: 2%;
      }
      .material-design-icon{
        vertical-align: -webkit-baseline-middle;
        margin-right: 20px;
      }
      span{
        align-self: center;
      }
    }
  }
</style>
