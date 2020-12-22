<template>
  <div>
    <div class="tab-content" style="justify-content: center;">
      <div class="friends-block">
        <h3 class="block-title">Friends</h3>
        <ul class="friends-list">
          <li v-for="item in friendList" :key="item.name">
            <img class="friend-img" :src="item.pic" alt="">
            <div class="friend-info">
              <h5>{{item.name}}</h5>
              <span>{{item.intro}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    friendList: [
      {
        pic: 'https://www.androzin.com/media/uploads/gallery/blog/2016/quiz-grumpy-cat.png',
        name: 'Nope',
        intro: 'I said NO'
      },
      {
        pic: 'https://www.androzin.com/media/uploads/gallery/blog/2016/quiz-heavy-breathing-cat.png',
        name: 'Chubby',
        intro: "I'm not fat! I'm big boned!"
      },
      {
        pic: 'https://i.imgflip.com/cxfv0.jpg',
        name: 'Puffy',
        intro: 'Let me sleep'
      },
      {
        pic: 'https://i.pinimg.com/originals/bd/4d/84/bd4d843a6081db611a8302c86a8ff5f8.jpg',
        name: 'Smiley',
        intro: "I'm smiling"
      }
    ]
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
